const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: new Date
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                weight: {
                    type: Number,
                    default: 0
                },
                sets: {
                    type: Number,
                    default: 0
                },
                reps: {
                    tyoe: Number,
                    default: 0
                },
                duration: {
                    type: Number,
                    default: 0,
                    required: "Enter an exercise duration in minutes"
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);
workoutSchema.virtual("totalDuration").get(function (){
    return this.exercises.reduce((total,exercise) => {
        return total + exercise.duration;
    }, 0);
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;