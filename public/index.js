const ratingCard = document.querySelector(".state-card");
const thankYouCard = document.querySelector(".thank_you_card");
const form = document.querySelector("#card-form");
const wrapper = document.querySelector(".wrapper");
const ratingNumber = document.querySelector("#rating-number");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedRating = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  if (selectedRating !== null) {
    ratingNumber.innerHTML = selectedRating;

    let flipAnimationDuration = 500;
    ratingCard.classList.add("hidden");
    setTimeout(() => {
      ratingCard.remove();
      thankYouCard.classList.remove("hidden");
      thankYouCard.classList.add("fade-bottom");
    }, flipAnimationDuration);
  }
});
