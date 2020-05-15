import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const StagesSchema = new Schema({
    stages_id: {
        type:  [mongoose.Schema.Types.ObjectId],
        required: true
    }
});

mongoose.model('Stages', StagesSchema);
