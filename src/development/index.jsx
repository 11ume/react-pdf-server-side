import React from 'react'
import { render } from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'
import { subjects } from '../mocks/subjects.mock'
import { signatures } from '../mocks/signatures.mock'
import { organization, principal, student } from '../mocks/organization.mock'

const Root = () => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <ReportCard
            principal={principal}
            student={student}
            organization={organization}
            signatures={signatures}
            subjects={subjects}
        />
    </PDFViewer>
)

render(<Root />, document.getElementById('root'))