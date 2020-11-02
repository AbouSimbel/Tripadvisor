document.addEventListener("DOMContentLoaded", () => {
  console.log("page loaded");

  document.querySelector("#connexion").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("display");
  });

  document.querySelector(".fas").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("display");
  })
});




