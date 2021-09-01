import express from 'express';
const router = express.Router();

//contoroller
import ConContoroller from '../../contoroller/refund/confirmcontoroller.js';

router.post('/Confirm', 
ConContoroller.ConfirmContoroller);


export default router;