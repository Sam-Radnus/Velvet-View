const express=require('express');
const app=express();
const cors=require('cors');
const mongoose=require('mongoose')
const User=require('./models/user.model');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs')
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://sam_sundar:brucewayneisbatman@cluster0.o1qwt.mongodb.net/mernstack?retryWrites=true&w=majority')
app.get('/*',(req,res)=>{

})
app.post('/api/SignUp',async(req,res)=>{
    console.log(req.body);
    try{
        const newPassword=await bcrypt.hash(req.body.password,10);
        await User.create({
            name:req.body.name,
            email:req.body.email,
            password:newPassword,
        })
       // console.log(newPassword);
        
       const token=jwt.sign({
        name:req.body.name,
        email:req.body.email,
    },
    'secret123')
        res.json({status:'OK',User:token})
    }
    catch(err)
    {
        console.log(err);
        res.json({status:'error',message:'Some Error Occured'})
    }
})
app.post('/api/LogIn',async (req,res)=>{
    const user=await User.findOne({
        email:req.body.email,
    })
    if(!user)
    {
        return {status:'error',error:'account not found'}
    }
    const isPasswordValid=await bcrypt.compare(req.body.password,user.password);
    console.log(req.body.password);
    console.log(user.password);
    if(isPasswordValid)
    {
        
        const token=jwt.sign({
            name:user.name,
            email:user.email,
        },
        'secret123')
        
        return res.json({status:'ok',user:token})
    }
    else{
        console.log(req.body);
        return res.json({status:'error',user:false})
    }

})
app.listen(3000,()=>{
    console.log("server started on port#3000");
})