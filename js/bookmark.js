export default function bookmark() {
  const btns = document.querySelectorAll('[data-js="bookmarkBtn"]');
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("bookmarkButton--active");
    });
  });
}
