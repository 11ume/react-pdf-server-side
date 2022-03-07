import Grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
import { generateReportCardHandler } from './grpc/reportCard/handlers/pdfGeneratorHandlers'

const pdfGeneratorServiceDefinition = protoLoader.loadSync(
    './src/grpc/reportCard/pdf_generator_service.proto',
    {
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })

export const PdfGeneratorService = Grpc.loadPackageDefinition(pdfGeneratorServiceDefinition)
export const grpcServer = new Grpc.Server()

const { PdfService } = PdfGeneratorService.pdf.generator
grpcServer.addService(PdfService.service, {
    generateReportCard: generateReportCardHandler
})


