export default function bookmark() {
  // const btn = document.querySelector('[data-js="bookmarkBtn"]');

  // btn.addEventListener("click", () => {
  //   btn.classList.toggle;
  //   if (btn.classList.toggle("click")) {
  //     btn.style.stroke = "#3c7f9c";
  //   } else {
  //     btn.style.stroke = "#303030";
  //   }
  // });

  const btns = document.querySelectorAll('[data-js="bookmarkBtn"]');
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("bookmarkButton--active");
    });
  });
}
