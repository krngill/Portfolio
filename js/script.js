


const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    const state = Flip.getState(cards);
    const isCardActive = card.classList.contains("active");

    cards.forEach((otherCard, otherIdx) => {
      otherCard.classList.remove("active");
      otherCard.classList.remove("is-inactive");

      if (!isCardActive && index !== otherIdx) {
        gsap.to(otherCard, { duration: 0.5, width: "auto", height: "auto" });
        otherCard.classList.add("is-inactive");
      }
    });

    gsap.to(card, { duration: 0.5, width: "100%", height: "100%" });
    card.classList.toggle("active");
  });
});




// nav links 
// nav links 
gsap.registerPlugin(Flip);

const links = document.querySelectorAll(".nav-item a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        gsap.to(links, { color: "azure" });
        gsap.to(link, { color: "#385ae0" });

        // Remove 'active' class from all links
        links.forEach((l) => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');

        const state = Flip.getState(activeNav);
        link.appendChild(activeNav);
        Flip.from(state, {
            duration: 1.5,
            absolute: true,
            ease: "elastic.out(1,0.5)"
        });
    });
});
