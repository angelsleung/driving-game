function pressKey(event) {
  var turn = null;
  if (event.key === 'ArrowLeft') {
    turn = -1;
  } else if (event.key === 'ArrowRight') {
    turn = 1;
  } else if (event.key === ' ') {
    return;
  } else {
    return;
  }
  var currentDirectionIndex = car.directions.indexOf(car.currentDirection);
  var newDirectionIndex = currentDirectionIndex + turn;
  if (newDirectionIndex < 0) {
    newDirectionIndex = 3;
  } else if (newDirectionIndex > 3) {
    newDirectionIndex = 0;
  }
  car.currentDirection = car.directions[newDirectionIndex];
  $car.className = 'car ' + car.currentDirection;
}

var $car = document.querySelector('.car');
document.addEventListener('keydown', pressKey);

var car = {
  directions: ['east', 'south', 'west', 'north'],
  currentDirection: 'east',
  x: 0,
  y: 0
};
