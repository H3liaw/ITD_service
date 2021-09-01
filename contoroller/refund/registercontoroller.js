import axios from 'axios';
import qs from'qs';

function RegisterContoroller (req,res,next){
    console.log("==========================================");

    var data = qs.stringify({
    'RetrievalRefNo': 'dsfdsaf',
    'Amount': '3232323',
    'TerminalId': 'dsfsdfsdf',
    'SystemTraceNo': 'dsfsdfsdf',
    'RefundAmount': '233333',
    'Token': 'jl;iudsfhu hfejsdf',
    'TransferMethod': '' 
    });
    var config = {
    method: 'post',
    url: 'https://localhost/api/v0/refund/Register',
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


export default {RegisterContoroller};