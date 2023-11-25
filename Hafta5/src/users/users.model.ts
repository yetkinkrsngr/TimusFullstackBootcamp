import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },

  notes: {
    type: Array,
  },
});

export interface IUsers extends mongoose.Document {
  name: string;
  email: string;
  type: number;
  notes: string[];
}
