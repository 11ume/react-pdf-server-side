import React from 'react'
import { Document, Page, Text, StyleSheet, View, Font, Image } from '@react-pdf/renderer'
import DMSansRegular from '../fonts/DM_Sans/DMSans-Regular.ttf'
import DMSansBold from '../fonts/DM_Sans/DMSans-Bold.ttf'
import DMSansMedium from '../fonts/DM_Sans/DMSans-Medium.ttf'

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
        height: 205,
        display: 'flex',
        flexDirection: 'column',
    },
    body: {
        flex: 1,
    },
    footer: {
        flex: 0.3,
    },
    organizationContainer: {
        width: '100%',
        minHeight: 100,
        display: 'flex',
        flexDirection: 'row',
    },
    logoContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 'auto',
        alignSelf: 'center',
    },
    organizationName: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    organizationLabel: {
        fontSize: 12,
    },
    organizationContent: {
        fontSize: 11,
        maxWidth: 160,
        whiteSpace: 'pre-wrap',
        fontWeight: 600
    },
    informationContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    classroomContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    classroomLabelContainer: {
        flex: 0.5,
        flexDirection: 'row',
    },
    classroomLabelContainerFirst: {
        flex: 1,
        flexDirection: 'row',
    },
    headerLabel: {
        fontSize: 11,
    },
    headerContent: {
        fontSize: 11,
        maxWidth: 160,
        whiteSpace: 'pre-wrap',
        color: '#6D7878',
        marginLeft: 5,
        fontWeight: 600
    },
    table: {
        flex: 1,
        flexBasis: '10em',
        borderRadius: 6,
        border: '1px solid #DFDFDA',
    },
    tableCellLabel: {
        fontSize: 10,
        color: '#2A205E',
        alignSelf: 'center',
        fontWeight: 600,
        fontFamily: 'DM Sans',
        textAlign: 'center'
    },
    rowLabel: {
        fontSize: 10,
        fontFamily: 'DM Sans',
        alignSelf: 'center'
    },
    labelRowSubjectName: {
        fontSize: 10,
        fontFamily: 'DM Sans',
    },
    tableCells: {
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#e3e3e3',
        borderBottom: '1px solid #DFDFDA',
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
        flexDirection: 'column',
    },
    tableRow: {
        flex: 1,
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
    },
    signatureContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    signatureWrapper: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20
    },
    signatureLine: {
        minHeight: 1,
        backgroundColor: '#6D7878'
    },
    signatureLabel: {
        fontSize: 10,
        alignSelf: 'center',
        paddingTop: 20
    },
    signatureImage: {
        width: '80%',
        minHeight: 50,
        height: 'auto',
        margin: 'auto',
    }
})

const ReportCardHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.organizationContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={'https://media.istockphoto.com/vectors/education-symbol-design-template-pencil-and-book-icon-stylized-vector-id1171617683?k=20&m=1171617683&s=612x612&w=0&h=E2wEAH0mQ2j-MT_i0sHj_6OUWoJKlD-3Pt7_Y8WhzD0='} />
                </View>
                <View style={styles.organizationName}>
                    <Text style={styles.organizationLabel}>Escuela de Jornada Simple N° 12 de 12 "Provincia del Chaco"</Text>
                    <Text style={styles.organizationContent}>Nuevo colegio del San Sarasa</Text>
                </View>
            </View>
            <View style={styles.informationContainer}>
                <View style={styles.classroomContainer}>
                    <View style={styles.classroomLabelContainerFirst}>
                        <Text style={styles.headerLabel}>Nombre:</Text>
                        <Text style={styles.headerContent}>Macarena Gonzalez Cazón Macarrón Suprabond</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>DNI:</Text>
                        <Text style={styles.headerContent}>49527895</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>Curso:</Text>
                        <Text style={styles.headerContent}>5° B TM</Text>
                    </View>
                </View>
                <View style={styles.classroomContainer}>
                    <View style={styles.classroomLabelContainerFirst}>
                        <Text style={styles.headerLabel}>Nivel:</Text>
                        <Text style={styles.headerContent}>Primario</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>Ciclo lectivo:</Text>
                        <Text style={styles.headerContent}>2021</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>N° de órden:</Text>
                        <Text style={styles.headerContent}>5</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const ReportCardFooter = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.signatureContainer}>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage}>
                        <Image source={'https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Hemsworth_Signature.png'}></Image>
                    </View>
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>Cristina Gomez - Directora</Text>
                    </View>
                </View>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage}>
                    </View>
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>Firma padre / madre / tutor</Text>
                    </View>
                </View>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage}>
                    </View>
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>Firma del estudiante</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const ReportCardBody = ({ subjects }) => {
    return (
        <View style={styles.body}>
            <View style={[styles.table, { maxHeight: 50 * subjects.length }]}>
                <View style={styles.tableCells}>
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
                                    <Text style={styles.labelRowSubjectName}>{name}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.rowLabel}>{first}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.rowLabel}>{second}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.rowLabel}>{third}</Text>
                                </View>
                                <View style={styles.row}>
                                    <Text style={styles.rowLabel}>{total}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </View>
    )
}

const ReportCard = ({ subjects }) => {
    const subjectsLimit = subjects.length <= 9
    return (
        <Document style={styles.document}>
            {subjectsLimit
                ? (
                    <Page size='A4' style={styles.page}>
                        <ReportCardHeader />
                        <ReportCardBody subjects={subjects} />
                        <ReportCardFooter />
                    </Page>
                ) : (
                    <>
                        <Page size='A4' style={styles.page}>
                            <ReportCardHeader />
                            <ReportCardBody subjects={subjects.slice(0, 9)} />
                        </Page>
                        <Page size='A4' style={styles.page}>
                            <ReportCardBody subjects={subjects.slice(9, subjects.length)} />
                            <ReportCardFooter />
                        </Page>
                    </>
                )}
        </Document>
    )
}

export default ReportCard