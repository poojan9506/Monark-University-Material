let box = document.querySelector("#inp-check");
let bar = document.querySelector(".fa-solid");
let rightnav = document.querySelector(".nav-right");

function work() {
  rightnav.style.top = "100px";
  rightnav.style.left = "30px";
}

function reversework() {
  rightnav.style.top = "-1000px";
  rightnav.style.left = "-1000px";
}

bar.addEventListener("click", () => {
  if (box.checked == false) {
    work();
  } else if (box.checked == true) {
    reversework();
  }
});

let typed = new Typed(".spann", {
  strings: ["Assignment", "Mid Exam FAQ", "University Exam FAQ"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});
