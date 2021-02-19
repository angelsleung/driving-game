function pressKey(event) {
  if (event.key === 'ArrowLeft') {
    turnCar(-1);
  } else if (event.key === 'ArrowRight') {
    turnCar(1);
  } else if (event.key === ' ') {
    setInterval(startCar, 16);
  }
}

function turnCar(turnValue) {
  var currentDirectionIndex = car.directions.indexOf(car.currentDirection);
  var newDirectionIndex = currentDirectionIndex + turnValue;
  if (newDirectionIndex < 0) {
    newDirectionIndex = 3;
  } else if (newDirectionIndex > 3) {
    newDirectionIndex = 0;
  }
  car.currentDirection = car.directions[newDirectionIndex];
  $car.className = 'car ' + car.currentDirection;
}

function startCar() {
  car.x += 1;
  $car.style.left = car.x + 'rem';
}

var $car = document.querySelector('.car');
document.addEventListener('keydown', pressKey);

var car = {
  directions: ['east', 'south', 'west', 'north'],
  currentDirection: 'east',
  x: 0,
  y: 0,
  isStarted: false
};
