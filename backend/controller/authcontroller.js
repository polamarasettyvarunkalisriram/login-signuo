const authmodel=require('../model/authmodel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
exports.signup=async(req,res)=>{
    try{
        const {name, email, password, isverified, phonenumber}=req.body;

        authmodel.finduser(email,async(err,result)=>{
            if(err){
                return res.status(500).json(err);
            }
            if(result.length>0){
                return res.status(400).json({mesg:'user is already exists'});
            }
            const hashedpassword=await bcrypt.hash(password,10);

            const userdata={
                name, email, password:hashedpassword, isverified, phonenumber
            }
            authmodel.createuser(userdata,(err,data)=>{
                if(err){
                    return res.status(500).json(err)
                }
                res.status(201).json({message:'User registered successfully'})
            })
        })
    }
    catch(error){
        res.status(500).json({erro:error.message})
    }
}
exports.logins=((req,res)=>{
    try{
        const {email,password}=req.body;

        authmodel.finduser(email,async(err,result)=>{
            if(err){
                return res.status(500).json({err,message:'databases error'})
            }
            if(result.length==0){
                return res.status(404).json({message:'User not found'})
            }

            const users=result[0];
             
            const ismatch=await bcrypt.compare(password,users.password);
            if(!ismatch){
                return res.status(401).json({message:'password invalid'});
            }
            const claims={
                id:users.user_id,
                email:users.email,
            }
            const token=jwt.sign(claims,process.env.JWT_SECRET,{notBefore:'5s',expiresIn:'10s'})

            res.status(200).json({token,claims})
        })
    }
    catch(error){
        return res.status(401).json({error,message:"Not authenticated"})
    }
})