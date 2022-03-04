import Grpc from 'grpc'
import httpServer from './app'
import { service, env } from './config'
import { grpcServer } from './grpc'

grpcServer.bindAsync(`${service.grpc.host}:${service.grpc.port}`, Grpc.ServerCredentials.createInsecure(), (err) => {
    if (err) {
        console.error('grpc server error', err)
        return
    }

    console.log('grpc server running on port:' + service.grpc.port)
})
httpServer.listen(service.http.port, () => console.log('http server running on port:' + service.http.port))
grpcServer.start()

console.log('service env:', env)