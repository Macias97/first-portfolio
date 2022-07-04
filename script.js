const modal_on = document.querySelector(".modal");
const txt = document.querySelector(".modal_text");
const container = document.querySelector(".bio_container");
const bio_section = document.querySelector(".bio_section");
const bio_text = document.querySelector(".bio_text");
const home = document.querySelector(".home_container");
const body = document.querySelector("body");
const modal_off = document.querySelector(".fa-xmark");
const skills = document.querySelector(".skills_section");
const bars = document.querySelectorAll(".outside");
const inners = document.querySelectorAll(".inner");
const heading = document.querySelector("#prg");
const nums = document.querySelectorAll(".num");
const offers = document.querySelector(".offer_container");
const contact = document.querySelector(".contact_container");

modal_on.addEventListener("click", () => {
  txt.classList.toggle("hidden");
  container.classList.toggle("blurry");
  bio_text.classList.toggle("blurry");
  body.style.overflow = "hidden";
  home.classList.toggle("blurry");
  skills.classList.toggle("blurry");
});

modal_off.addEventListener("click", () => {
  txt.classList.toggle("hidden");
  container.classList.toggle("blurry");
  bio_text.classList.toggle("blurry");
  body.style.overflow = "auto";
  home.classList.toggle("blurry");
  skills.classList.toggle("blurry");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((element) => {
    element.target.classList.toggle("visible", element.isIntersecting);
    if (element.isIntersecting) observer.unobserve(element.target);
  }),
    {
      threshold: 1,
    };
});

observer.observe(bio_section);

let bar_value = 0;

let opt = {
  threshold: 1,
};

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("ani", "anis");
    }
  });
};
let title_observer = new IntersectionObserver(callback, opt);

title_observer.observe(heading);

const callback2 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("anime");
    }
  });
};
let each_observer = new IntersectionObserver(callback2);

inners.forEach((el) => {
  each_observer.observe(el);
});

ctn = 0;

const callback3 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setInterval(() => {
        if (ctn >= 32) {
          clearInterval();
        } else {
          ctn++;
          entry.target.innerHTML = ctn + "%";
        }
      }, 160);
    }
  });
};
let news = new IntersectionObserver(callback3, opt);
nums.forEach((els) => {
  news.observe(els);
});

const callback4 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animowane");
    }
  });
};

let opt2 = {
  threshold: 0.2,
};
let offer_observer = new IntersectionObserver(callback4, opt2);

offer_observer.observe(offers);

const callback5 = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("on");
    }
  });
};

let contact_observer = new IntersectionObserver(callback5);

contact_observer.observe(contact);

v = 12;
var v;
console.log(v);
