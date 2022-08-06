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

 buttons.forEach((button => button.addEventListener('click', function () {
    userInput.textContent += this.textContent
 })))

 btnClear.addEventListener('click', function(){
    userInput.textContent = ""
    calculation.textContent = ""
 })

 btnDelete.addEventListener('click', function(){
    let text = userInput.textContent
    userInput.textContent = text.slice(0, -1);
 })