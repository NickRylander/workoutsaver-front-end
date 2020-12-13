document.addEventListener("DOMContentLoaded", function(){
    API.addWorkouts();
    document.getElementById('form').addEventListener('submit', API.addWorkout)
})