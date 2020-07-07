const Workout = require("../models/workout");

module.exports = function(app) {
    // GET /api/workouts` sends an array of all workouts.
    app.get("/api/workouts"){

    }

    /* POST /api/workouts/` adds a new workout and sends it. New workouts have no exercises, 
    and their `day` field is set to the current time.*/
    app.post("/api/workouts/") {

    }

    /* PUT /api/workouts/:id` appends the request body to the `exercises` 
    array of the identified workout, then sends the updated workout. */
    app.put("/api/workouts/:id") {

    }
    /* GET /api/workouts/range` sends an array of the 7 most recent workouts. */
    app.get("/api/workouts/range") {

    }

    


}