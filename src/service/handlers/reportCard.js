class PdfGeneratorHandlers {
    constructor(events) {
        this.events = events
    }

    // TODO handle errors
    GenerateReportCard({ request }, callback) {
        const { data } = request
        this.events
            .GenerateReportCard(data)
            .then(() => callback(null, { status: { code: 0 } }))
            .catch((err) => {
                const message = 'Something went wrong'
                const code = 'unknown'
                console.error(err)
                callback(null, {
                    status: {
                        code: 1,
                        message,
                        details: [{ code }]
                    }
                })
            })
    }
}

export default PdfGeneratorHandlers