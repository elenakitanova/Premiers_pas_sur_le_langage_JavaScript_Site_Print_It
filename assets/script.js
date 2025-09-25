const slides = [
    {
        "image":"slide1.jpg",
        "tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image":"slide2.jpg",
        "tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image":"slide3.jpg",
        "tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image":"slide4.png",
        "tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
    }
]


// Rajout complémentaire 

//Création d'une variable d’index
let currentIndex = 0;

// Sélections DOM des éléments HTML à modifier
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Création dynamique des bullet points ajout de boucle pour créer 1 dot par slide
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("dot_selected");
    dotsContainer.appendChild(dot);
});

//Gérer le clic sur la flèche gauche
arrowLeft.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; // boucle arrière
    }
    updateSlide(currentIndex);
});


//Gérer le clic sur la flèche droite
arrowRight.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0; // boucle
    }
    updateSlide(currentIndex);
});

//Fonction pour mettre à jour le slider. Création d'une fonction updateSlide(index)
function updateSlide(index) {
    // mise à jour de l’image
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;   // mise à jour du texte
    bannerText.innerHTML = slides[index].tagLine; // mise à jour du texte

    const dots = document.querySelectorAll(".dot"); // mise à jour des bullets
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    dots[index].classList.add("dot_selected");
}

updateSlide(currentIndex); // Affiche le premier slide au démarrage
