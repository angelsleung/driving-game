function pressKey(event) {
  if (event.key === 'ArrowLeft') {
    turnCar(-1);
  } else if (event.key === 'ArrowRight') {
    turnCar(1);
  } else if (event.key === ' ') {
    if (car.isStarted) {
      stopCar();
    } else {
      car.isStarted = true;
      car.intervalID = setInterval(startCar, 16);
    }
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
  // $car.className = 'car ' + car.currentDirection;
  car.degrees += turnValue * 90;
  $car.style.transform = 'rotate(' + car.degrees + 'deg)';
}

function startCar() {
  if (car.currentDirection === 'east') {
    car.x += 1;
    $car.style.left = car.x + 'rem';
  } else if (car.currentDirection === 'west') {
    car.x -= 1;
    $car.style.left = car.x + 'rem';
  } else if (car.currentDirection === 'south') {
    car.y += 1;
    $car.style.top = car.y + 'rem';
  } else {
    car.y -= 1;
    $car.style.top = car.y + 'rem';
  }
}

function stopCar() {
  car.isStarted = false;
  clearInterval(car.intervalID);
}

var car = {
  directions: ['east', 'south', 'west', 'north'],
  currentDirection: 'east',
  x: 0,
  y: 0,
  isStarted: false,
  intervalID: null,
  degrees: 0
};

var $car = document.querySelector('.car');
document.addEventListener('keydown', pressKey);
