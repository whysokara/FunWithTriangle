const sideInput = document.querySelectorAll(".sideInput");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#output");

function areaCal(a, b) {
  const area = 0.5 * (a * b).toFixed(2);
  return area;
}

function calculateTriangleArea() {
  const v1 = Number(sideInput[0].value);
  const v2 = Number(sideInput[1].value);
  const cal = areaCal(v1, v2);

  output.innerText = `The area of triangle is ${cal}`;
}

calculate.addEventListener("click", calculateTriangleArea);
