export default function card(cardElement) {
  const button = cardElement.querySelector('[data-js="button"]');
  const answer = cardElement.querySelector('[data-js="answer"]');

  console.log(answer.classList);
  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");

    if (answer.classList.contains("hidden")) {
      button.textContent = "Show answer";
    } else {
      button.textContent = "Hide answer";
    }
  });
}
