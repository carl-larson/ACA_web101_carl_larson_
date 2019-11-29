// Add dice roller
let die = null;
let div = document.getElementById("four");

function rollDice(e) {
    die = Math.floor(Math.random() * e + 1);
    if (e == 4) {
        div = document.getElementById("four");
    } if (e == 6) {
        div = document.getElementById("six");
    } if (e == 8) {
        div = document.getElementById("eight");
    } if (e == 10) {
        div = document.getElementById("ten");
    }if (e == 12) {
        div = document.getElementById("twelve");
    } if (e == 20) {
        div = document.getElementById("twenty");
    }
    div.innerHTML = die;
}


// Add toDo List Functionality
$(function() {

    let $list = $('#ultodo');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
    });

    $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
    });
});

// Add GeoLocation
    var myLocation = document.getElementById("my-coordinates")

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayPosition)
        }else{
            myLocation.innerHTML = "Not Available"
        }
    }
    function displayPosition(position){
        myLocation.innerHTML= "Longitude: " + position.coords.longitude + " Latitude:" + position.coords.latitude
    }

// Build Functioning Clock
    var showTime = document.getElementById('time');
    var showDate = document.getElementById('showDate');

function time() {
    var today = new Date();
    var s =today.getSeconds();
    var m =today.getMinutes();
    var h =today.getHours();
    if (s<10) {
        s= '0' + s;
    }
    if (h<10) {
        h= '0' + h;
    }
    if (m<10) {
        m= '0' + m;
    }
    var time = h + ":" + m + ":" + s;
    showTime.innerHTML=time;

}
setInterval(time, 1000);

var today = new Date();
var month = today.getMonth();
var date = (month+1) + "-" + today.getDate() + "-" + today.getFullYear();
showDate.innerHTML=date;

// Calculator Functionality

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.button-container');
keys.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) {
    return;
}
if (target.classList.contains('operator')) {
    handleOperator(target.value);
    updateDisplay();
    return;
}
if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
    return;
}
if (target.classList.contains('function')) {
    console.log('function', target.value);
    return;
}
if (target.classList.contains('clear')) {
    resetCalculator();
    updateDisplay();
    // return;
}
inputDigit(target.value);
updateDisplay();

});

function inputDigit(digit){
    const {displayValue, waitingForSecondOperand} = calculator;
    if(waitingForSecondOperand === true){
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    }else{
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}
function inputDecimal(dot){
    if(!calculator.displayValue.includes(dot)){
        calculator.displayValue += dot;
    }
}
function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);
    if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }
    if(firstOperand === null) {
        calculator.firstOperand = inputValue;
    }else if (operator) {
        const result = performCalculation[operator](firstOperand, inputValue);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,

    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand
}
function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }

