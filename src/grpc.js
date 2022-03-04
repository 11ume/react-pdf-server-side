import Grpc from 'grpc'
import * as protoLoader from '@grpc/proto-loader'
import ReportCardHandlers from './service/handlers/reportCard'
import Events from './actors/events'

const packageDefinition = protoLoader.loadSync(
    './src/service/events.proto',
    {
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })

export const eventsProto = Grpc.loadPackageDefinition(packageDefinition)
export const grpcServer = new Grpc.Server()

const events = new Events()
const { EventService } = eventsProto.pdfGenerator.events
grpcServer.addService(EventService.service, new ReportCardHandlers(events))


