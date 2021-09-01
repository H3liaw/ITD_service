import express from 'express';
const router = express.Router();

//contoroller
import LContoroller from '../../contoroller/refund/listcontoroller.js';

router.post('/List',
LContoroller.ListContoroller);


export default router;