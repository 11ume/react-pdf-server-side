import Grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
import PdfGeneratorHandlers from './service/handlers/reportCard'
import PdfGeneratorEvents from './service/events/pdfGeneratorEvents'

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

const pdfServiceEvents = new PdfGeneratorEvents()
grpcServer.addService(PdfService.pdf.generator.PdfService.service, new PdfGeneratorHandlers(pdfServiceEvents))


