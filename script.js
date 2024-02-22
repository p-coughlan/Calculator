const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


//Define function to calculate based on button clicked
const calculate = (btnValue) => {
    if(btnValue === "=" && btnValue !== "") {
        //If output has '%", replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"));
    }else if(btnValue === "AC") {
        output = "";
    }else if(btnValue === "DEL") {
        //If DEL is clicked, remove last character from output.
        output = output.toString().slice(0, -1);
    }else{
        //If o(utput is empty and button is specialChars then return
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

//console.log(display, buttons);

//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
    //Button click event listener calls calculate() function with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});


