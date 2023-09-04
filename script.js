const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Empty!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.getElementById("toggleIcon"); // Ahora obtenemos el ícono por ID
let isDark = true;

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark = !isDark;

    // Cambia el ícono en función del estado isDark
    if (isDark) {
        toggleIcon.classList.remove("far fa-sun");
        toggleIcon.classList.add("fas fa-moon");
    } else {
        toggleIcon.classList.remove("fas fa-moon");
        toggleIcon.classList.add("far fa-sun");
    }
};




