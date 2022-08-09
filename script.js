 const container = document.querySelector('.container')
 const display = document.querySelector('.display')
 const operator = document.querySelectorAll('.operator')
 const buttons = document.querySelectorAll('.btn')
 const calculation = document.querySelector('.calculation')
 const userInput = document.querySelector('.user-input')
 const btnClear = document.querySelector('.btnClear')
 const btnDelete = document.querySelector('.btnDelete')
 const btnAdd = document.querySelector('.btnAdd')
 const btnSubstract = document.querySelector('.btnSubstract')
 const btnMultiply = document.querySelector('.btnMultiply')
 const btnDivide = document.querySelector('.btnDivide')
 const btnEqual = document.querySelector('.btnEqual')
 const numberButtons = document.querySelectorAll('.number')
 

 let userValue = ""
let num1
let num2
let previousActivity

 let active
 


 let outcome

 let multiplyNum
 let operatorVal

//TAKES DATA

numberButtons.forEach(button => 
    button.addEventListener('click', collectData, {
    capture:true
}));

function collectData(e){// passing numbers to UserValue
    let btnText = e.target.textContent
    userValue += btnText
    userInput.textContent = `${userValue}`
    console.log(userValue)
    
}

operator.forEach(button => 
    button.addEventListener('click', operation, {
        capture:true
    }))


btnEqual.addEventListener('click', equals, {
    capture:true
})

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
}
// +   -   ×   ÷   =


function operation(e){
    let btnText = e.target.textContent
    active = btnText
    calculation.textContent = `${userValue}${active}`
    if (outcome != null && userValue != ""){
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
        setActivity()
    } else if (outcome != null && userValue == ""){
        num1 = Number(outcome)
        calculation.textContent = `${num1}${active}`
        setActivity()
    } else if (userValue == ""){
        return calculation.textContent = "Numbers first"
    } else if (outcome != null) {
        num1 = Number(outcome)
        num2 = Number(userValue)
        userValue = ""
        result()
    }
    else if (num1 == null){
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
}

function result(){
    if (num1 != null && num2 != null && previousActivity == null){
        if (active == '+'){
            add(num1, num2)
        } else if (active == '-'){
            substract(num1, num2)
        } else if (active == '×'){
            multiply(num1, num2)
        } else if (active == '÷'){
            divide(num1, num2)
        }
    } else if (previousActivity != null){
        if (previousActivity == '+'){
            add(num1, num2)
        } else if (previousActivity == '-'){
            substract(num1, num2)
        } else if (previousActivity == '×'){
            multiply(num1, num2)
        } else if (previousActivity == '÷'){
            divide(num1, num2)
        }
    }
}

function setActivity(){
    previousActivity = active
}

function add(num1, num2){
    outcome = num1 + num2
    calculation.textContent = `${outcome}${active}`
    userInput.textContent = `${outcome}`
    return console.log("Add " + outcome);
}

function substract(num1, num2){
    outcome = num1 - num2
    calculation.textContent = `${outcome}${active}`
    userInput.textContent = `${outcome}`
    return console.log("Substract " + outcome);
}

function multiply(num1, num2){
    outcome = num1 * num2
    calculation.textContent = `${outcome}${active}`
    userInput.textContent = `${outcome}`
    return console.log("Multiply " + outcome);
}

function divide(num1, num2){
    outcome = num1 / num2
    calculation.textContent = `${outcome}${active}`
    userInput.textContent = `${outcome}`
    return console.log("Divide " + outcome);
}





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