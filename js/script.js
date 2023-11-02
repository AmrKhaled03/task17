// start skills

const skills = document.querySelectorAll(".skill small");

skills.forEach((skill) => {
  skill.style.width = skill.dataset.width;
});

window.addEventListener("load", vanish);
function vanish() {
  let preLoader = document.querySelector(".preloader");
  preLoader.classList.add("disappear");
}
let span = document.querySelector(".up");
let nav = document.querySelector(".navbar");
let elem = document.querySelector(".loader");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  elem.style.width = `${(scrollTop / height) * 100}%`;
});

window.onscroll = function () {
  if (window.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
  if (window.scrollY >= 200) {
    nav.classList.add("appear");
  } else {
    nav.classList.remove("appear");
  }
};
span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
var typed = new Typed(".text-type", {
  strings: [
    "Amr Khaled Marey",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Programmer",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
let dark = document.querySelector(".icon");

let tgs = document.querySelector(".mean");
let specials = document.querySelectorAll(".special");
let lis = document.querySelectorAll("li span");

var darkMode = false;

if (localStorage.getItem("theme") === "dark") {
  darkMode = true;

} else if (localStorage.getItem("theme") === "light") {
  darkMode = false;
 
}

var ele = document.body;
if (darkMode) {
  ele.classList.toggle("dark");
}
function chanCol() {
  ele.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    ele.classList.contains("dark") ? "dark" : "light"
  );
  if(localStorage.getItem("theme") === "dark") {
      tgs.style.color = "white";
  dark.classList.toggle("fa-sun");
  dark.classList.toggle("fa-moon");
  specials.forEach((special) => {
    special.style.color = "white";
      });
      lis.forEach((li) => {
        li.style.color = "white";
      }); 
  }else{
    tgs.style.color = "black";
    dark.classList.toggle("fa-sun");
    dark.classList.toggle("fa-moon");
    specials.forEach((special) => {
      special.style.color = "black";
        });
        lis.forEach((li) => {
    li.style.color = "black";
  }); 
  }



 
}
let colors = document.querySelector(".color-switcher");
function openColors() {
  colors.classList.toggle("open");
}
let themesBtns = document.querySelectorAll(".theme-buttons");
themesBtns.forEach((btn) => {
  btn.onclick = () => {
    let dataColor = btn.getAttribute("data-color");
    document.body.style.backgroundColor = dataColor;
    tgs.style.color = "white";
    document.querySelector("  .card").style.border = "1rem solid white";
    skills.forEach((skill) => {
      skill.style.backgroundColor = dataColor;
    });
  };
});

function sendEmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceId = "service_ib9q8mf";
  const templateId = "template_7hn7tqe";

  emailjs
    .send(serviceId, templateId, params)

    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      document.getElementById("phone").value = "";

      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Message Is Sent Successfully !",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
}
