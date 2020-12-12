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
        const movementHolder = document.getElementById("workout-list").firstElementChild.firstElementChild
        const movementCont = document.createElement('ul')
        movementCont.dataset.id = this.id
        movementCont.id = this.id
        movementCont.classList.add = "movement-list-container"
        movementCont.innerHTML += this.movementHTML()
        movementHolder.appendChild(movementCont)
    }

    movementHTML(){
        return `
        <p>${this.movement_name}: ${this.reps} reps - ${this.weight} pounds</p>
        `
    }
}