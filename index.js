import inquirer from "inquirer";
import { createNewSpent, getAllSpents, sumAllSpents } from './utils.js'




const main = async () => {
    console.log("GASTOS");

    let run = true;
    while (run) {
        const action = await inquirer.prompt([
            {
                type: "list",
                name: "task",
                message: "Escoja una opcion",
                choices: [
                    { value: 1, name: "Registrar un gasto" },
                    { value: 2, name: "Ver todos los gastos" },
                    { value: 3, name: "Sumar gastos" },
                    { value: 4, name: "Finalizar" }]
            }
        ]);
        switch (action.task) {
            case 1:
                await createNewSpent();
                break;
            case 2:
                await getAllSpents();
                break;
            case 3:
                await sumAllSpents();
                break;
            case 4:
                run = false;
                break;
            default:
                run = false;
                break;
        }


    };
    console.log("App finalizada");

};

main()

