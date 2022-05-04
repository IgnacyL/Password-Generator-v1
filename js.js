const numberChars = "0123456789";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const specialCharts = "!@#$%^&*";
const chart = numberChars + upperChars + lowerChars + specialCharts;
const btn = document.querySelector(".btn");
const codesNumber = 1;
const charsNumbers = 12;
const cont = document.querySelector(".container");
const password = document.querySelector(".password");
const span = document.querySelector("span");

const codeGenerator = () => {
  for (let i = 0; i < chart.length; i++) {
    let code = "";
    password.innerText = code;
    for (let i = 0; i < charsNumbers; i++) {
      const index = Math.floor(Math.random() * chart.length);
      code += chart[index];
    }
    password.textContent = code;
  }
};

btn.addEventListener("click", codeGenerator);
