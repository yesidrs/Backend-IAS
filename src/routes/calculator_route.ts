import { Router } from 'express';
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
    this.router.get('/findAll', calculatorController.findAll);
  }

}

const calculatorRoutes = new CalculatorRoutes();

export default calculatorRoutes.router;