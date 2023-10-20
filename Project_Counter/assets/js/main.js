"strict use";

let result = document.body.querySelector(".result");
let x = 0;

function plus1() {
  x = x + 1;
  result.textContent = x;
}

function plus10() {
  x = x + 10;
  result.textContent = x;
}

function plus100() {
  x = x + 100;
  result.textContent = x;
}

function minus1() {
  x = x - 1;
  result.textContent = x;
}

function minus10() {
  x = x - 10;
  result.textContent = x;
}

function minus100() {
  x = x - 100;
  result.textContent = x;
}

function reset() {
  x = 0;
  result.textContent = x;
}

function multi2() {
  x = x * 2;
  result.textContent = x;
}
