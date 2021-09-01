import axios from 'axios';
import qs from'qs';


function CancelContoroller (req,res,next){
 console.log("==========================================");


    var data = qs.stringify({
        'RefundId': '3232323' 
    });
    var config = {
        method: 'post',
        url: 'https://localhost/api/v0/refund/Cancel',
        headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Sign-Data': '23rwefwe', 
        'Sign': 'sdfsdfdsf'
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



export default {CancelContoroller};