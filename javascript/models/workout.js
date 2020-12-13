class Workout {
    constructor(id, workout_name, workout_number, completed, goal, rounds){
        this.id = id,
        this.workout_name = workout_name,
        this.workout_number = workout_number,
        this.completed = completed,
        this.goal = goal,
        this.rounds = rounds
        this.renderWorkout()
    }

    renderWorkout(){
        const workoutHolder = document.getElementById("workout-list")
        const workoutCont = document.createElement('div')
        workoutCont.dataset.id = this.id
        workoutCont.id = this.id
        workoutCont.classList.add("workout-list-container")
        workoutCont.innerHTML += this.workoutHTML()
        workoutHolder.appendChild(workoutCont)
        // debugger
        workoutCont.addEventListener("click", e => {
            if(e.target.className === "toggle") this.completeToggle(e)
            if(e.target.className.includes('delete')) this.deleteWorkout(e)
            if(e.target.className.includes('workout-list-container')) this.showMovements(e)
            })
        document.querySelector(`.movementForm${this.id}`).addEventListener('submit', API.addMovement)
    }

    workoutHTML(){
        let completed = this.completed == true ? "checked" : ""
        return `
        <h3 class="title">${this.workout_name} - Workout #${this.workout_number}</h3>
        <p>Workout Goal: ${this.goal}</p>
        <p>Rounds: ${this.rounds}</p>
        <p>Workout Completed: <input data-id="${this.id}" class="toggle" type="checkbox" value="completed" ${completed}</p><br><br>
        <button class="delete">Delete Workout</button><br><br>
        <div id="moveForm">
            <form class="movementForm${this.id}">
                <label for="movement-name">Movement Name:</label>
                    <input type="text" name="movementName">
                <br>
                    <label for="reps">Reps:</label>
                    <input type="text" name="reps">
                <br>
                    <label for="weight">Weight:</label>
                    <input type="text" name="weight">
                <br>
                    <input type="hidden" name=${this.id}/>
                <br><br>
                <input type="submit" value="Add Movement"></input><br><br>
            </form>
        </div>
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

    showMovements(e){
        e.preventDefault()
        let id = parseInt(e.target.dataset.id)
        fetch(`http://localhost:3000/workouts/${id}/`)
        .then(resp => resp.json())
        .then(movements => {
            movements["movements"].forEach(movement => {
                const{id, movement_name, reps, weight, workout_id} = movement
                new Movement(id, movement_name, reps, weight, workout_id)
            })
        })
    }
}