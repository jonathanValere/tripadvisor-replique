const $ = document;

//  Gestion du scroll ---------------------------
const stopScroll = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY; // Axe Y
    if (scroll) {
      window.scroll(0, 0);
    }
  });
};

const playScroll = () => {
  window.addEventListener("scroll", () => {
    let scroll = window.scrollY; // Axe Y
    if (scroll === 0) {
      window.scrollY;
    }
    console.log(scroll);
  });
};
//  ---------------------------

$.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  // Afficher modal----------------
  $.querySelector("#modal-form").addEventListener("click", (e) => {
    console.log("j'affiche le modal");
    // //  Gestion du scroll ---------------------------
    // stopScroll();
    return ($.querySelector(".modal").style.display = "initial");
  });
  $.querySelector(".close-modal").addEventListener("click", (e) => {
    console.log("je masque le modal");
    // playScroll();
    return ($.querySelector(".modal").style.display = "none");
  });
  // ---------------

  // Gestion menu pour smartphone --------------------
  $.querySelector("#menu-hamburger").addEventListener("click", (e) => {
    return ($.querySelector(".menu-smartphone").style.display = "initial");
  });
  $.querySelector(".close-menu").addEventListener("click", (e) => {
    return ($.querySelector(".menu-smartphone").style.display = "none");
  });
  // -------------------------

  // Gestion du formulaire -------------------
  const contactForm = $.querySelector(".forms-style");
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      firstname: $.querySelector("#firstname").value,
      lastname: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      message: $.querySelector("#message").value,
    };
    // console.log(data);

    const response = await axios.post("http://localhost:5500/form", data);
    console.log("Front>>>", response);
  });
});
