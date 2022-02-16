import React from 'react'
import { Router } from 'express'
import { renderToStream } from '@react-pdf/renderer'
import ReportCard from './components/reportCard'

const r = Router()
r.get('/report_card', (_req, res, next) => renderToStream(<ReportCard />)
    .then((reader) => {
        res.set('Content-Type', 'application/pdf')
        reader.pipe(res)
    })
    .catch(next))

export default r