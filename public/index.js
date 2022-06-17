const ratingCard = document.querySelector('.state-card');
const thankYouCard = document.querySelector('.thank_you_card');
const cardForm = document.getElementById('form');
const ratings = cardForm.querySelectorAll('.rating');
const card = document.querySelector('.card-1');


const removeActiveClass = () => {
    ratings.forEach(card => {
        card.classList.remove("active")
    })
}

const addActiveClass = () => {
    ratings.forEach(card => {
        card.addEventListener("click", () => {
            removeActiveClass()
            card.classList.add("active")
        })
    })
}

cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    
    if(ratings !== null || ratings !== undefined) {
        const userSelection = document.getElementById('rating-number');
        userSelection.innerHTML = ratings;

        let flipAnimationDuration = 1800;
        Promise.resolve(
            setTimeout(() => {
                card.classList.add("flip-animation");
                ratingCard.classList.add("hidden");
            }, 0)
        ).then(
            setTimeout(() => {
                ratingCard.remove();
                thankYouCard.classList.remove("hidden");
                thankYouCard.classList.add("fade-bottom")
            }, flipAnimationDuration)
        )
        }
    }
)

addActiveClass()