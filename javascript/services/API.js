class API {
    static addWorkouts(){
        fetch("http://localhost:3000/workouts")
        .then(resp => resp.json())
        .then(workouts => {
            workouts.forEach(workout => {
                const{id, workout_name, workout_number, completed, goal, rounds} = workout
                new Workout(id, workout_name, workout_number, completed, goal, rounds)
            })
        })
    }

    static addWorkout(e){
        e.preventDefault()
        let data = {
            'workout_name': e.target.workoutName.value,
            'workout_number': e.target.workoutNumber.value,
            'completed': e.target.completed.checked,
            'goal': e.target.goal.value,
            'rounds': e.target.rounds.value,
            'movements_attributes': [{
              'movement_name': e.target.movementName.value,
              'reps': e.target.reps.value,
              'weight': e.target.weight.value
            }] 
        };
        fetch('http://localhost:3000/workouts', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(workout => {
            const{id, workout_name, workout_number, completed, goal, rounds} = workout
            new Workout(id, workout_name, workout_number, completed, goal, rounds)
            document.getElementById('workout-form').reset()
        })
    }

}