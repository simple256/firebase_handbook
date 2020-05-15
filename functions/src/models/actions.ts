import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActionsSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

mongoose.model('Actions', ActionsSchema);
