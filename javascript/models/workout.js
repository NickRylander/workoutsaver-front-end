class Workout {
    constructor(id, workout_name, workout_number, date, completed, goal, rounds){
        this.id = id,
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
        workoutCont.addEventListener("click", e => {
            if(e.target.className === "toggle") this.completeToggle(e)
            if(e.target.className.includes('delete')) this.deleteWorkout(e)
        })
    }

    workoutHTML(){
        let completed = this.completed == true ? "checked" : ""
        return `
        <h2 class="headline">${this.workout_name} - ${this.workout_number}</h2>
        <h3>${this.date}</h3>
        <p>Workout Completed: <input data-id="${this.id}" class="toggle" type="checkbox" value="completed" ${completed}</p><br><br>
        <button class="delete">Delete Workout</button>
            `
    }

    completeToggle(e){
        const id = parseInt(e.target.parentElement.parentElement.id)
        fetch(`http://localhost:3000/workouts/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            completed: e.target.checked 
          })
      })
    }

    deleteWorkout(e){
        const id = parseInt(e.target.parentElement.parentElement.id)
        fetch(`http://localhost:3000/workouts/${id}`,{
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('workout-list').removeChild(document.getElementById(id))
        })
    }

    // showMovements(e){
        // initiate fetch request to show page of workout, get scoped movements, or initiate a fetch request to the movement controller index method and scope it by the parameter (either way have to scope)
        // return teh movements for the workout in question
        // create new movement objects
        // wipe everything off the page
        // show the new movement objects
        // have link to go "back" to the homepage
    // }
}