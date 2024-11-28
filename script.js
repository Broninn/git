function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "https://github.com/broninn.png");
    img.setAttribute("alt", "Profile Image Light");
  } else {
    img.setAttribute("src", "https://github.com/broninn.png");
    img.setAttribute("alt", "Profile Image Dark");
  }
}

/* MODAL */

// Selecione o modal, botão de fechamento e links
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const links = document.querySelectorAll("ul li a");
const modalBodies = document.querySelectorAll(".modal-body");

// Adicione o evento de clique aos links
links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Evita o comportamento padrão

    // Identifique o conteúdo a ser exibido
    const contentId = link.getAttribute("data-content");
    modalBodies.forEach((body) => (body.style.display = "none")); // Esconde todos os conteúdos
    const contentToShow = document.getElementById(contentId);
    if (contentToShow) {
      contentToShow.style.display = "block"; // Mostra o conteúdo específico
    }

    modal.classList.remove("hidden"); // Mostra o modal
  });
});

// Adicione o evento de clique ao botão de fechar
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden"); // Esconde o modal
});

// Fechar modal ao clicar fora dele
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
