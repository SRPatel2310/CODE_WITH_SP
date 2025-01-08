const img1 = document.getElementById("carousel-1");
const img2 = document.getElementById("carousel-2");
const btn1 = document.getElementById("next");
const btn2 = document.getElementById("previous");

let check = 0;
btn1.addEventListener("click", function () {
  if (check === 0) {
    img1.style.display = "none";
    img2.style.display = "block";

    check = 1;
  }
});

btn2.addEventListener("click", function () {
  if (check === 1) {
    img1.style.display = "block";
    img2.style.display = "none";
    check = 0;
  }
});
