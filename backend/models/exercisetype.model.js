const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const exerciseTypeSchema = new Schema({
    description: { type: String, required: true},
    calories: { type: Number, required: true},
    }, {
        timestamps: true,
    }
);

const ExerciseType = mongoose.model('exerciseType', exerciseTypeSchema);

module.exports = ExerciseType;