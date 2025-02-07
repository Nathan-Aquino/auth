import "reflect-metadata";
import express from "express";
import { Request, Response, NextFunction } from "express";
import { createConnection } from "typeorm";
import passport from "passport";

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); 

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});
const PORT = 3000;

import { initializerRoutes } from "./api/routers";

initializerRoutes(app);

import config from "./config/database";

createConnection(config)
  .then((_connection) => {
    app.listen(PORT, () => {
      console.log(`Running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    process.exit(1);
  });