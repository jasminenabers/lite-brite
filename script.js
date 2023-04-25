"use strict";

const vendingmachineSection = document.querySelector(".Vending-machine");
const totalPargraph = document.querySelector(".total");
const form = document.querySelector(".numbers");
const coinsContainer = document.querySelector(".coins-container");
let counter = 0;

vendingmachineSection.addEventListener("click", (event) => {
  console.dir(event.target);
  if (event.target.classList.contains("cola")) {
    counter += 2;
    console.log(counter);
    console.dir(totalPargraph);
    totalPargraph.innerText = `Total: ${counter}`;
  } else if (event.target.classList.contains("peanuts")) {
    counter += 3;
    totalPargraph.innerText = `Total: ${counter}`;
  } else if (event.target.classList.contains("candy")) {
    counter += 4;
    totalPargraph.innerText = `Total: ${counter}`;
  } else if (event.target.classList.contains("snack")) {
    counter += 6;
    totalPargraph.innerText = `Total: ${counter}`;
  }
});

form.addEventListener("submit", (zebra) => {
  zebra.preventDefault();
  const howManyInput = document.querySelector("#how-many");
  const dropDown = document.querySelector("#typeof-coin");
  console.log(dropDown.value);
  console.dir(howManyInput);
  console.log(howManyInput.value);
  for (let i = 0; i < howManyInput.value; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("divs", dropDown.value);
    coinsContainer.append(newDiv);
  }
});
