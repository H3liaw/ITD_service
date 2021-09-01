import express from 'express';
const router = express.Router();

//contoroller
import RContoroller from '../../contoroller/refund/registercontoroller.js';

router.post('/Register', RContoroller.RegisterContoroller);


export default router;