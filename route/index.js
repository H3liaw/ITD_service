import express from 'express';
const router = express.Router();

//Todo:import ITD router
import TokenRoutes from './itdservice/accesstoken.js';
import PaymentRoutes from './itdservice/payment.js';
import BillRoutes from './itdservice/bill.js';

//Todo:import Refund router
import RegisterRoutes from './refundserver/register.js';
import confirmRoutes from './refundserver/confirm.js';
import CancelRoutes from './refundserver/cancel.js';
import InquiryRoutes from './refundserver/Inquiry.js';
import RetryRoutes from './refundserver/retry.js';
import ListRoutes from './refundserver/list.js';
import DetailList from './refundserver/detail.js';
import HistoryRoutes from './refundserver/history.js';
import RegisterWithNewCardRoutes from './refundserver/registerwithnewcard.js';


//ITd
router.use('/connect', TokenRoutes);
router.use('/BillTransactionReportService',
PaymentRoutes,
BillRoutes);

//Refund
router.use('/refund',
RegisterRoutes,
confirmRoutes,
CancelRoutes,
InquiryRoutes,
RetryRoutes,
ListRoutes,
DetailList,
HistoryRoutes,
RegisterWithNewCardRoutes);


export default router ;