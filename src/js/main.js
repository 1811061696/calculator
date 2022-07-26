var container = document.querySelector(".container");
var resultUi = document.querySelector(".result");

let calculator = [];
let start = 0;
let startResult = 0;
let lastResult = 0;


const ARRAY_NUMBER_BUTTON = [
  {
    name: "7",
    text: 7,
    type: "number",
    click: "getNumberButton('7')",
  },
  {
    name: "8",
    text: 8,
    type: "number",
    click: "getNumberButton('8')",
  },
  {
    name: "9",
    text: 9,
    type: "number",
    click: "getNumberButton('9')",
  },
  {
    name: "multiply",
    text: "*",
    type: "math",
    click: "getMathButton('*')",
  },
  {
    name: "4",
    text: 4,
    type: "number",
    click: "getNumberButton('4')",
  },
  {
    name: "5",
    text: 5,
    type: "number",
    click: "getNumberButton('5')",
  },
  {
    name: "6",
    text: 6,
    type: "number",
    click: "getNumberButton('6')",
  },
  {
    name: "plus",
    text: "+",
    type: "math",
    click: "getMathButton('+')",
  },
  {
    name: "1",
    text: 1,
    type: "number",
    click: "getNumberButton('1')",
  },
  {
    name: "2",
    text: 2,
    type: "number",
    click: "getNumberButton('2')",
  },
  {
    name: "3",
    text: 3,
    type: "number",
    click: "getNumberButton('3')",
  },
  {
    name: "minus",
    text: "-",
    type: "math",
    click: "getMathButton('-')",
  },
  {
    name: "0",
    text: 0,
    type: "number",
    click: "getNumberButton('0')",
  },
  {
    name: "dot",
    text: ".",
    type: "number",
    click: "getNumberButton('.')",
  },
  {
    name: "divide",
    text: "/",
    type: "math",
    click: "getMathButton('/')",
  },
  {
    name: "clear",
    text: "AC",
    click: "clearAll()",
  },
  {
    name: "equal",
    text: "=",
    click: "calculateQueue(calculator)",
  },
];


const createButton = () => {
  ARRAY_NUMBER_BUTTON.forEach((item) => {
    container.innerHTML += `<button id="${item.name}" class="button" 
    onclick="${item.click}"
    >${item.text}</button>`;
  });
};
createButton();

function calculateQueue(value) {
  if (start !== 0) {
    start = parseFloat(start);
    addToQueue(start);
  }

  var result = value[0];
  var check = 0;

  if(value.length > 2){

  for (var i = 2; i < value.length; i = i + 2) {
    switch (calculator[i - 1]) {
      case "+":
        result += value[i];
        break;
      case "-":
        result -= value[i];
        break;
      case "/":
        if (value[i] === 0) {
          check = 1;
        } else {
          result = result / value[i];
        }

        break;
      case "*":
        result = result * value[i];
        break;
    }
    startResult = result
    this.lastResult = result;
  }

  result = result.toFixed(4);
  result = parseFloat(result);
  if (check === 1) {
    clearAll();
    resultUi.innerHTML = "ERROR";
  } else {
    resultUi.innerHTML = result;
    start = result;
    calculator = [];
  }
}
else{
    startResult = value[0]
    start = result;
    calculator = [];
}
}


function addToQueue(start) {
  calculator.push(start);
}


function clearAll() {
  calculator = [];
  start = 0;
  resultUi.innerHTML = "0";
}

function getNumberButton(number) {
  if (startResult != 0) {
    if(start !== "+" || start !== "-" || start !=="*" || start !== "/"){
      start = 0;
    }
    resultUi.innerHTML = "0"
    startResult = 0;
  }
  if (resultUi.innerHTML === "ERROR" || (resultUi.innerHTML == "0" && number != ".")) {
    resultUi.innerHTML = "";
  }
  if (!(number === ".") || !start.match(/[.]/)) {
    start += number;
    resultUi.innerHTML += number;
  }
}


function getMathButton(math) {
  if (start !== 0 && start !== "-") {
    start = parseFloat(start);
    addToQueue(start);
    addToQueue(math);
    resultUi.innerHTML += math;
    start = 0;
  }
  if (math == "-" && isNaN(calculator[0]) && start !== "-") {
    start = "-";
    resultUi.innerHTML = "-";
  }
}





