import React from 'react'
import { render } from 'react-dom'
import { PDFViewer } from '@react-pdf/renderer'
import ReportCard from '../components/reportCard'

const Root = () => (
    <PDFViewer style={{ width: '100%', height: '100%' }}>
        <ReportCard />
    </PDFViewer>
)

render(<Root />, document.getElementById('root'))