 const container = document.querySelector('.container')
 const display = document.querySelector('.display')
 const buttons = document.querySelectorAll('.btn')
 const calculation = document.querySelector('.calculation')
 const userInput = document.querySelector('.user-input')

 buttons.forEach((button => button.addEventListener('click', function () {
    userInput.textContent += this.textContent
 })))