document.addEventListener("DOMContentLoaded", function(){
    API.addWorkouts();
    document.getElementById('form').addEventListener('submit', API.addWorkout)
    document.getElementById("change").addEventListener('click', changeColor)
})

const changeColor = ()
    const randomColor = () => {
        Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomColor();
    }
