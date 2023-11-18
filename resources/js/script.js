let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let value = eval(display.value);
    display.value = value.toFixed(4);
  } catch (error) {
    display.value = "Error";
  }
}
