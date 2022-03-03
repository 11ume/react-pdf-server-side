import React from 'react'
import { render } from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'
import { subjects } from '../subjects.mock'

const Root = () => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <ReportCard subjects={subjects} />
    </PDFViewer>
)

render(<Root />, document.getElementById('root'))