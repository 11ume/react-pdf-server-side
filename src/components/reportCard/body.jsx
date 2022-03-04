
import React from 'react'
import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

// TODO add i18n
const ReportCardBody = ({ className = '', subjects }) => {
    return (
        <View style={[styles.body, className]}>
            <Text style={styles.tableTitle}>Notas</Text>
            <View style={[styles.table, { maxHeight: 40 * subjects.length }]}>
                <View style={styles.tableHeader}>
                    <View style={styles.tableHeaderRowFirst} />
                    <View style={styles.tableHeaderRow}>
                        <Text style={styles.tableCellLabel}>Primer trimestre</Text>
                    </View>
                    <View style={styles.tableHeaderRow}>
                        <Text style={styles.tableCellLabel}>Segundo trimestre</Text>
                    </View>
                    <View style={styles.tableHeaderRow}>
                        <Text style={styles.tableCellLabel}>Tercer trimestre</Text>
                    </View>
                    <View style={styles.tableHeaderRow}>
                        <Text style={styles.tableCellLabel}>Final</Text>
                    </View>
                </View>
                <View style={styles.tableBodyContainer}>
                    {subjects.map(({ name, periods }, key) => {
                        const [first, second, third] = periods
                        const total = Math.round((first + second + third) / 3)
                        return (
                            <View style={styles.tableBodyWrapper} key={key}>
                                <View style={styles.tableBodyRowSubject}>
                                    <Text style={styles.tableBodyName}>{name}</Text>
                                </View>
                                <View style={styles.tableBodyRow}>
                                    <Text style={styles.rowLabel}>{first}</Text>
                                </View>
                                <View style={styles.tableBodyRow}>
                                    <Text style={styles.rowLabel}>{second}</Text>
                                </View>
                                <View style={styles.tableBodyRow}>
                                    <Text style={styles.rowLabel}>{third}</Text>
                                </View>
                                <View style={styles.tableBodyRow}>
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

export default ReportCardBody