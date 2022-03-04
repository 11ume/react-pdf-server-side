import dotenv from 'dotenv'

dotenv.config()

export const env = process.env.NODE_ENV
export const service = {
    http: {
        port: parseInt(process.env.HTTP_PORT) || 3000
    },
    grpc: {
        port: parseInt(process.env.GRPC_PORT) || 50051
    },
}

export const pdf = {
    fonts: {
        family: 'DM Sans',
        regular: {
            src: `http://localhost:${service.http.port}/fonts/DM_Sans/DMSans-Regular.ttf`
        }
    }
}

export const gcs = {
    bucket: process.env.BUCKET_NAME
}

export default {
    env,
    gcs,
    service
}
