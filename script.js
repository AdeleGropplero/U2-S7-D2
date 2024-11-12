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
  alert.innerText = "Elemento rimosso";

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
  };

  const inputFromStorage = localStorage.getItem("input-inserito");
  if (inputFromStorage) {
    const h1 = document.querySelector("h1");
    h1.innerText = `Ciao ${inputFromStorage}!`;
  }

  clearBtn.onclick = function (e) {
    e.preventDefault();

    removeName();
  };

  counter.innerText = counterValue;
});

const reset = function () {
  // Rimuovi eventuali alert
  const alertDiv = document.getElementById("alert");
  const existingAlert = alertDiv.querySelector(".alert");
  if (existingAlert) {
    alertDiv.removeChild(existingAlert);
  }
};
setInterval(reset, 5000);

/* Counter */
const counter = document.getElementById("counter");

let counterValue = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0;

const updateCounter = function () {
  counterValue++;
  counter.innerText = counterValue;
  sessionStorage.setItem("counter", counterValue);
};

setInterval(updateCounter, 1000);
