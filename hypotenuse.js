const sideInput = document.querySelectorAll(".sideInput");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

function hypoCal(a, b) {
  const hypo = Math.sqrt(a * a + b * b).toFixed(2);
  return hypo;
}

function calculateHypotenuse() {
  const v1 = Number(sideInput[0].value);
  const v2 = Number(sideInput[1].value);
  const cal = hypoCal(v1, v2);

  output.innerText = cal;
}

calculate.addEventListener("click", calculateHypotenuse);
