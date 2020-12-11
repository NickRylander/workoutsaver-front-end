document.addEventListener("DOMContentLoaded", function(){
    // whatever has to happen first in application
    // load in our workouts (get fetch request to backend to load workouts in API)
    // any event listeners that need to be appended when it loads, append here
    API.addMovements();
    document.getElementById('form').addEventListener('submit', API.addWorkout)
})