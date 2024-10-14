const input = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase");
const upperCaseOutput = document.querySelector("#uppercase");
const camelCaseOutput = document.querySelector("#camelcase");
const pascalCaseOutput = document.querySelector("#pascalcase");
const snakeCaseOutput = document.querySelector("#snakecase");
const kebabCaseOutput = document.querySelector("#kebabcase");
const trimCaseOutput = document.querySelector("#trimcase");

function capitalizeString(string) {
  if (!string) return string;
  return string[0].toUpperCase() + string.slice(1, string.length);
}

function toCamelCase(string) {
  const lowerCaseString = string.toLowerCase();
  console.log(lowerCaseString);
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function toPascalCase(string) {
  const lowerCaseString = string.toLowerCase();
  const wordsArray = lowerCaseString.split(" ");
  const finalArray = wordsArray.map((word) => {
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function toSnakeCase(string) {
  const wordsArray = string.split(" ");
  return wordsArray.join("_");
}

function tokebabCase(str) {
  return str.replaceAll(" ", "-");
}

function toTrimCase(str) {
  return str.replaceAll(" ", "");
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.trim().toLowerCase();
  upperCaseOutput.innerText = input.value.trim().toUpperCase();
  camelCaseOutput.innerText = toCamelCase(input.value.trim());
  pascalCaseOutput.innerText = toPascalCase(input.value.trim());
  snakeCaseOutput.innerText = toSnakeCase(input.value.trim());
  kebabCaseOutput.innerText = tokebabCase(input.value.trim());
  trimCaseOutput.innerText = toTrimCase(input.value.trim());
}

updateScreen();

input.addEventListener("input", updateScreen);
