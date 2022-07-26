import { User } from "../../entities/user";
import { Request, Response } from 'express';

interface ITypes{
    user: User
}

export interface Context {
  storage: ITypes;
  req: Request;
  res: Response;
}