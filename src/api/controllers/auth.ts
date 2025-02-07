import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

export const login = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);

  const { email, password } = req.body;

  const user = await userRepository.findOne({ where: { email } });

  if (user) {
    if (bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ id: user.id, email: user.email }, "xpto");

      let number = Math.floor(1000 + Math.random() * 9000);

      const firstPartToken = token.split(".")[0];

      res.status(200).send({ token: `${number}|${firstPartToken}` });
    } else {
      res.status(401).send({ error: "Invalid password!" });
    }
  } else {
    res.status(404).send();
  }
};