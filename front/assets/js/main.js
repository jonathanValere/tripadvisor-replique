const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  // Afficher modal----------------
  $.querySelector("#modal-form").addEventListener("click", (e) => {
    $.documentElement.style.overflow = "hidden"; // Gestion Scroll
    return ($.querySelector(".modal").style.display = "initial");
  });
  $.querySelector(".close-modal").addEventListener("click", (e) => {
    $.documentElement.style.overflow = "initial"; // Gestion Scroll
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

    // const response = await axios.post("http://localhost:5500/form", data);
    const response = await axios.post(
      "https://site--backend-tripadvisor--lkcrzmx4xyh5.code.run/form",
      data
    );
    console.log("Front>>>", response);
  });
});
