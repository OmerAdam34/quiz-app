export default function input() {
  const form = document.querySelector('[data-js="form"]');

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formElements = event.target.elements;

    const data = {
      question: formElements.question.value,
      answer: formElements.answer.value,
    };
    event.target.reset();
    formElements.answer.focus();
  });
}
