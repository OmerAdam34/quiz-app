import singlePage from "./bookmark.js";
import card from "./card.js";
import bookmark from "./single-page.js";
import pageNames from "./page-names.js";

const flexboxCard = document.querySelector('[data-js="flexbox-card"]');
const footerCard = document.querySelector('[data-js="footer-card"]');
const headerCard = document.querySelector('[data-js="header-card"]');
const testCard_1 = document.querySelector('[data-js="testCard"]');
const testCard_2 = document.querySelector('[data-js="testCard2"]');

const buttons = document.querySelectorAll('[data-js="bookmarkBtn"]');

card(flexboxCard);
card(footerCard);
card(headerCard);
card(testCard_1);
card(testCard_2);

singlePage();

pageNames();

bookmark();
