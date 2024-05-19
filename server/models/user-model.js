const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Defining the User schema
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  });

//securing password with bcrypt
userSchema.pre("save", async function () {
const user = this;
console.log("actual data ", this);

if (!user.isModified) {
    return next();
}

try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    user.password = hashedPassword;
} catch (error) {
    return next(error);
}
});
//function for comparing password
userSchema.methods.comparePassword = async function(password){
  return bcrypt.compare(password, this.password);
}

//json web token
userSchema.methods.generateToken = async function () {
    console.log("I am token");
    try {
      return jwt.sign(
        {
          userId: this._id.toString(),
          email: this.email,
          isAdmin: this.isAdmin,
        },
        process.env.JWT_KEY,
        {
          expiresIn: "30d",
        }
      );
    } catch (error) {
      console.error("Token Error: ", error);
    }
  };
9303413320
// define the model or the collection name
const User = new mongoose.model("USER", userSchema);
module.exports = User;