 const container = document.querySelector('.container')
 const display = document.querySelector('.display')
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

const text = {
    1: "Nah... I can't do that...",
    2: "That doesn't do anything...",
    3: "Unlogical situation...",
}


//TAKES DATA

numberButtons.forEach(button => 
    button.addEventListener('click', collectData, {
    capture:true
}));

operator.forEach(button => 
    button.addEventListener('click', operation, {
        capture:true
}));

btnEqual.addEventListener('click', equals, {
    capture:true
});

btnClear.addEventListener('click', clear)

btnDot.addEventListener('click', floatingNumbers)


function collectData(e){// passing numbers to UserValue
    let btnText = e.target.textContent
    userValue += btnText
    userInput.textContent = `${userValue}`
    console.log(userValue)
    
};

function clear(){
    userValue = ""
    num1 = null
    num2 = null
    previousOperator = null
    currentOperator = null
    outcome = null
    calculation.textContent = ""
    userInput.textContent = ""
};

function equals(){
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

// +   -   ×   ÷   =


function operation(e){
    let btnText = e.target.textContent
    currentOperator = btnText
    calculation.textContent = `${userValue}${currentOperator}`
    if (outcome != null && userValue != ""){
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
        setActivity()
    } else if (outcome != null && userValue == ""){
        num1 = Number(outcome)
        calculation.textContent = `${num1}${currentOperator}`
        setActivity()
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
        setActivity()
    } else if (num1 != null && num2 == null){
        num2 = Number(userValue)
        userValue = ""
        result()
        setActivity()
    } else if (num1 != null && num2 != null){
        num1 = Number(num2) 
        num2 = Number(userValue)
        userValue = ""
        result()
        setActivity()
    }
};

function result(){
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

function setActivity(){
    previousOperator = currentOperator
};

function roundNumber(outcome){
    let num = outcome
    outcome = Math.round(num * 100) / 100
    return outcome
};

function randomText() {
    let index = Math.floor((Math.random() * 3) + 1)
    return text[index]
};

function floatingNumbers(e){
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





/*
 numberButtons.forEach((button => button.addEventListener('click', function() { // listen to number buttons
        userValue += this.textContent;
        userInput.textContent = `${userValue}` // add clicked number value to userValue variable
        console.log("VALUE1: " + userValue)         
    
 })))


 btnClear.addEventListener('click', function(){
    userInput.textContent = ""
    calculation.textContent = ""
    userValue = ""
    active = ""
    outcome = 0;
    multiplyNum = null
 })

 btnDelete.addEventListener('click', function(){
    let text = userInput.textContent
    userInput.textContent = text.slice(0, -1);
    userValue = text.slice(0, -1);
 })

//ADD
 btnAdd.addEventListener('click', function(){ 
    if (active == 'Substract'){
        userInput.textContent = ""
        outcome -= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} +`
        userInput.textContent = `${outcome}`
        active = 'Add'
    } else if (active == 'Multiply' && userValue != ""){
        userInput.textContent = ""
        outcome *= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} +`
        userInput.textContent = `${outcome}`
        active = 'Add'
    } else if (active == 'Divide' && userValue != ""){
        userInput.textContent = ""
        outcome /= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} +`
        userInput.textContent = `${outcome}`
        active = 'Add'
    } else {
        userInput.textContent = "" // clear userInput text
        outcome += Number(userValue) // add uservalue to outcome
        userValue = "" // clear user value
        calculation.textContent = `${outcome} +`;
        userInput.textContent = `${outcome}`
        active = 'Add'
    }
    
})

//SUBSTRACT
btnSubstract.addEventListener('click', function(){
    if (active == "" || active == undefined){
        userInput.textContent = ""
        outcome += Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`;
        userInput.textContent = `${outcome}`
        active = 'Substract'
    } else if (active == 'Add'){
        userInput.textContent = ""
        outcome += Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`
        userInput.textContent = `${outcome}`
        active = 'Substract'
    } else if (active == 'Multiply' && userValue != ""){
        userInput.textContent = ""
        outcome *= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`
        userInput.textContent = `${outcome}`
        active = 'Substract'
    } else if (active == 'Divide' && userValue != ""){
        userInput.textContent = ""
        outcome /= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`
        userInput.textContent = `${outcome}`
        active = 'Substract'
    }  else {
        userInput.textContent = ""
        outcome -= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`
        userInput.textContent = `${outcome}`
        active = 'Substract'
    }
    
})

// 12 + 7 - 5 * 3 = should yield 42



//MULTIPLY
btnMultiply.addEventListener('click', function(){ 
    if (userValue == "" ){
        calculation.textContent = `${outcome} ×`
        return active = 'Multiply'
    } else if (active == 'Add'){
        userInput.textContent = ""
        outcome += Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ×`
        userInput.textContent = `${outcome}`
        active = 'Multiply'
    } else if (active == 'Substract'){
        userInput.textContent = ""
        outcome -= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ×`
        userInput.textContent = `${outcome}`
        active = 'Multiply'
    } else if (active == 'Divide'){
        userInput.textContent = ""
        outcome /= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ×`
        userInput.textContent = `${outcome}`
        active = 'Multiply'
    } else if (outcome > 0 || outcome < 0){
        let sum = outcome * userValue;
        outcome = sum
        calculation.textContent = `${outcome} ×`
        userInput.textContent = `${outcome}` 
        userValue = ""
        active = 'Multiply'
    } else if (multiplyNum != null && userValue != null){
        let sum = multiplyNum * userValue;
        outcome = sum
        calculation.textContent = `${outcome} ×`
        userInput.textContent = `${outcome}` 
        userValue = ""
        active = 'Multiply'
    } else {
        multiplyNum = Number(userValue);
        outcome = multiplyNum
        userValue = ""
        calculation.textContent = `${multiplyNum} ×`
        active = 'Multiply'
    }
})

btnDivide.addEventListener('click', function(){ 
    if (userValue == "" ){
        calculation.textContent = `${outcome} ÷`
        return active = 'Divide'
    } else if (active == 'Add'){
        userInput.textContent = ""
        outcome += Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ÷`
        userInput.textContent = `${outcome}`
        active = 'Divide'
    } else if (active == 'Multiply'){
        userInput.textContent = ""
        outcome *= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ÷`
        userInput.textContent = `${outcome}`
        active = 'Divide'
    } else if (active == 'Substract'){
        userInput.textContent = ""
        outcome -= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} ÷`
        userInput.textContent = `${outcome}`
        active = 'Divide'
    } else if (outcome > 0 || outcome < 0){
        let sum = outcome / userValue;
        outcome = sum
        calculation.textContent = `${outcome} ÷`
        userInput.textContent = `${outcome}` 
        userValue = ""
        active = 'Divide'
    } else if (multiplyNum != null && userValue != null){
        let sum = multiplyNum / userValue;
        outcome = sum
        calculation.textContent = `${outcome} ÷`
        userInput.textContent = `${outcome}` 
        userValue = ""
        active = 'Divide'
    } else {
        multiplyNum = Number(userValue);
        outcome = multiplyNum
        userValue = ""
        calculation.textContent = `${multiplyNum} ÷`
        active = 'Divide'
    }
})

//EQUAL
btnEqual.addEventListener('click', function(){
    if (active == 'Add'){
        let sum = Number(outcome) + Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} +`;
        userInput.textContent = `${outcome}`
    } else if (active == 'Substract'){
        let sum = Number(outcome) - Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} -`
        userInput.textContent = `${outcome}`
    } else if (active == 'Multiply' && outcome != 0){
        let sum = Number(outcome) * Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} ×`
        userInput.textContent = `${outcome}`
    } else if (active == 'Multiply'){
        let sum = Number(multiplyNum) * Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} ×`
        userInput.textContent = `${outcome}`
    } else if (active == 'Divide' && outcome != 0){
        let sum = Number(outcome) / Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} ÷`
        userInput.textContent = `${outcome}`
    } else if (active == 'Divide'){
        let sum = Number(multiplyNum) / Number(userValue)
        outcome = sum
        userValue = ""
        userInput.textContent = ""
        calculation.textContent =`${sum} ÷`
        userInput.textContent = `${outcome}`
    } else {
        return;
    }
})

*/