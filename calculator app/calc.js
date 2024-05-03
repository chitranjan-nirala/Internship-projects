let screen = document.getElementById("result");
let expression = "";
let operator = "";

function appendNumber(number) {
  expression += number;
  screen.value = expression;
}

function setOperator(selectedOperator) {
  operator = selectedOperator;
  expression += operator;
  screen.value = expression;
}

function clearScreen() {
  expression = "";
  screen.value = "";
}

function calculate() {
  let result;
  switch (operator) {
    case "+":
      result = eval(expression);
      break;
    case "-":
      result = eval(expression);
      break;
    case "*":
      result = eval(expression);
      break;
    case "/":
      result = eval(expression);
      break;
    default:
      result = "";
      break;
  }
  expression = result;
  screen.value = result;
}
