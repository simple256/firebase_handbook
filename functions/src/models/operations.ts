import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OperationsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  actor_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  object_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
  action_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
  },
});

mongoose.model('Operations', OperationsSchema);
