document.body.classList.add("loading");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.body.classList.remove("loading");
  }, 1000);
});
