import express from 'express';
const router = express.Router();

//contoroller
import PaymentContoroller from '../../contoroller/itd/paymentcontroller.js';

router.post('/Search',
PaymentContoroller.GetPayment
);


export default router;