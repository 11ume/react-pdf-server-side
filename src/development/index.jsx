import React from 'react'
import { render } from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'
import reportCardPayload from '../mocks/generateReportCard.mock'
const { organization, institution, classroom, principal, student, subjects } = reportCardPayload

const Root = () => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <ReportCard
            principal={principal}
            student={student}
            subjects={subjects}
            organization={organization}
            institution={institution}
            classroom={classroom}
        />
    </PDFViewer>
)

render(<Root />, document.getElementById('root'))