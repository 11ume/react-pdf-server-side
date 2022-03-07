import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import { styles } from './styles'

// TODO add i18n
const ReportCardFooter = ({ className = '', principal }) => {
    return (
        <View style={[styles.footer, className]}>
            <View style={styles.signatureContainer}>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage}>
                        <Image source={principal.signature_url} />
                    </View>
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>{`${principal.name} ${principal.last_name} - Directivo`}</Text>
                    </View>
                </View>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage} />
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>Firma padre / Madre / Tutor</Text>
                    </View>
                </View>
                <View style={styles.signatureWrapper}>
                    <View style={styles.signatureImage} />
                    <View style={styles.signatureLine} />
                    <View style={styles.signatureLabel}>
                        <Text>Firma del estudiante</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReportCardFooter