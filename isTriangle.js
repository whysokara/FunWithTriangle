const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const a1 = Number(inputs[0].value);
  const a2 = Number(inputs[1].value);
  const a3 = Number(inputs[2].value);
  const sumOfAngles = calculateSumOfAngles(a1, a2, a3);

  if (sumOfAngles === 180) {
    outputEl.innerText = "Yay! This is a triangle";
  } else {
    outputEl.innerText = "dhatt teri ki, this isn't a triangle";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
