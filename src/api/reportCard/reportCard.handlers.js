import createError from 'http-errors'
import { renderReportCard } from '../../services/reportCard'

export const renderReportCardHandler = (req, res, next) => {
    renderReportCard(req.body)
        .then((reader) => {
            res.set('Content-Type', 'application/pdf')
            reader.pipe(res)
        })
        .catch((err) => next(createError(500, err)))
}