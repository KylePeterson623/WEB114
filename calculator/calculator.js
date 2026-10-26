//Shelbie Peterson 10/26/2026

"use strict";

let userChoice = parseInt(prompt(`Please enter a number to choose one of the following:
    1. Add
    2. Subtract
    3. Multiply
    4. Divide
    5. Exit`));

switch(userChoice) {
    //Addition
    case 1:
        let addNum1 = parseInt(prompt("Enter the first number to calculate:"));
        let addNum2 = parseInt(prompt(`Enter a number to add to ${addNum1}:`));
        let userAdd = addNum1 + addNum2;
        alert(`${addNum1} + ${addNum2} = ${userAdd}`);
        break;
    //Subtraction
    case 2:
        let subNum1 = parseInt(prompt("Enter the first number to calculate:"));
        let subNum2 = parseInt(prompt(`Enter a number to subtract from ${subNum1}:`));
        let userSub = subNum1 - subNum2;
        alert(`${subNum1} - ${subNum2} = ${userSub}`);
        break;
    //Multiplication
    case 3:
        let multNum1 = parseInt(prompt("Enter the first number to calculate:"));
        let multNum2 = parseInt(prompt(`Enter a number to multiply by ${multNum1}:`));
        let userMult = multNum1 * multNum2;
        alert(`${multNum1} × ${multNum2} = ${userMult}`);
        break;
    //Division
    case 4:
        let divNum1 = parseInt(prompt("Enter the first number to calculate:"));
        let divNum2 = parseInt(prompt(`Enter a number to divide ${divNum1} by:`));
        let userDiv = divNum1 / divNum2;
        alert(`${divNum1} ÷ ${divNum2} = ${userDiv}`);
        break;
    //Exit
    case 5:
        alert("Exiting program.")
        break;
    default:
        alert(`Invalid choice. Please try again.
            Remember to ONLY enter a number 1-5.`);
        break;
}