import React from 'react'
import createError from 'http-errors'
import { renderToStream } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'
import reportCardPayload from '../mocks/generateReportCard.mock'
const { organization, institution, classroom, principal, student, subjects } = reportCardPayload

export const renderReportCard = (_req, res, next) => renderToStream(<ReportCard
    principal={principal}
    student={student}
    subjects={subjects}
    organization={organization}
    institution={institution}
    classroom={classroom}
/>)
    .then((reader) => {
        res.set('Content-Type', 'application/pdf')
        reader.pipe(res)
    })
    .catch((err) => next(createError(500, err)))