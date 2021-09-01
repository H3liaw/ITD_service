import express from 'express';
const router = express.Router();

//contoroller
//import PaymentContoroller from '../../contoroller/paymentcontroller.js';

router.post('/GetRecently',function(req,res){
    res.send('okay')
}
);


export default router;