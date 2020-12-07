import { Schema, model } from 'mongoose';

const CalculatorSchema = new Schema({
  
  idTechnician: {
    type: String,
    required: true,
  },

  idService: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  initialHour: {
    type: String,
    required: true
  },

  finalHour: {
    type: String,
    required: true
  },

});

export default model('Calculator', CalculatorSchema);
