class Movement {
    constructor(id, movement_name, reps, weight, workout_id){
        this.id= id,
        this.movement_name = movement_name,
        this.reps = reps,
        this.weight = weight,
        this.workout_id = workout_id
        this.renderMovements()
        // render the instance to page
    }

    renderMovements(){
        const movementHolder = document.getElementById("workout-list").firstElementChild
        const movementCont = document.createElement('div')
        movementCont.dataset.id = this.id
        // dataset makes it possible to work with a JS event as well
        movementCont.id = this.id
        movementCont.classList.add = "movement-list-container"
        movementCont.innerHTML += this.movementHTML()
        movementHolder.appendChild(movementCont)
    //     // movementCont.addEventListener("click", e => {
    //     //     if(e.target.className === "toggle") this.completeToggle(e)
    //     //     if(e.target.className.includes('delete')) this.deleteWorkout(e)
    //     // })
    }

    movementHTML(){
        return `
        <h4>${this.movement_name}</h4>
        <p>${this.reps} - ${this.weight}</p>
        `
    }
}