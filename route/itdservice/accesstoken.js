import express from 'express';
const router = express.Router();

//contoroller
import TokenContoroller from '../../contoroller/itd/tokencontroller.js';

router.post('/token',
TokenContoroller.GetToken);


export default router;