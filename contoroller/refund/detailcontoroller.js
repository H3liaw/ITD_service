import axios from 'axios';
import qs from'qs';


function DetailContoroller (req,res,next){
 console.log("==========================================");


 var data = qs.stringify({
    'RefundId': '' 
  });
  var config = {
    method: 'post',
    url: 'https://localhost/api/v0/refund/detail',
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
  
};  



export default {DetailContoroller};