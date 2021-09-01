import axios from 'axios';
import qs from 'qs';

function GetToken (req,res,next) { 
  console.log("GetToken *****************************************************");


  var data = qs.stringify({
    'grant_type': 'password',
    'username': '',
    'password': '',
    'client_id': 'mmp-web-api',
    'scope': 'openid mmp-webpanel ',
    'client_secret': '' 
  });
  var config = {
    method: 'post',
    url: 'https://sso.sadadpsp.ir/identity/connect/token',
    headers: { 
      'contant-Type': 'application/x-www-form-urlencoded'
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {

    console.log(error);
    res.status(400).send(error);
  });
  
};


export default {GetToken};




// function GetBankInfo (req,res,next) { 
//   const body = { RetrievalRefNo: '232333',
//   Amount: '465746',
//   TerminalId: 'dsfsdfsdf',
//   SystemTraceNo:'dsfsdfsdf',
//   RefundAmount:'233333',
//   Token:req.token,
//   TransferMethod:'' };
  
//   const headers = { 
//         'access_token': '' ,
//         'Content-Type': 'application/json',
//         'Sign-Data': '23rwefwe',
//         'Sign': 'sdfsdfdsf'
//     };
//   axios.post('https://host:port/api/v0/refund/Register', body, { headers })
//   .then((bankInfogot)=>{res.json(bankInfogot)}, 
//    next()
//   );
// };
