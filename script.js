const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];


//Define calculate function, takes button value as argument.
const calculate = (btnValue) => {
    console.log(btnValue);
};

//console.log(display, buttons);

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click event listener calls calculate() function with dataset value as argument.
    button.addEventListener("click", (e) => console.log(e.target.dataset.value));
});


