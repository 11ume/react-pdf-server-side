import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
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
    tableBodyName: {
        fontSize: 10,
        fontFamily: 'DM Sans',
    },
    tableHeader: {
        height: 40,
        flexDirection: 'row',
        backgroundColor: '#e3e3e3',
        borderBottom: '1px solid #DFDFDA',
    },
    tableHeaderRowFirst: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    tableHeaderRow: {
        flex: 0.3,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    tableBodyContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    tableBodyWrapper: {
        flex: 1,
        borderBottom: '1px solid #DFDFDA',
        flexDirection: 'row',
    },
    tableBodyRowSubject: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    tableBodyRow: {
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
    },
    tableTitle: {
        fontSize: 12,
        marginHorizontal: 5,
        marginBottom: 5
    }
})
