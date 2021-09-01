import axios from 'axios';
import qs from'qs';


function RegisterWithNewCardContoroller (req,res,next){
 console.log("==========================================");


 var data = qs.stringify({
    'RefundId': '',
    'CardNo': '' 
  });
  var config = {
    method: 'post',
    url: 'localhost:4000/api/v0/refund/RegisterWithNewCard',
    headers: { 
      'Sign-Data': '', 
      'Sign': '', 
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
    res.status(408).send(error);
  });
}  



export default {RegisterWithNewCardContoroller};