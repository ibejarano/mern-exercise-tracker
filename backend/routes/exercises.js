const router = require('express').Router();
let Exercise = require('../models/exercise.model');
let ExerciseType = require('../models/exercisetype.model');

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: '+ err));
});

/* ADD EXERCISE LOG */

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: '+err));
});

/* ADD EXERCISE TYPE WITH DESCRIPTION */

router.route('/add-type').post((req,res) => {
    const description = req.body.description;
    const calories = req.body.calories;

    const newExerciseType = new ExerciseType({
        description,
        calories
    });

    newExerciseType.save()
        .then(() => res.json('Exercise type added!'))
        .catch( err => res.status(400).json('Error: '+err))
});

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = req.body.duration;
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch( err => res.status(400).json('Error : ' + err) );
        }).catch(
            err => res.status(400).json('Error: ' + err)
        );
})

module.exports = router;