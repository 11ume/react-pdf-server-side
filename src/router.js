import React from 'react'
import { Router } from 'express'
import { renderToStream } from '@react-pdf/renderer'
import ReportCard from './components/reportCard'

const subjects = [{
    name: 'Matemática',
    periods: [3, 6, 8]
},
{
    name: 'Prácticas del lenguaje',
    periods: [4, 5, 6]
}, {
    name: 'Ciencias sociales',
    periods: [9, 9, 9]
},
{
    name: 'Ciencias naturales',
    periods: [5, 5, 10]
},
{
    name: 'Inglés',
    periods: [6, 8, 6]
}, {
    name: 'Educación física',
    periods: [7, 7, 6]
},
{
    name: 'Educación artística',
    periods: [9, 4, 6]
},
{
    name: 'Robótica',
    periods: [9, 8, 8]
},
{
    name: 'Pensamiento de diseño',
    periods: [10, 10, 10]
}]

const r = Router()
r.get('/report_card', (_req, res, next) => renderToStream(<ReportCard subjects={subjects} />)
    .then((reader) => {
        res.set('Content-Type', 'application/pdf')
        reader.pipe(res)
    })
    .catch(next))

export default r