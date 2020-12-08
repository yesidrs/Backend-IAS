import { Schema, model } from 'mongoose';

const CalculatorSchema = new Schema({
  idTechnician: {
    type: String,
    required: true,
  },

  idService: {
    type: String,
    required: true,
  },

  initialDate: {
    type: Date,
    required: true,
  },

  finalDate: {
    type: Date,
    required: true,
  },
});

export default model('Calculator', CalculatorSchema);
