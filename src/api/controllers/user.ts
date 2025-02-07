import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const createUser = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);

  const { email, password, is_superuser } = req.body;
  const user = new User(email, password, is_superuser);

  const createdUser = await userRepository.save(user);

  const responseUser = { id: createdUser.id, email: createdUser.email };

  res.status(201).send(responseUser);
};