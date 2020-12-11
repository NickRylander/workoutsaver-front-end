class API {
    // static class level function that is a fetch request to the backend to the index that will load in all my workouts
    static addMovements(){
        fetch("http://localhost:3000/workouts")
        .then(resp => resp.json())
        .then(workouts => {
            workouts.forEach(workout => {
                const{id, workout_name, workout_number, date, completed, goal, rounds} = workout
                new Workout(id, workout_name, workout_number, date, completed, goal, rounds)
            })
        })
    }
    static addWorkout(e){
        // debugger
        e.preventDefault()
        // capture our form data
        let data = {
            'workout_name': e.target.workoutName.value,
            'workout_number': e.target.workoutNumber.value,
            'date': e.target.date.value,
            'completed': e.target.completed.checked,
            'goal': e.target.goal.value,
            'rounds': e.target.rounds.value,
            'movements_attributes': [{
              'movement_name': e.target.movementName.value,
              'reps': e.target.reps.value,
              'weight': e.target.weight.value
            }] 
        };
        // write our fetch and send it to our back end
        fetch('http://localhost:3000/workouts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        // grab our fetch response
        .then(resp => resp.json())
        .then(workout => {
            const{id, workout_name, workout_number, date, completed, goal, rounds} = workout
            new Workout(id, workout_name, workout_number, date, completed, goal, rounds)
            document.getElementById('workout-form').reset()
        })
        // create a new Workout object
        // clear our form
      }
      // make sure all the functions still work
}