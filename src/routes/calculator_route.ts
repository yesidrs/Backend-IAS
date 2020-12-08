import { Request, Response, Router } from 'express';
import { calculatorController } from '../controllers/calculator_controller';

class CalculatorRoutes {

  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.post('/add', calculatorController.add);
    this.router.get('/show', calculatorController.show);
  }

}

const calculatorRoutes = new CalculatorRoutes();

export default calculatorRoutes.router;