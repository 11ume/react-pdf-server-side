import path from 'node:path'
import express from 'express'
import cors from 'cors'
import createError from 'http-errors'
import { service, env } from './config'
import { isDev } from './utils'
import reportCardRouter from './api/reportCard.router'

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'static')))
app.use('/api/v1', reportCardRouter)
app.use((_req, _res, next) => next(createError(404)))
app.use((err, _req, res, _next) => {
    const message = err.message
    const status = err.status ?? 500
    res.status(status)
    if (isDev()) {
        res.json({
            message,
            err
        })
        return
    }

    res.json({ message: 'An error has occurred' })
})

app.listen(service.http.port, () => console.log('service port:' + service.http.port))
console.log('service env:', env)