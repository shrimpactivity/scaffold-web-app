import { NextFunction } from "express";
import { ExampleService } from "../services/ExampleService";

export class ExampleController {
  service;
  constructor(service: ExampleService) {
    this.service = service;
  }

  async getAll(_req: Request, res: Response, next: NextFunction) {
    try {
      const dogs = await this.service.findAll();
      return res.json(dogs);
    } catch(err) {
      next(err);
    }
  }

  async getById(_req: Request, res: Response, next: NextFunction)
}