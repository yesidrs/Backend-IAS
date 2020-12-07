import { Request, Response } from 'express';
import Calculator from '../models/calculator';

class CalculatorController {
  
  constructor() {
  }
  
  public async add(req: Request, res: Response): Promise<void> {
    const newCalculation = new Calculator(req.body);
    await newCalculation.save();
    res.json({ data: newCalculation });
  }
}

export const calculatorController = new CalculatorController();
