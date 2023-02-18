import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//Register a new user
export const registerUser = async(req,res)=>{



    try {
        // const existingUser = await UserModel.findOne({username:req.body.username});
        // if (!existingUser) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password,salt);
            req.body.password = hashPassword
            const newUser = await UserModel(req.body);

            const {username} = req.body

            try {
                

                const oldUser = await UserModel.findOne({username})
                if(oldUser){
                    return res.status(400).json({meassage:"User name is alredy taken"})
                }

                const user = await newUser.save()
                const token = jwt.sign({
                    username:user.username,id:user._id
                },process.env.JWT_KEY,{expiresIn:'1h'})

                res.status(200).json({message:"User Created",user,token}) 
                
            } catch (error) {
                
            }


        // }else{
        //     res.status(400).json({message:"User Already Exist"}) 
        // }
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }



    // const {username,password,firstname,lastname}= req.body;

    // try {
    //     const existingUser = await UserModel.findOne({username:username});
    //     if (!existingUser) {
    //         const salt = await bcrypt.genSalt(10);
    //         const hashPassword = await bcrypt.hash(password,salt);
    //         const newUser = await UserModel.create({username,password:hashPassword,firstname,lastname});
    //         // await newUser.save()
    //         res.status(200).json({message:"User Created",newUser}) 
    //     }else{
    //         res.status(400).json({message:"User Already Exist"}) 
    //     }
        
    // } catch (error) {
    //     res.status(500).json({message: error.message})
    // }
}

//Login User 

export const loginUser = async(req,res)=>{
    const {username,password}= req.body;

    try {
        const user = await UserModel.findOne({username:username})
        if(user){
            const validity = await bcrypt.compare(password,user.password)

            if(validity){
                const token = jwt.sign({
                    username:user.username,id:user._id
                },process.env.JWT_KEY,{expiresIn:'1h'})
                res.status(200).json({message:"Login Succesfull",user,token})

            }else{
                res.status(400).json("Wrong Password")
            }

            // validity ? res.status(200).json({message:"Login Succesfull",userExist}):res.status(400).json("Wrong Password")
        }else{
            res.status(404).json("User dos't wxist")

        }
    } catch (error) {
        res.status(400).json("Invalid credentials")
    }

}