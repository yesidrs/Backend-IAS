import { Request, Response } from 'express';
import Calculator from '../models/calculator';

class CalculatorController {
  public async add(req: Request, res: Response): Promise<void> {
    const newCalculation = new Calculator(req.body);
    await newCalculation.save();
    res.json({ data: newCalculation });
  }

  public async show(req: Request, res: Response): Promise<void> {
    const rows = await Calculator.find();
    res.json(rows);
  }

  public async findAll(req: Request, res: Response): Promise<void> {
    const rows = await Calculator.aggregate([
      {
        $group: {
          _id: '$idTechnician',
          items: {
            $push: '$$ROOT',
          },
        },
      },
    ]);

    res.json(rows);
  }
}

export const calculatorController = new CalculatorController();
