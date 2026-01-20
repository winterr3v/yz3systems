const btn = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

btn?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  btn.setAttribute("aria-expanded", open ? "true" : "false");
});
