
import { newSpent } from './prompts.js'
import { get, save } from "./fsMethods.js";


export async function createNewSpent() {
  console.log("Agregando gasto:");
  const Spent = await newSpent();

  console.log("Gasto cargado: ", Spent);

  const currentSpents = await get("spents");

    currentSpents.push(Spent);
    
    await save("spents", currentSpents);
}

export async function getAllSpents() {
  const currentSpents = await get("spents");
  console.log(currentSpents);
}

// export async function findSpentByName(name){
//   const spents = await get("spents");
//   const foundSpent = spents.find((spent) => spent.name === name);
//   return foundSpent;
// };

export async function sumAllSpents()  {
  try {
    const spents = await get('spents');
    const total = spents.reduce((acc, spent) => acc + parseFloat(spent.spent_price), 0);
    console.log(`Total de gastos : ${total}`);
  } catch (error) {
    console.error('Error al obtener los gastos', error);
  }
};