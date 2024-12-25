// Initialize Swiper
const swiper = new Swiper('.news-swiper', {
  slidesPerView: 4,
  speed: 800,
  spaceBetween: 1,
  navigation: {
    nextEl: '.news-swiper__next',
    prevEl: '.news-swiper__prev',
  }
})

//
const cards = document.querySelectorAll(".card");
if (cards) {
  cards.forEach(card => {
    const heartBtn = card.querySelector(".heart-icon");

    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("active");
    })
  })
}
