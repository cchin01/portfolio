document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.body.classList.add("animate"),
      document.body.classList.remove("d-none"),
      setTimeout(function () {
        document.body.classList.remove("animate");
      }, 3e3);
  },
  !1
);

let activeEL;
console.log(activeEL);

document.querySelectorAll(".btn").forEach((e) => {
  e.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {
  if (activeEL) {
    console.log(activeEL);
    if (activeEL != e.currentTarget) {
      activeEL.classList.remove("active");
    }
    console.log(activeEL);
  }

  activeEL = e.currentTarget;
  activeEL.classList.add("active");
}

//pre-click ALL button to let user know where they are and what they might could do
const buttonAll = document.querySelectorAll(".btn");
buttonAll[0].click();
