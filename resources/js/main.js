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

document.querySelectorAll(".btn").forEach((e) => {
  e.addEventListener("click", onButtonClick);
});

function onButtonClick(e) {
  if (activeEL) {
    if (activeEL != e.currentTarget) {
      activeEL.classList.remove("active");
    }
  }
  activeEL = e.currentTarget;
  activeEL.classList.add("active");
}

const toTopbutton = document.getElementById("toTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    toTopbutton.style.display = "block";
  } else {
    toTopbutton.style.display = "none";
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
