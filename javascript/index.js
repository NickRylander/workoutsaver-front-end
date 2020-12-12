document.addEventListener("DOMContentLoaded", function(){
    API.addWorkouts();
    document.getElementById('add-movement').addEventListener('click', API.addMove)
    document.getElementById('form').addEventListener('submit', API.addWorkout)
})