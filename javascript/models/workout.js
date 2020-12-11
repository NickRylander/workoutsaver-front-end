class Workout {
    constructor(id, workout_name, workout_number, date, completed, goal, rounds){
        this.id= id,
        this.workout_name = workout_name,
        this.workout_number = workout_number,
        this.date = date,
        this.completed = completed,
        this.goal = goal,
        this.rounds = rounds
        this.renderWorkout()
        // render the instance to page
    }
    // render method that will create a li and append it to page, add relevant classes, ids, 
    // possibly delegations, listeners, etc

    renderWorkout(){
        const workoutHolder = document.getElementById("workout-list")
        const workoutCont = document.createElement('div')
        workoutCont.dataset.id = this.id
        // dataset makes it possible to work with a JS event as well
        workoutCont.id = this.id
        workoutCont.classList.add = "workout-list-container"
        workoutCont.innerHTML += this.workoutHTML()
        workoutHolder.appendChild(workoutCont)
    }

    workoutHTML(){
        let completed = this.completed == true ? "Done" : "Nope"
        return `
        <h2 class="headlide">${this.workout_name} - ${this.workout_number}</h2>
        <h3>${this.date}</h3>
        <p>Workout Completed: ${completed}</p>
            `
    }
}