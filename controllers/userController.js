const userModel = require('../models/userModel');

const create_User = async (req,res)=>{
        //create new user
        try {
            const newUser =  new userModel.user({
                username: req.body.username,
                password: req.body.password,
                position: req.body.position
              });  
        
              const user = await newUser.save()
              res.status(200).json(user)
            //   (err =>{
            //       if(!err) return res.json(newUser);
            //       return res.status(400).json({message : `Error while creating categories ${err}`})
            //   })
      
        } catch (error) {
            console.log(error);
            res.status(500).json(error)
        }
        
}
const login =async (req,res)=>{
    try {
       
       const user = await userModel.user.findOne({username:req.body.username,password:req.body.password});
       !user && res.status(400).json('Wrong username or password')
   
       res.status(200).json({user:user})
   
     } catch (error) {
       res.status(500).json(error)
       
     }
}

module.exports = {create_User,login}