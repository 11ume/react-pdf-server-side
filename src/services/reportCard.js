import React from 'react'
import { renderToStream } from '@react-pdf/renderer'
import { createError } from '../error'
import ReportCard from '../components/reportCard'

export const renderReportCard = ({
    principal,
    student,
    subjects,
    organization,
    institution,
    classroom,
}) => renderToStream(<ReportCard
    principal={principal}
    student={student}
    subjects={subjects}
    organization={organization}
    institution={institution}
    classroom={classroom}
/>)
    .catch((err) => {
        const message = 'An error occurred while trying to generate the student report card'
        throw Error(createError(message, err))
    })