const form = document.getElementById("form");
/* console.log(form); */

form.onsubmit = function (e) {
  e.preventDefault();

  const input =
    document.getElementById(
      "inputName"
    ).value; /* perchè con form non lo prende? */
  /*  console.log(input); */

  localStorage.setItem("input-inserito", input);

  form.reset();

  const h1 = document.querySelector("h1");
  h1.innerText = `Ciao ${input}!`;
};

const inputFromStorage = localStorage.getItem("input-inserito");
