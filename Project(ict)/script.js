document.getElementById('workout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted'); // Add this line to track form submissions
    let workoutName = document.getElementById('workout-name').value;
    let caloriesBurned = document.getElementById('calories-burned').value;
    let workoutListItem = document.createElement('li');
    workoutListItem.textContent = `${workoutName}: ${caloriesBurned} calories-burned`;
    document.getElementById('workout-list').appendChild(workoutListItem);
    document.getElementById('workout-form').reset();
});

