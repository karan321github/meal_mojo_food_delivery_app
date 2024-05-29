import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {
  try {
    const { name, email, password, pic, address } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    if (!name || !email || !password || !address) {
      res.status(400);
      throw Error("Please fill all the details");
    }

    const userExist = await User.findOne({ email: email });
    if (userExist) {
      res.status(400);
      throw new Error("user already exist");
    }
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      pic,
      address,
    });

    const token = jwt.sign({ _id: user._id }, "singh8750");

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        pic: user.pic,
        token: token,
      });
    }
    res.send("user created successfully");
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

export default registerUser;
