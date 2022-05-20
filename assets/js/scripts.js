var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber += 1
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 1) {
        document.getElementById('currentNumber').style.color = 'green';
    } if(currentNumber == 0) {
        document.getElementById('currentNumber').style.color = 'white';
    }
}

function decrement() {
    currentNumber -= 1
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= -1) {
        document.getElementById('currentNumber').style.color = 'red';
    } if(currentNumber == 0) {
        document.getElementById('currentNumber').style.color = 'white';
    }
}