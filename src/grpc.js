import Grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
import { generateReportCardHandler } from './service/handlers/pdfGeneratorHandlers'

const packageDefinition = protoLoader.loadSync(
    './src/service/pdf_generator_service.proto',
    {
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })

export const PdfService = Grpc.loadPackageDefinition(packageDefinition)
export const grpcServer = new Grpc.Server()

grpcServer.addService(PdfService.pdf.generator.PdfService.service, {
    generateReportCard: generateReportCardHandler
})


