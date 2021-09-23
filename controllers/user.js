const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const emailRe =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const passwordRe = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;

module.exports.signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    const alreadyUser = await User.findOne({ email });
    if (!emailRe.test(email)) {
      return res.json({
        success: false,
        message: "Enter valid email",
      });
    }
    if (alreadyUser)
      return res.json({
        success: false,
        message: "The user already exists. Please signin",
      });
    if (password !== confirmPassword)
      return res.json({
        success: false,
        message: "Password and Confirm Password doesn't match",
      });
    if (!passwordRe.test(password))
      return res.json({
        success: false,
        message:
          "Password must contain atleast 8 character, one special character and one number",
      });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const username = email.split("@")[0];
    const newUser = await new User({
      name,
      email,
      password: hashedPassword,
      username,
    });
    const user = await newUser.save();
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );
    res.json({ success: true, user, token });
  } catch (err) {
    res.json({
      success: false,
      message: "Internal Server error. Please try again",
    });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!emailRe.test(email))
      return res.json({ success: false, message: "Enter valid email" });
    const user = await User.findOne({ email });
    if (!user)
      return res.json({
        success: false,
        message: "Email id or password doesn't match",
      });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.json({
        success: false,
        message: "Email id or password doesn't match",
      });

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.json({ success: true, user, token });
  } catch (error) {
    res.json({
      success: false,
      message: "Internal server error. Please try again",
    });
  }
};