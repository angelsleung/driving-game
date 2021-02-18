function pressKey(event) {
  if (event.key === 'ArrowLeft') {
    return event.key;
  } else if (event.key === 'ArrowRight') {
    return event.key;
  }
}

// var $car = document.querySelector('.car');
document.addEventListener('keydown', pressKey);
