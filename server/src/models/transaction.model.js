import { model, Schema } from 'mongoose';

const TransactionSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  tags: [String],
  value: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

export default model('Transaction', TransactionSchema);