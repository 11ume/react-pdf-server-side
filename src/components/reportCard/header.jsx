import React from 'react'
import { Text, View, Image } from '@react-pdf/renderer'
import { styles } from './styles'

// TODO add i18n
const ReportCardHeader = ({
    className = '',
    teacher,
    student,
    organization }) => {
    return (
        <View style={[styles.header, className]}>
            <View style={styles.organizationContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={organization.src} />
                </View>
                <View style={styles.organizationName}>
                    <Text style={styles.organizationLabel}>{organization.name}</Text>
                    <Text style={styles.organizationContent}>{organization.formalName}</Text>
                </View>
            </View>
            <View style={styles.informationContainer}>
                <View style={styles.classroomContainer}>
                    <View style={styles.classroomLabelContainerFirst}>
                        <Text style={styles.headerLabel}>Nombre:</Text>
                        <Text style={styles.headerContent}>{teacher.name}</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>{`${teacher.identification.type}`}:</Text>
                        <Text style={styles.headerContent}>{teacher.identification.number}</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>Curso:</Text>
                        <Text style={styles.headerContent}>{student.classroom.name}</Text>
                    </View>
                </View>
                <View style={styles.classroomContainer}>
                    <View style={styles.classroomLabelContainerFirst}>
                        <Text style={styles.headerLabel}>Nivel:</Text>
                        <Text style={styles.headerContent}>{student.level}</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>Ciclo lectivo:</Text>
                        <Text style={styles.headerContent}>{student.academicYear}</Text>
                    </View>
                    <View style={styles.classroomLabelContainer}>
                        <Text style={styles.headerLabel}>N° de órden:</Text>
                        <Text style={styles.headerContent}>{student.classroom.order}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReportCardHeader