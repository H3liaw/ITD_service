import express from 'express';
const router = express.Router();

//contoroller
import InqContoroller from '../../contoroller/refund/inquirycontoroller.js';

router.post('/Inquiry', 
InqContoroller.InquiryContoroller);


export default router;