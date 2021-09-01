import axios from 'axios';
import qs from'qs';


function HistoryContoroller (req,res,next){
 console.log("==========================================");


 var data = qs.stringify({
    'TerminalId': '',
    'FromDate': '',
    'ToDate': '',
    'RetrievalRefNo': '',
    'RefundStatusCode': '',
    'CardNo': '',
    'RefundAmountFrom': '',
    'RefundAmountTo': '',
    'OrderId': '',
    'Page': '',
    'Count': '' 
  });
  var config = {
    method: 'post',
    url: 'https://host/api/v0/refund/history',
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



export default {HistoryContoroller};