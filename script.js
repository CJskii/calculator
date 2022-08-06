 const container = document.querySelector('.container')
 const display = document.querySelector('.display')
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

 buttons.forEach((button => button.addEventListener('click', function () {
    userInput.textContent += this.textContent
 })))

 numberButtons.forEach((button => button.addEventListener('click', function() {
    if(!active){
        userValue += this.textContent;
        console.log("A: " + userValue)
    } else if (active == 'Add') {
        userValue2 += this.textContent;
        userValue2.slice(-1, 0);
        console.log("B: " + userValue2);
    }
    
 })))

 btnClear.addEventListener('click', function(){
    userInput.textContent = ""
    calculation.textContent = ""
    userValue = ""
    userValue2 = ""
    active = ""
 })

 btnDelete.addEventListener('click', function(){
    let text = userInput.textContent
    userInput.textContent = text.slice(0, -1);
 })

 btnAdd.addEventListener('click', function(){
    userInput.textContent = ""
    calculation.textContent = userValue;
    active = 'Add'
})

btnEqual.addEventListener('click', function(){
    if (active == 'Add'){
        let sum = Number(userValue) + Number(userValue2);
        userInput.textContent = ""
        calculation.textContent = sum;
    }


})

