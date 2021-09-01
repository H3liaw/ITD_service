import express from 'express';
const router = express.Router();

//contoroller
import HContoroller from '../../contoroller/refund/historycontoroller.js';

router.post('/history',
HContoroller.HistoryContoroller);


export default router;