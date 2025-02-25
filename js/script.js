document.addEventListener("DOMContentLoaded", function () {
  const switchMode = document.getElementById("switch-mode");
  const root = document.documentElement;

  // Ajouter une transition pour un effet fluide
  root.style.transition = "background-color 0.5s ease, color 0.5s ease";

  // Vérifier si un mode est déjà stocké dans le localStorage
  if (localStorage.getItem("theme") === "light") {
      root.classList.remove("dark-mode");
      switchMode.checked = false;
  } else {
      root.classList.add("dark-mode");
      switchMode.checked = true;
  }

  switchMode.addEventListener("change", function () {
      if (this.checked) {
          root.classList.add("dark-mode");
          localStorage.setItem("theme", "dark");
      } else {
          root.classList.remove("dark-mode");
          localStorage.setItem("theme", "light");
      }
  });
});
