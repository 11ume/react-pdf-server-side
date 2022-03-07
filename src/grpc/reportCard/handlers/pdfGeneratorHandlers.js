export const generateReportCardHandler = ({ request }, callback) => {
    console.log(request)
    callback(null, { status: { code: 0 }, report_card_url: '' })
    // upload file here
    //     .then(() => callback(null, { status: { code: 0 }, report_card_url: '' }))
    //     .catch((err) => {
    //         const message = 'Something went wrong'
    //         const code = 'unknown'
    //         console.error(err)
    //         callback(null, {
    //             status: {
    //                 code: 1,
    //                 message,
    //                 details: [{ code }]
    //             }
    //         })
    //     })
}