#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        message: "Type your age in Kilograms",
        type: "number",
        name: "weight"
    },
    {
        message: "Type your height in Meters",
        type: "number",
        name: "height"
    }
])

let bmi = answer.weight / (answer.height * answer.height)

console.log(bmi);

if(bmi < 18.5){
    console.log("You are under weight")
}else if(bmi < 24.9){
    console.log("You are healthy weight")
}else if (bmi < 29.9){
    console.log("You are over weight")
}else{
    console.log("You are obese")
}