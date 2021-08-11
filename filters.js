document
.querySelector("#show-programming")
.addEventListener("change", showProgrammingCards);
document
.querySelector("#show-design")
.addEventListener("change", showDesignCards);
document
.querySelector("#show-marketing")
.addEventListener("change", showMarketingCards);

function showProgrammingCards() {
document.querySelector("#show-design").checked = false;
document.querySelector("#show-marketing").checked = false;

var allCards = document.querySelectorAll(".card");
allCards.forEach(function(card) {
    card.style.display = "none";
});

if (document.querySelector("#show-programming").checked) {
    var programmingCards = document.querySelectorAll(".programming");
    programmingCards.forEach(function(programmingCard) {
        programmingCard.style.display = "inline-block";
    });
} else {
    var allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card) {
        card.style.display = "inline-block";
    });
}
}

function showDesignCards() {
document.querySelector("#show-programming").checked = false;
document.querySelector("#show-marketing").checked = false;

var allCards = document.querySelectorAll(".card");
allCards.forEach(function(card) {
    card.style.display = "none";
});

if (document.querySelector("#show-design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach(function(designCard) {
        designCard.style.display = "inline-block";
    });
} else {
    var allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card) {
        card.style.display = "inline-block";
    });
}
}

function showMarketingCards() {
document.querySelector("#show-design").checked = false;
document.querySelector("#show-programming").checked = false;

var allCards = document.querySelectorAll(".card");
allCards.forEach(function(card) {
    card.style.display = "none";
});

if (document.querySelector("#show-marketing").checked) {
    var designCards = document.querySelectorAll(".marketing");
    designCards.forEach(function(designCard) {
        designCard.style.display = "inline-block";
    });
} else {
    var allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card) {
        card.style.display = "inline-block";
    });
}
}

document
.querySelector("#load-more")
.addEventListener("click", loadMoreCards);

function loadMoreCards() {
var allCards = document.querySelectorAll(".card");
var cardsShownAfterClick = 0;

allCards.forEach(function(card) {
    var allCssProps = window.getComputedStyle(card);
    if (allCssProps.display == "none") {
        if (cardsShownAfterClick < 6) {
            card.style.display = "inline-block";
            cardsShownAfterClick = cardsShownAfterClick + 1;
        }
    }
});

var allCards = document.querySelectorAll(".card");
var numberOfHiddenCards = 0;
allCards.forEach(function(card) {
    var allCssProps = window.getComputedStyle(card);
    if (allCssProps.display == "none") {
        numberOfHiddenCards = numberOfHiddenCards + 1;
    }
});

if (numberOfHiddenCards == 0) {
    document.querySelector("#load-more").style.display = "none";
}
}
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})