document.getElementById('calculate').addEventListener('click', function(e) {
  e.stopPropagation();
  const firstNumber = document.getElementById('firstNumber').value;
  const secondNumber = document.getElementById('secondNumber').value;
  const operation = document.querySelector('input[name="operation"]:checked');
  const resultElement = document.getElementById('result');
  const notificationElement = document.getElementById('notification');

  resultElement.textContent = '';
  notificationElement.textContent = '';
  if (isNaN(firstNumber)||!firstNumber) {
    notificationElement.textContent = 'Please enter valid first numbers!';
    resultElement.value = '';
    return;
  }
  if (isNaN(secondNumber)||!secondNumber) {
    notificationElement.textContent = 'Please enter valid second numbers!';
    resultElement.value = '';
    return;
  }
  if (!operation) {
    notificationElement.textContent = 'Please select an operation!';
    return;
  }
  parseFloat(firstNumber);
  parseFloat(secondNumber);
  let result;
  switch (operation.value) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      if (secondNumber === 0) {
        notificationElement.textContent = 'Cannot divide by zero!';
        return;
      }
      result = firstNumber / secondNumber;
      break;
    default:
      notificationElement.textContent = 'Invalid operation!';
      return;
  }
  resultElement.value = result;
});
  
  // Validate number inputs on blur
document.getElementById('firstNumber').addEventListener('blur', validateNumber);
document.getElementById('secondNumber').addEventListener('blur', validateNumber);

function validateNumber(e) {
  const notificationElement = document.getElementById('notification');
  if (isNaN(this.value)) {
    notificationElement.textContent = 'Please enter a valid decimal number!';
  } else {
    notificationElement.textContent = '';
  }
  e.stopPropagation();
}