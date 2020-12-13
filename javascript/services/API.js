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
            'rounds': e.target.rounds.value
        }
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

    static addMovements(){
        fetch("http://localhost:3000/movements")
        .then(resp => resp.json())
        .then(movements => {
            movements.forEach(movement => {
                const{id, movement_name, reps, weight, workout_id} = movement
                new Movement(id, movement_name, reps, weight, workout_id)
            })
        })
    }

    static addMovement(e){
        debugger
        e.preventDefault()
        const workId = parseInt(e.target.parentElement.parentElement.id)
        let data = {
              'movement_name': e.target.movementName.value,
              'reps': e.target.reps.value,
              'weight': e.target.weight.value,
              'workout_id': workId
        };
        fetch("http://localhost:3000/movements",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(movement => {
            const{id, movement_name, reps, weight, workout_id} = movement
            const moving = new Movement(id, movement_name, reps, weight, workout_id)
            debugger
            document.querySelector(`.movementForm${workId}`).reset()
        })
    }
}