#! /esr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: " Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operation to perform action",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
        ],
    },
]);
//Conditional Statement
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
