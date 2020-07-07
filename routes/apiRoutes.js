const Workout = require("../models/workout");

module.exports = function(app) {
    // GET /api/workouts` sends an array of all workouts.
    app.get("/api/workouts", function(req, res){
       Workout.find()
       .then(data => {
           res.json(data)
       }).catch(err => {
           res.json(err);
       });  
    });

    /* POST /api/workouts/` adds a new workout and sends it. New workouts have no exercises, 
    and their `day` field is set to the current time.*/
    app.post("/api/workouts/", function(req, res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });
    });

    /* PUT /api/workouts/:id` appends the request body to the `exercises` 
    array of the identified workout, then sends the updated workout. */
    app.put("/api/workouts/:id", ({body,params}, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            {$push: {exercises:body}},
            {new: true,runValidators: true }
        ).then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });
    });

    /* GET /api/workouts/range` sends an array of the 7 most recent workouts. */
    app.get("/api/workouts/range", function(req, res){
        Workout.find()
        .then(data => {
            res.json(data)
        }).catch(err => {
            res.json(err)
        });
    }); 

    app.post("/api/workouts/range", function(req,res){
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err)
        });
    }); 
};