import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import User from "../models/userModel";

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).json(user);
});
