export default function pageNames() {
  const buttonCreate = document.querySelector('[data-nav="create"]');
  const buttonBookmark = document.querySelector('[data-nav="bookmark"]');
  const buttonProfile = document.querySelector('[data-nav="profile"]');
  const buttonHome = document.querySelector('[data-nav="home"]');
  let paragraph = document.querySelector('[data-js="h1"]');

  buttonCreate.addEventListener("click", () => {
    paragraph.textContent = "CREATE";
  });
  buttonBookmark.addEventListener("click", () => {
    paragraph.textContent = "BOOKMARKS";
  });
  buttonProfile.addEventListener("click", () => {
    paragraph.textContent = "YOUR PROFILE";
  });
  buttonHome.addEventListener("click", () => {});
}
