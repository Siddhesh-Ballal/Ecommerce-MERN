import userModel from "../models/userModel.js";
import { hashPassword } from "../helpers/authHelper.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // validation
    if (!name) {
      return { error: "Name is required" };
    }
    if (!email) {
      return { error: "email is required" };
    }
    if (!phone) {
      return { error: "phone is required" };
    }
    if (!password) {
      return { error: "password is required" };
    }
    if (!address) {
      return { error: "address is required" };
    }

    const existingUser = await userModel.findOne({ email });
    // exising user
    if (existingUser) {
      return res.status(200).send({
        success: true,
        message: "User already register!",
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);
    // save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(200).send({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console, log(`Error occured: ${error}`);
    res.status(500).send({
      success: false,
      message: "Error occured in registration",
      error,
    });
  }
};
