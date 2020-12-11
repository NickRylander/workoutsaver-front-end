// class Movement {
//     constructor(id, workout_name, workout_number, date, completed, goal, rounds){
//         this.id= id,
//         this.workout_name = workout_name,
//         this.workout_number = workout_number,
//         this.date = date,
//         this.completed = completed,
//         this.goal = goal,
//         this.rounds = rounds
//         this.renderMovements()
//         // render the instance to page
//     }
//     // render method that will create a li and append it to page, add relevant classes, ids, 
//     // possibly delegations, listeners, etc

//     renderMovements(){
//         const workoutHolder = document.getElementById("workout-list")
//         const workoutCont = document.createElement('div')
//         workoutCont.dataset.id = this.id
//         // dataset makes it possible to work with a JS event as well
//         workoutCont.id = this.id
//         workoutCont.classList.add = "workout-list-container"
//         workoutCont.innerHTML += this.workoutHTML()
//         workoutHolder.appendChild(workoutCont)
//         workoutCont.addEventListener("click", e => {
//             if(e.target.className === "toggle") this.completeToggle(e)
//             if(e.target.className.includes('delete')) this.deleteWorkout(e)
//         })
//     }

//     workoutHTML(){
//         let completed = this.completed == true ? "checked" : ""
//         return `
//         <h2 class="headline">${this.workout_name} - ${this.workout_number}</h2>
//         <h3>${this.date}</h3>
//         <p>Workout Completed: <input data-id="${this.id}" class="toggle" type="checkbox" value="completed" ${completed}</p><br><br>
//         <button class="delete">Delete Workout</button>
//             `
//     }
// }