import React from 'react'
import { Document, Page, Font } from '@react-pdf/renderer'
import ReportCardHeader from './header'
import ReportCardBody from './body'
import ReportCardFooter from './footer'
import { styles } from './styles'
import { pdf } from '../../config'

// import DMSansRegular from '../../static/fonts/DM_Sans/DMSans-Regular.ttf'
// import DMSansBold from '../../static/fonts/DM_Sans/DMSans-Bold.ttf'
// import DMSansMedium from '../../static/fonts/DM_Sans/DMSans-Medium.ttf'

Font.register({
    family: pdf.fonts.family, fonts: [{ src: pdf.fonts.regular.src, fontWeight: 600 }]
})

// Font.register({
//     family: 'DM Sans', fonts: [{
//         format: 'truetype',
//         src: DMSansRegular
//     }, {
//         format: 'truetype',
//         src: DMSansBold
//     }, {
//         format: 'truetype',
//         src: DMSansMedium
//     }]
// })

const ReportCard = ({
    principal,
    student,
    subjects,
    organization,
    institution,
    classroom,
    limit = 9 }) => {
    // max subjects limit supported per A4 page
    const subjectLimit = subjects.length <= limit
    const pageSize = 'A4'
    return (
        <Document style={styles.document}>
            {subjectLimit
                ? (
                    <Page size={pageSize} style={styles.page}>
                        <ReportCardHeader
                            organization={organization}
                            principal={principal}
                            student={student}
                            institution={institution}
                            classroom={classroom}
                        />
                        <ReportCardBody subjects={subjects} />
                        <ReportCardFooter principal={principal} />
                    </Page>
                ) : (
                    <>
                        <Page size={pageSize} style={styles.page}>
                            <ReportCardHeader
                                organization={organization}
                                principal={principal}
                                student={student}
                                institution={institution}
                                classroom={classroom}
                            />
                            <ReportCardBody subjects={subjects.slice(0, limit)} />
                            <ReportCardFooter principal={principal} />
                        </Page>
                        <Page size={pageSize} style={styles.page}>
                            <ReportCardBody
                                className={{ marginTop: 40 }}
                                subjects={subjects.slice(limit, subjects.length)}
                            />
                            <ReportCardFooter principal={principal} />
                        </Page>
                    </>
                )}
        </Document>
    )
}

export default ReportCard