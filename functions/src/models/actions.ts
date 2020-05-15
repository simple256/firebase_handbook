import {Schema, model} from 'mongoose';

const ActionsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

model('Actions', ActionsSchema);
