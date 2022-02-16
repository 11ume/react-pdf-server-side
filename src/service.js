import path from 'node:path'
import express from 'express'
import cors from 'cors'
import router from './router'

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, 'fonts')))
app.use(router)
app.listen(4000, () => console.log('service listen in port: ' + 4000)) 