import path from 'node:path'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import createError from 'http-errors'
import { isDev } from './utils'
import reportCardRouter from './api/reportCard/reportCard.router'

const app = express()
app.use(cors())
app.use(bodyParser.json())
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

    res.json({ message: 'Something went wrong' })
})

export default app