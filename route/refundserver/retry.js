import express from 'express';
const router = express.Router();

//contoroller
import RContoroller from '../../contoroller/refund/registercontoroller.js';

router.post('/Retry',
RContoroller.RegisterContoroller);


export default router;