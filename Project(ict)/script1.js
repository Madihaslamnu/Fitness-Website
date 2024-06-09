document.getElementById('food-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let foodName = document.getElementById('food-name').value;
    let caloriesconsumed = document.getElementById('calories').value;
    let fooditem = document.createElement('li');
    fooditem.textContent = `${foodName}: ${caloriesconsumed} calories`;
    document.getElementById('food-list').appendChild(fooditem);
    document.getElementById('food-form').reset();
});
