import React from 'react'
import { renderToStream } from '@react-pdf/renderer'
import ReportCard from './components/reportCard'
import { subjects } from './mocks/subjects.mock'
import { signatures } from './mocks/signatures.mock'
import { organization, teacher, student } from './mocks/organization.mock'

export const renderReportCard = (_req, res, next) => renderToStream(<ReportCard
    teacher={teacher}
    student={student}
    organization={organization}
    signatures={signatures}
    subjects={subjects}
/>)
    .then((reader) => {
        res.set('Content-Type', 'application/pdf')
        reader.pipe(res)
    })
    .catch(next)