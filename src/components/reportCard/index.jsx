import React from 'react'
import { Document, Page, Font } from '@react-pdf/renderer'
import ReportCardHeader from './header'
import ReportCardBody from './body'
import ReportCardFooter from './footer'
import { styles } from './styles'
import DMSansRegular from '../../fonts/DM_Sans/DMSans-Regular.ttf'
import DMSansBold from '../../fonts/DM_Sans/DMSans-Bold.ttf'
import DMSansMedium from '../../fonts/DM_Sans/DMSans-Medium.ttf'

// Font.register({
//     family: 'DM Sans', fonts: [
//         { src: 'http://localhost:4000/DM_Sans/DMSans-Regular.ttf', fontWeight: 600 },
//     ]
// })

Font.register({
    family: 'DM Sans', fonts: [{
        format: 'truetype',
        src: DMSansRegular
    }, {
        format: 'truetype',
        src: DMSansBold
    }, {
        format: 'truetype',
        src: DMSansMedium
    }]
})

const ReportCard = ({ teacher, student, organization, signatures, subjects, limit = 9 }) => {
    // max subjects limit supported per A4 page
    const subjectLimit = subjects.length <= limit
    const pageSize = 'A4'
    return (
        <Document style={styles.document}>
            {subjectLimit
                ? (
                    <Page size={pageSize} style={styles.page}>
                        <ReportCardHeader
                            teacher={teacher}
                            student={student}
                            organization={organization}
                        />
                        <ReportCardBody subjects={subjects} />
                        <ReportCardFooter signatures={signatures} />
                    </Page>
                ) : (
                    <>
                        <Page size={pageSize} style={styles.page}>
                            <ReportCardHeader
                                teacher={teacher}
                                student={student}
                                organization={organization}
                            />
                            <ReportCardBody subjects={subjects.slice(0, limit)} />
                        </Page>
                        <Page size={pageSize} style={styles.page}>
                            <ReportCardBody subjects={subjects.slice(limit, subjects.length)} />
                            <ReportCardFooter signatures={signatures} />
                        </Page>
                    </>
                )}
        </Document>
    )
}

export default ReportCard