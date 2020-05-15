import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ActorsSchema = new Schema({
    title: {
        type: String,
        required: true
    }
});

mongoose.model('Actors', ActorsSchema);
