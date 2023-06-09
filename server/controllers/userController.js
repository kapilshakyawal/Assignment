const ManufacturerModel = require("../models/ManufacturerModel");
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

exports.registration = async (req, res) => {
  const { name, email, password, address, role } = req.body;
  if (!name || !email || !password || !address || !role) {
    return res.status(400).send({
      message: "Name or Email or password or address or role not Entered!",
    });
  }

  const checkUser = await userModel.findOne({ email });
  console.log("checkUser things", checkUser);
  if (checkUser) {
    return res.status(400).send({
      status:false
      ,
      message: "User already. Please login...",
    });
  }
  const user = await userModel.create({
    name,
    email,
    password,
    address,
    role,
  });
  console.log("User created ", user);
  res.status(200).send({ message: "user created", status:true,user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({
      status:false,
      message: "Email or Password not found!",
    });
  }
  const token = jwt.sign(
    {
      data: email,
    },
    "kapilshakyawalhere",
    { expiresIn: "1h" }
  );
  const user = await userModel.findOneAndUpdate({email},{token})
  console.log(user)
  if(!user) {
    return res.status(400).send({
      status:false,
      message: "User not found please register!",
    });
  }
  if(user.password !== password) {
    return res.status(200).send({
      message: "Incorrect Password",
      status:false,
    });

  }
  if (user.password === password) {
    
    return res.status(200).send({
      message: "User Logged in successfully",
      status:true,
      user,
      token
    });
  }
  res.status(400).send({
    status:false,
    message: "User not found. Please register yourself.",
  });
};


exports.pushByManufacturer = async(req,res) => {
  const {order_id,to,from,quantity,transporter_quantity} = req.body
 const manufacturer =  ManufacturerModel.create({
    order_id,to,from,transporter_quantity,quantity
  })
if(!manufacturer) {

  return res.status(400).send({message:"Manufacturer data not posted",status:false})
}
  res.status(200).send({message:"Manufacturer data posted",status:true, manufacturer})
} 