import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
    stages_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false
    },
});

mongoose.model('Projects', ProjectsSchema);
