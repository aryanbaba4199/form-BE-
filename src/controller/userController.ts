import { Request, Response } from 'express';
import User from '../models/user';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, gender, email, phone, address, city, state, password } = req.body;


    const newUser = new User({
      name,
      gender,
      email,
      phone,
      address,
      city,
      state,
      password
    });
    console.log(newUser);

    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
