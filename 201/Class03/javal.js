const button_A = document.querySelector("#button_A");
const heading_A = document.querySelector("#heading_A");

button_A.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  heading_A.textContent = `Welcome ${name}`;
};

("use strict");

function quiz() {
  let pica = prompt("What year did I graduate highschool");
  let picalow = pica.toLowerCase();
  if (pica == 2021) alert("You provided the correct anwser!");
  else {
    alert("You provided the incorrect anwser try re spelling it");
  }

  // This is Class 02 Lab soon to be modified

  let duna = prompt("What is the first goal from my five year plan");
  let dunalow = duna.toLowerCase();
  if (duna == "Get certification") alert("You provided the correct anwser!");
  else {
    alert("You provided the incorrect anwser try respelling it");
  }

  // Need to add arrays to widen the subject range

  let luffy = prompt("What is the second goal from my 5 year plan");
  let luffylow = duna.toLowerCase();
  if (luffy == "create a stable income")
    alert("You provided the correct anwser!");
  else {
    alert("You provided the incorrect anwser try respelling it");
  }

  let Han = prompt("What is the third goal from my 5 year plan");
  let hanlow = duna.toLowerCase();
  if (Han == "Create a working environment")
    alert("You provided the correct anwser!");
  else {
    alert("You provided the incorrect anwser try respelling it");
  }

  let Turntsnaco = prompt("What is the fourth goal from my 5 year plan");
  let Turntsnacolow = duna.toLowerCase();
  if (Turntsnaco == "Travel to 3 different states")
    alert("You provided the correct anwser!");
  else {
    alert("You provided the incorrect anwser try respelling it");
  }
}

