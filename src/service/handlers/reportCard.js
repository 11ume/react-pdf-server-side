class ReportCardHandlers {
    constructor(events) {
        this.events = events
    }

    GeneratePdf({ request }, callback) {
        const { data } = request
        this.events
            .GeneratePdf(data)
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

export default ReportCardHandlers