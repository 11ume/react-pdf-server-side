import React from 'react'
import { Document, Page, Text, StyleSheet, View, Font, Image } from '@react-pdf/renderer'
// import DMSansRegular from '../fonts/DM_Sans/DMSans-Regular.ttf'
// import DMSansBold from '../fonts/DM_Sans/DMSans-Bold.ttf'
// import DMSansMedium from '../fonts/DM_Sans/DMSans-Medium.ttf'

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
    header: {
        width: '100%',
        height: 200,
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        flex: 1
    },
    organizationContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    organizationLogo: {
        minWidth: 120,
        justifyContent: 'center',
    },
    organizationName: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    classroomContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    teacherContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    teacherLabel: {
        flex: 1,
    },
    headerLabel: {
        fontSize: 10,
    },
    headerName: {
        fontSize: 10,
        maxWidth: 160,
        whiteSpace: 'pre-wrap',
        color: '#565656',
    },
    logo: {
        width: '50%',
        height: 'auto',
        alignSelf: 'center',
    },
    table: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    tableCellLabel: {
        fontSize: 10,
        color: '#2A205E',
        alignSelf: 'center',
        fontWeight: 600,
        fontFamily: 'DM Sans',
        textAlign: 'center'
    },
    textRow: {
        fontSize: 10,
        fontFamily: 'DM Sans',
        alignSelf: 'center'
    },
    textRowSubject: {
        fontSize: 10,
        fontFamily: 'DM Sans',
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
    tableCellFirst: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    tableCell: {
        flex: 0.3,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    tableRows: {
        flex: 1,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        flexDirection: 'column',
        border: '1px solid #DFDFDA',
    },
    tableRow: {
        height: 40,
        borderBottom: '1px solid #DFDFDA',
        flexDirection: 'row'
    },
    rowSubject: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    row: {
        flex: 0.3,
        justifyContent: 'center',
        marginHorizontal: 20,
    }
})


const ReportCard = ({ subjects }) => (
    <Document style={styles.document}>
        <Page size='A4' style={styles.page}>
            <View style={styles.header}>
                <View style={styles.organizationContainer}>
                    <View style={styles.organizationLogo}>
                        <Image style={styles.logo} source={'https://images.squarespace-cdn.com/content/v1/53fcf6cae4b0799274cd1991/1501877067092-FCW8OXSXKCZGLR8674SV/DelCampo+School+Logo.png'} />
                    </View>
                    <View style={styles.organizationName}>
                        <Text style={styles.headerLabel}>Escuela de Jornada Simple N° 12 de 12 "Provincia del Chaco</Text>
                        <Text style={styles.headerName}>Nuevo colegio del San Sarasa</Text>
                    </View>
                </View>
                <View style={styles.classroomContainer}>
                    <View style={styles.teacherContainer}>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>Nombre</Text>
                            <Text style={styles.headerName}>Macarena Gonzalez Cazón</Text>
                        </View>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>DNI</Text>
                            <Text style={styles.headerName}>49527895</Text>
                        </View>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>Curso</Text>
                            <Text style={styles.headerName}>5° B TM</Text>
                        </View>
                    </View>
                    <View style={styles.teacherContainer}>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>Nivel</Text>
                            <Text style={styles.headerName}>Primario</Text>
                        </View>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>Ciclo lectivo</Text>
                            <Text style={styles.headerName}>2021</Text>
                        </View>
                        <View style={styles.teacherLabel}>
                            <Text style={styles.headerLabel}>N° de órden</Text>
                            <Text style={styles.headerName}>5</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.table}>
                    <View style={styles.tableHeader}>
                        <View style={styles.tableCellFirst} />
                        <View style={styles.tableCell}>
                            <Text style={styles.tableCellLabel}>Primer trimestre</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.tableCellLabel}>Segundo trimestre</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.tableCellLabel}>Tercer trimestre</Text>
                        </View>
                        <View style={styles.tableCell}>
                            <Text style={styles.tableCellLabel}>Final</Text>
                        </View>
                    </View>
                    <View style={styles.tableRows}>
                        {subjects.map(({ name, periods }, key) => {
                            const [first, second, third] = periods
                            const total = Math.round((first + second + third) / 3)
                            return (
                                <View style={styles.tableRow} key={key}>
                                    <View style={styles.rowSubject}>
                                        <Text style={styles.textRowSubject}>{name}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.textRow}>{first}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.textRow}>{second}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.textRow}>{third}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.textRow}>{total}</Text>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        </Page>
    </Document>
)

export default ReportCard