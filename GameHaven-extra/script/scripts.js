const calculator = document.getElementById('calculator');
const resultField = document.getElementById('result');
let currentExpression = '';

document.querySelector('.trigger-area').addEventListener('mouseenter', () => {
    calculator.classList.add('active');
});

function toggleCalculator() {
    calculator.classList.remove('active');
}

function appendNumber(number) {
    currentExpression += number;
    resultField.value = currentExpression;
}

function appendOperator(operator) {
    currentExpression += ` ${operator} `;
    resultField.value = currentExpression;
}

function clearResult() {
    currentExpression = '';
    resultField.value = '';
}

function calculate() {
    try {
        currentExpression = eval(currentExpression);
        resultField.value = currentExpression;
    } catch {
        resultField.value = 'Error :(';
        currentExpression = '';
    }
}

 // theme


const themeSwitch = document.getElementById('themeSwitch');


const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
  document.getElementById('theme').setAttribute('href', currentTheme);
  if (currentTheme === 'style/darkTheme.css') {
    themeSwitch.checked = true;
  }
}


themeSwitch.addEventListener('change', function () {
  if (themeSwitch.checked) {
    document.getElementById('theme').setAttribute('href', 'style/darkTheme.css');
    localStorage.setItem('theme', 'style/darkTheme.css');
  } else {
    document.getElementById('theme').setAttribute('href', 'style/lightTheme.css'); 
    localStorage.setItem('theme', 'style/lightTheme.css');
  }
});



