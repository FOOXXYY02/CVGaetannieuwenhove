// Récupérer le compteur depuis le DOM
const compteur = document.getElementById("compteur");

// Récupérer la valeur actuelle du compteur depuis le local storage
let compteurValue = localStorage.getItem("compteurValue");

// Si le compteur n'existe pas encore dans le local storage, initialiser sa valeur à 0
if (compteurValue === null) {
    compteurValue = 0;
}

// Mettre à jour le compteur dans le DOM
compteur.textContent = compteurValue;

// Incrémenter le compteur et mettre à jour le local storage à chaque visite
compteurValue++;
localStorage.setItem("compteurValue", compteurValue);