import { Router } from 'express'
import { renderReportCard } from './reportCard.handlers'

const r = Router()
r.get('/report_card', renderReportCard)
export default r