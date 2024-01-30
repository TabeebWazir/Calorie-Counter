const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

const cleanInputString = (str) => {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
};

const isInvalidInput = (str) => {
  const regex = /[0-9]e[0-9]/i;
};
