const User = require("../models/user-model");
const bcrypt = require('bcrypt');

const home = async (req, res) => {
    try {
       
      res.status(200).json  ({ msg: "Welcome to our home page" });
    } catch (error) {
      console.log(error);
    }
  };

  //User Registration Logic 📝
  // *-------------------------------
  // 1. Get Registration Data: 📤 Retrieve user data (username, email, password).
  // 2. Check Email Existence: 📋 Check if the email is already registered.
  // 3. Hash Password: 🔒 Securely hash the password.
  // 4. Create User: 📝 Create a new user with hashed password.
  // 5. Save to DB: 💾 Save user data to the database.
  // 6. Respond: ✅ Respond with "Registration Successful" or handle errors.

const register = async (req, res) => {
  try {
    console.log(req.body);
    //step1
    const { username, email, phone, password } = req.body;
    //step2
    const userExists = await User.findOne({email});
    if(userExists){
      return res.status(400).json({message:"user already exists"});
    }
    
    const userCreated = await User.create({username,email,phone,password});
    
    res.status(200).send({ 
      message: "registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } 
  catch (error) {
      //res.status(500).json({ message: "Internal server error" });
      next(error);
  }
};

const login= async (req,res)=>{
  try{
    const {email,password} = req.body;
    const userExists = await User.findOne({email});
    console.log(userExists);

    if(!userExists){
      return res.status(400).json({message: "Invalid credentials"});
    }
    //const user = await bcrypt.compare(password, userExists.password);
      const user = await userExists.comparePassword(password);
      
    if(user){
      res.status(200).send({ 
      message: "Login successful",
      token: await userExists.generateToken(),
      userId: userExists._id.toString(),
    });
    }else{
      res.status(401).json({msg:"invalid email or password"});
    }
  }catch(error){
    //res.status(500).json({ message: "Internal server error" });
    next(error);
  }
}

const user = async (req,res) =>{
  try {
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({userData});
  } catch (error) {
    console.log(`error from the route ${error}`);
  }
}
  module.exports = {home,register,login,user};

  