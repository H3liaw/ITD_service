import express from 'express';
const router = express.Router();

//contoroller
import RWNContoroller from '../../contoroller/refund/registerwithnewcardcontoroller.js';

router.post('/RegisterWithNewCard', 
RWNContoroller.RegisterWithNewCardContoroller);


export default router;