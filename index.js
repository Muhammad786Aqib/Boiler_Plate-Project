const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const User = ("./user.js")


mongoose.connect('mongodb+srv://React:788786111@cluster0-dgyoa.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true })
    .then(()=>console.log("DB Connected"))
    .catch((err)=>console.error(err))


// app.get('/',(req,res)=>{
//     res.send({halli:"Hallo Iam aqib"})

// })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register',(req,res)=>{
    const user = new User(req.body)

    user.save((err,userData)=>{
        if(err) return res.json({success:false,err})
    })
    return res.status(200)
})

app.listen(5000)