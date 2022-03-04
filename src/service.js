import path from 'node:path'
import express from 'express'
import cors from 'cors'
import reportCardRouter from './api/reportCard.router'
import { service, env } from './config'

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'static')))
app.use('api/v1', reportCardRouter)
app.listen(service.http.port, () => console.log('service port:' + service.http.port))
console.log('service env:', env)