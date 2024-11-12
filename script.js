const form = document.getElementById("form");
const saveBtn = document.getElementById("save");
/* console.log(form); */

const generateAlert = function () {
  const alertDiv = document.getElementById("alert");

  const alert = document.createElement("div");
  alert.className = "alert alert-danger";
  alert.role = "alert";
  alert.innerText = "Nessun elemento precedente trovato";

  alertDiv.appendChild(alert);
};

const generateAlert2 = function () {
  const alertDiv = document.getElementById("alert");

  const alert = document.createElement("div");
  alert.className = "alert alert-info";
  alert.role = "alert";
  alert.innerText = "Elemento rimosso con successo";

  alertDiv.appendChild(alert);
};

const h1 = document.querySelector("h1");
const defaultMessage = h1.innerText;

const removeName = function () {
  const inputFromStorage = localStorage.getItem("input-inserito");
  if (inputFromStorage) {
    localStorage.removeItem("input-inserito");

    h1.innerText = defaultMessage;
    console.log("sono entrato nell if");
    generateAlert2();
  } else {
    generateAlert();
    console.log(" NOON sono entrato nell if");
  }
};

const clearBtn = document.getElementById("clear");

window.addEventListener("DOMContentLoaded", function () {
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
    console.log(h1.innerText);

    clearBtn.onclick = function (e) {
      e.preventDefault();

      removeName();
    };
  };
  const inputFromStorage = localStorage.getItem("input-inserito");
  if (inputFromStorage) {
    const h1 = document.querySelector("h1");
    h1.innerText = `Ciao ${inputFromStorage}!`;
  }
});
