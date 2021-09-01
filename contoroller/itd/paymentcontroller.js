import axios from 'axios';

function GetPayment(req,res,next){
    console.log( "Payment *****************************************************");


    const searchObject = JSON.stringify({
        'SummaryMode ': '',
        'PageSize': '',
        'PageNumber': '',
        'CardAcqs': '',
        'Terminals': '',
        'ToDate': '' ,
        'FromDate':'',
        'TransactionStatus':'',
        'TransactionType':'',
        'Amount':'',
        'Iban':'',
        'BillNumber':'',
        'PaymentNumber':'',
        'TerminalId':'',
        'ReferenceNumber':'',
        'TermType_ShaparakAbbr':'',
        'TransType_ShaparakAbbreviation':'',
        'TraceNo':'',
        'CardNumber':'',
        'Account':'',
        'MerchantId':''
    });
    const config = {
        method: 'post',
        url: 'https://mmpws.sadadpsp.ir/api/BillTransactionReportService/Search',
        headers: { 
          'contant-Type': 'application/json',
          'Authorization': 'Bearer 54364535f4',
          
        },
        searchObject : searchObject
    };

    axios(config)
    .then(function(response){
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
     console.log(error);
     res.status(408).send(error);
    });
};


export default {GetPayment};