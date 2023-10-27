document.addEventListener("DOMContentLoaded", function () {
  const counterInput = document.getElementById("counter");
  const incrementBtn = document.getElementById("increment");
  const decrementBtn = document.getElementById("decrement");

  let counterValue = 0;

  function updateCounter() {
    counterInput.value = counterValue;
  }

  incrementBtn.addEventListener("click", function () {
    counterValue += 1;
    updateCounter();
  });

  decrementBtn.addEventListener("click", function () {
    if (counterValue > 0) {
      counterValue -= 1;
      updateCounter();
    }
  });
});

const form = document.getElementById("form");
const DATA = JSON.parse(localStorage.getItem("data")) || [];
const forwardButton = document.getElementById("forward");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (e.submitter === forwardButton) {
    const obj = {};
    let data = new FormData(form);
    for (let value of data.entries()) {
      obj[value[0]] = value[1];
    }
    DATA.push(obj);
    localStorage.setItem("data", JSON.stringify(DATA));
    console.log(DATA);
  }
});

function getLetters(name) {
  const element = document.querySelector(`input[name = ${name}]`);
  const value = element.value;
  const onlyLetters = value.replace(/[^a-zA-Z)]/g, "");
  if (value !== onlyLetters) {
    element.classList.add("invalid-input");
  } else {
    element.classList.remove("invalid-input");
  }
}

const nameValue = document.querySelector(`input[name='name']`);
const surnameValue = document.querySelector(`input[name='surname']`);
nameValue.addEventListener("input", function () {
  getLetters("name");
});
surnameValue.addEventListener("input", function () {
  getLetters("surname");
});
