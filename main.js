function pressKey(event) {
  var turn = null;
  if (event.key === 'ArrowLeft') {
    turn = -1;
  } else if (event.key === 'ArrowRight') {
    turn = 1;
  } else {
    return;
  }
  var currentDirectionIndex = directions.indexOf(currentDirection);
  var newDirectionIndex = currentDirectionIndex + turn;
  if (newDirectionIndex < 0) {
    newDirectionIndex = 3;
  } else if (newDirectionIndex > 3) {
    newDirectionIndex = 0;
  }
  currentDirection = directions[newDirectionIndex];
  $car.className = 'car ' + currentDirection;
}

//
var $car = document.querySelector('.car');
document.addEventListener('keydown', pressKey);

var directions = ['east', 'south', 'west', 'north'];
var currentDirection = 'east';
