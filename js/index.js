import card from "./card.js";
import navigation from "./navigation.js";

const flexboxCard = document.querySelector('[data-js="flexbox-card"]');
const footerCard = document.querySelector('[data-js="footer-card"]');
const headerCard = document.querySelector('[data-js="header-card"]');
const testCard_1 = document.querySelector('[data-js="testCard"]');
const testCard_2 = document.querySelector('[data-js="testCard2"]');

card(flexboxCard);
card(footerCard);
card(headerCard);
card(testCard_1);
card(testCard_2);

// BOOKMARK COLOR

const btn = document.querySelector('[data-js="bookmarkBtn"]');

btn.addEventListener("click", () => {
  btn.classList.toggle;

  if (btn.classList.toggle("click")) {
    btn.style.backgroundColor = "yellow";
  } else {
    btn.style.backgroundColor = "transparent";
  }
});
