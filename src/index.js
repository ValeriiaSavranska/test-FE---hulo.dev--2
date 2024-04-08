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

const comments = document.querySelectorAll(".testimonials__item");
let step = 0;

// BACK TO TOP

const btnBackTop = document.querySelector(".bottom__btn");

btnBackTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
