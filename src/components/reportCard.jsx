import React from 'react'
import { Document, Page, Text, StyleSheet, View, Font, Image } from '@react-pdf/renderer'
// import DMSansRegular from './fonts/DM_Sans/DMSans-Regular.ttf'
// import DMSansBold from './fonts/DM_Sans/DMSans-Bold.ttf'
// import DMSansMedium from './fonts/DM_Sans/DMSans-Medium.ttf'

Font.register({
    family: 'DM Sans', fonts: [
        { src: 'http://localhost:4000/DM_Sans/DMSans-Regular.ttf', fontWeight: 600 },
    ]
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

const styles = StyleSheet.create({
    document: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    page: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: 'white'
    },
    table: {
        width: '100%',
        height: '100%',
        maxHeight: 500,
        flexDirection: 'column',
    },
    organizationLogo: {
        width: 80,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20,
    },
    logo: {
        width: '100%',
        height: 'auto',
    },
    text: {
        fontSize: 10,
        color: '#2A205E',
        alignSelf: 'center',
        fontWeight: 600,
        fontFamily: 'DM Sans'
    },
    textRow: {
        fontSize: 10,
        alignSelf: 'center',
        fontFamily: 'DM Sans'
    },
    tableHeader: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'rgb(248, 248, 246)',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        border: '1px solid #DFDFDA',
        borderBottom: 0,
    },
    tableCell: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    tableRow: {
        width: '100%',
        height: 40,
        borderBottom: '1px solid #DFDFDA',
        justifyContent: 'center'
    },
    tableRows: {
        width: '100%',
        height: '100%',
        display: 'flex',
        border: '1px solid #DFDFDA',
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        flexDirection: 'column'
    }
})

const ReportCard = () => (
    <Document style={styles.document}>
        <Page size='A4' style={styles.page}>
            <View style={styles.table}>
                <View style={styles.organizationLogo}>
                    <Image style={styles.logo} source={'https://images.squarespace-cdn.com/content/v1/53fcf6cae4b0799274cd1991/1501877067092-FCW8OXSXKCZGLR8674SV/DelCampo+School+Logo.png'} />
                </View>
                <View style={styles.tableHeader}>
                    <View style={styles.tableCell} />
                    <View style={styles.tableCell}>
                        <Text style={styles.text}>Primer trimestre</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.text}>Segundo trimestre</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.text}>Tercer trimestre</Text>
                    </View>
                    <View style={styles.tableCell}>
                        <Text style={styles.text}>Final</Text>
                    </View>
                </View>
                <View style={styles.tableRows}>
                    <View style={styles.tableRow}>
                        {/* <Text style={styles.textRow}>Matemática</Text> */}
                    </View>
                    <View style={styles.tableRow}>
                        {/* <Text style={styles.textRow}>Prácticas del lenguaje</Text> */}
                    </View>
                    <View style={styles.tableRow}>
                        {/* <Text style={styles.textRow}>Ciencias sociales</Text> */}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
)

export default ReportCard