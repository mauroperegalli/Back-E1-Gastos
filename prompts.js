import inquirer from "inquirer";
import DatePrompt from "inquirer-date-prompt";
import {get} from './fsMethods.js'

inquirer.registerPrompt("date", DatePrompt);

export async function newSpent() {
  return await inquirer.prompt(spent);
}

const spent = [
  {
    type: "input",
    name: "spent_price",
    message: "Valor del gasto: ",
},
    {
        type: "input",
        name: "spent_name",
        message: "Descripcion del gasto: ",
    },
]


