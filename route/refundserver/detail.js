import express from 'express';
const router = express.Router();

//contoroller
import DContoroller from '../../contoroller/refund/detailcontoroller.js';

router.post('/detail',
DContoroller.DetailContoroller);


export default router;