// TOGGLE CONTENT

const processItemsBtns = document.querySelectorAll(".process__btn");

for (btn of processItemsBtns) {
  btn.addEventListener("click", function () {
    let card = this.parentElement;
    let cardToggleContent = card.querySelector(".item__toggle-content");
    cardToggleContent.classList.toggle("item__toggle-content--hidenn");

    let cardToggleBtn = card.querySelector(".process__btn");
    cardToggleBtn.classList.toggle("process__btn--active");
  });
}

// SLIDER

const slider = document.querySelector(".testimonials__list");
const sliderChildren = [...slider.children];

sliderChildren.slice(0, 2).forEach((slide) => {
  slider.insertAdjacentHTML("beforeend", slide.outerHTML);
});

const comments = document.querySelectorAll(".testimonials__item");
const commentWidth =
  document.querySelector(".testimonials__item").offsetWidth + 175;
let step = 0;

for (comment of comments) {
  comment.addEventListener("click", function () {
    if (!this.classList.contains("testimonials__item--active")) {
      step++;

      let scrollWidth = commentWidth * step + "px";

      for (comment of comments) {
        comment.style.transition = "all 0.5s linear";
        comment.style.translate = "-" + scrollWidth + " 0";
        comment.classList.remove("testimonials__item--active");
      }
      if (step === 4) {
        const intervalId = setTimeout(() => {
          step = 0;
          scrollWidth = 0;
          comments[0].classList.add("testimonials__item--active");

          for (comment of comments) {
            comment.style.transition = "none";
            comment.style.translate = "0 0";
          }
        }, 500);
      }
      this.classList.add("testimonials__item--active");
    }
  });
}

// BACK TO TOP

const btnBackTop = document.querySelector(".bottom__btn");

btnBackTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
