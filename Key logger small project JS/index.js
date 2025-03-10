const logdiv = document.querySelector(".log");
const statediv = document.querySelector(".state");
const startbtn = document.getElementById("Start-btn");
const stopbtn = document.getElementById("Stop-btn");

startbtn.addEventListener("click", () => {
  document.addEventListener("keydown", handleDown);
  document.addEventListener("keyup", handleUp);
  startbtn.disabled = true;
  stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handleDown);
  document.removeEventListener("keyup", handleUp);
  logdiv.textContent = "";
  statediv.textContent = "";
  stopbtn.disabled = true;
  startbtn.disabled = false;
});

function handleDown(e) {
  logdiv.textContent = `Key ${e.key} pressed down`;
  statediv.textContent = `Key is down`;
}

function handleUp(e) {
  logdiv.textContent = `Key ${e.key} pressed Up`;
  statediv.textContent = `Key is Up`;
}
