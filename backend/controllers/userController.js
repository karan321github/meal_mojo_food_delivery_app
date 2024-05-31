import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import { generateToken } from "../config/generateToken.js";

export const registerUser = async (req, res) => {
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
    
  } catch (error) {
    res.status(400);
    res.send(error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide both email and password" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const validPassword =  bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Wrong email or password" });
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


