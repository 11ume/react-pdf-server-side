import { Router } from 'express'
import { renderReportCardHandler } from './reportCard.handlers'

const r = Router()
r.post('/report_card', renderReportCardHandler)
export default r