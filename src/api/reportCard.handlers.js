import React from 'react'
import createError from 'http-errors'
import { renderToStream } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'
import { subjects } from '../mocks/subjects.mock'
import { signatures } from '../mocks/signatures.mock'
import { organization, principal, student } from '../mocks/organization.mock'

export const renderReportCard = (_req, res, next) => renderToStream(<ReportCard
    principal={principal}
    student={student}
    subjects={subjects}
    signatures={signatures}
    organization={organization}
/>)
    .then((reader) => {
        res.set('Content-Type', 'application/pdf')
        reader.pipe(res)
    })
    .catch((err) => next(createError(500, err)))