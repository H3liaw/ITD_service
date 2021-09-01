import express from 'express';
const router = express.Router();

//contoroller
import CanContoroller from '../../contoroller/refund/cancelcontoroller.js';

router.post('/Cancel', 
CanContoroller.CancelContoroller);


export default router;