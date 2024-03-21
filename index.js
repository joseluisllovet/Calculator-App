const displayValueBefore = document.getElementById('value-before');
const displayValueNow = document.getElementById('value-now');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperator = document.querySelectorAll('.operator');

const display = new Display(displayValueBefore, displayValueNow);

buttonNumbers.forEach((button) => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
}); 

buttonOperator.forEach((button) => {
    button.addEventListener('click', () => {
        display.selectOperator(button.value);
    });
});