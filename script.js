 const operator = document.querySelectorAll('.operator')
 const buttons = document.querySelectorAll('.btn')
 const calculation = document.querySelector('.calculation')
 const userInput = document.querySelector('.user-input')
 const btnClear = document.querySelector('.btnClear')
 const btnDelete = document.querySelector('.btnDelete')
 const btnEqual = document.querySelector('.btnEqual')
 const btnDot = document.querySelector('.btnDot')
 const numberButtons = document.querySelectorAll('.number')
 
let userValue = "" // capture input from user
let num1 = null // operand 1
let num2 = null // operand 2
let previousOperator = null // store previous operator
let currentOperator = null // store current operator
let outcome = null // store result
let key = null // store keyboard key

const text = { // random text strings
    1: "Nah... I can't do that...",
    2: "That doesn't do anything...",
    3: "Unlogical situation...",
}

// +   -   ×   ÷   =

//TAKES DATA

numberButtons.forEach(button => button.addEventListener('click', collectData));
operator.forEach(button => button.addEventListener('click', setCurrentOperator));
btnEqual.addEventListener('click', equals);
btnClear.addEventListener('click', clear);
btnDot.addEventListener('click', floatingNumbers);
btnDelete.addEventListener('click', deleteNumber);
window.addEventListener('keydown', keyboardInputHandler);

function keyboardInputHandler(e){ // handle input from keyboard
    key = e.key
    if (key >= 0 && key <= 9){
        userValue += key;
        userInput.textContent = `${userValue}`
    } else if (key == '+' || key == '-' || key == '*' || key == '/') {
        setCurrentOperator(key)
    } else if (key == '=' || key == 'Enter'){
        equals()
    } else if (key == '.'){
        //checkfor floating number in string
        let position = userValue.indexOf('.')
        return keyboardFloating(position)
    } else if (key == 'Backspace' || key == 'Delete'){
        deleteNumber()
    } else if (key == 'c' || key == 'Escape'){
        clear()
    } 
};

function keyboardFloating(position){ // handle floating points from keyboard
    let btnText = '.'
    if (position >= 0){
        return;
    } else if (position == -1 && userValue == ""){
        userValue += 0
        userValue += btnText
        userInput.textContent = `${userValue}`
    } 
    else {
        userValue += btnText
        userInput.textContent = `${userValue}`
        console.log(userValue)
    }
};

function setCurrentOperator(e){ // sets currentOperator value
    if (key == '/'){
        currentOperator = '÷'
    } else if (key == '*'){
        currentOperator = '×'
    } else if (key == '+'){
        currentOperator = '+'
    } else if (key == '-'){
        currentOperator = '-'
    } else {
        let btnText = e.target.textContent
        currentOperator = btnText
        
    } calculation.textContent = `${userValue}${currentOperator}` 
    operation()
};

function collectData(e){ // passing numbers to UserValue
    let btnText = e.target.textContent
    userValue += btnText
    userInput.textContent = `${userValue}`
    console.log(userValue)
    
};

function clear(){ // wipe all variables
    userValue = ""
    num1 = null
    num2 = null
    previousOperator = null
    currentOperator = null
    outcome = null
    calculation.textContent = ""
    userInput.textContent = ""
};

function deleteNumber(){ // delete last value from string
    let text = userInput.textContent
    userInput.textContent = text.slice(0, -1);
    userValue = text.slice(0, -1);
}

function setPreviousOperator(){ // setting previous operator
    previousOperator = currentOperator
};

function roundNumber(outcome){
    let num = outcome
    outcome = Math.round(num * 1000000) / 1000000 // 6 decimals
    return outcome
};

function randomText() {
    let index = Math.floor((Math.random() * 3) + 1)
    return text[index]
};

function equals(){ // press equal logic
    if (num1 == null && num2 == null){
        return
    } else if (num1 != null && num2 == null){
        num2 = Number(userValue)
        userValue = ""
        result()
    } 
    else if (outcome != null) {
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
    } else if (outcome == null){
        result()
    }
};

function operation(e){ // operator logic
    if (outcome != null && userValue != ""){
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
        setPreviousOperator()
    } else if (outcome != null && userValue == ""){
        num1 = Number(outcome)
        calculation.textContent = `${num1}${currentOperator}`
        setPreviousOperator()
    } else if (userValue == ""){
        return calculation.textContent = "Numbers first"
    } else if (outcome != null) {
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
    } else if (num1 == null){
        num1 = Number(userValue)
        userValue = ""
        setPreviousOperator()
    } else if (num1 != null && num2 == null){
        num2 = Number(userValue)
        userValue = ""
        result()
        setPreviousOperator()
    } else if (num1 != null && num2 != null){
        num1 = Number(num2) 
        num2 = Number(userValue)
        userValue = ""
        result()
        setPreviousOperator()
    }
};

function result(){ // getResult logic
    if (num1 != null && num2 != null && previousOperator == null){
        if (currentOperator == '+'){
            add(num1, num2)
        } else if (currentOperator == '-'){
            substract(num1, num2)
        } else if (currentOperator == '×'){
            multiply(num1, num2)
        } else if (currentOperator == '÷'){
            divide(num1, num2)
        }
    } else if (previousOperator != null){
        if (previousOperator == '+'){
            add(num1, num2)
        } else if (previousOperator == '-'){
            substract(num1, num2)
        } else if (previousOperator == '×'){
            multiply(num1, num2)
        } else if (previousOperator == '÷'){
            divide(num1, num2)
        }
    }
};

function floatingNumbers(e){ // floating numbers logic for 'click'
    let btnText = e.target.textContent
    let position = userValue.indexOf('.') // -1 not there 
    console.log(position)
    if (position >= 0){
        return;
    } else if (position == -1 && userValue == ""){
        userValue += 0
        userValue += btnText
        userInput.textContent = `${userValue}`
    } 
    else {
        userValue += btnText
        userInput.textContent = `${userValue}`
        console.log(userValue)
    }
}

function add(num1, num2){
    outcome = num1 + num2
    outcome = roundNumber(outcome)
    calculation.textContent = `${outcome}${currentOperator}`
    userInput.textContent = `${outcome}`
    return console.log("Add " + outcome);
};

function substract(num1, num2){
    outcome = num1 - num2
    outcome = roundNumber(outcome)
    calculation.textContent = `${outcome}${currentOperator}`
    userInput.textContent = `${outcome}`
    return console.log("Substract " + outcome);
};

function multiply(num1, num2){
    if (num2 === 0){
        let text = randomText()
        return calculation.textContent = `${text}`
    } else {
        outcome = num1 * num2
        outcome = roundNumber(outcome)
        calculation.textContent = `${outcome}${currentOperator}`
        userInput.textContent = `${outcome}`
        return console.log("Multiply " + outcome);
    }    
};

function divide(num1, num2){
    if (num2 === 0){
        let text = randomText()
        return calculation.textContent = `${text}`
    } else {
        outcome = num1 / num2
        outcome = roundNumber(outcome)
        calculation.textContent = `${outcome}${currentOperator}`
        userInput.textContent = `${outcome}`
        return console.log("Divide " + outcome);
    }
    
};