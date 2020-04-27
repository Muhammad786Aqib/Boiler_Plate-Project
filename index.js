const express = require("express");
const app = express();
const mongoose = require('mongoose');



mongoose.connect('mongodb+srv://React:788786111@cluster0-dgyoa.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true })
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.error(err))


app.get('/',(req,res)=>{
    res.send({halli:"Hallo Iam aqib"})

})

app.listen(5000)