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
}