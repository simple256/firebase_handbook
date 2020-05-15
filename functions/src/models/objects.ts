import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ObjectsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

mongoose.model('ObjectsModel', ObjectsSchema);
