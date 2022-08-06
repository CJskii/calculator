 const container = document.querySelector('.container')
 const display = document.querySelector('.display')
 const operator = document.querySelector('.active')
 const buttons = document.querySelectorAll('.btn')
 const calculation = document.querySelector('.calculation')
 const userInput = document.querySelector('.user-input')
 const btnClear = document.querySelector('.btnClear')
 const btnDelete = document.querySelector('.btnDelete')
 const btn1 = document.querySelector('.btn1')
 const btn2 = document.querySelector('.btn2')
 const btn3 = document.querySelector('.btn3')
 const btn4 = document.querySelector('.btn4')
 const btn5 = document.querySelector('.btn5')
 const btn6 = document.querySelector('.btn6')
 const btn7 = document.querySelector('.btn7')
 const btn8 = document.querySelector('.btn8')
 const btn9 = document.querySelector('.btn9')
 const btn0 = document.querySelector('.btn0')
 const btnAdd = document.querySelector('.btnAdd')
 const btnSubstract = document.querySelector('.btnSubstract')
 const btnMultiply = document.querySelector('.btnMultiply')
 const btnDivide = document.querySelector('.btnDivide')
 const btnEqual = document.querySelector('.btnEqual')
 const numberButtons = document.querySelectorAll('.number')
 

 let userValue = ""
 let userValue2 = ""
 let outcome = null
 let active

 buttons.forEach((button => button.addEventListener('click', function () { // listen to all buttons
    //userInput.textContent += this.textContent
 })))

 numberButtons.forEach((button => button.addEventListener('click', function() { // listen to number buttons
    userValue += this.textContent;
    userInput.textContent = `${userValue}` // add clicked number value to userValue variable
    console.log("A: " + userValue)          
 })))

 btnClear.addEventListener('click', function(){
    userInput.textContent = ""
    calculation.textContent = ""
    userValue = ""
    userValue2 = ""
    active = ""
    outcome = null;
 })

 btnDelete.addEventListener('click', function(){
    let text = userInput.textContent
    userInput.textContent = text.slice(0, -1);
    userValue = text.slice(0, -1);
 })

//ADD
 btnAdd.addEventListener('click', function(){ 
    userInput.textContent = "" // clear userInput text
    outcome += Number(userValue) // add uservalue to outcome
    userValue = "" // clear user value
    calculation.textContent = `${outcome} +`;
    userInput.textContent = `${outcome}`
    active = 'Add'
})

//SUBSTRACT
btnSubstract.addEventListener('click', function(){
    if (active == ""){
        userInput.textContent = ""
        outcome += Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`;
        userInput.textContent = `${outcome}`
        active = 'Substract'
    } else {
        userInput.textContent = ""
        outcome -= Number(userValue)
        userValue = ""
        calculation.textContent = `${outcome} -`
        userInput.textContent = `${outcome}`
        active = 'Substract'
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
        calculation.textContent =`${sum} -`;
        userInput.textContent = `${outcome}`
    }
})

