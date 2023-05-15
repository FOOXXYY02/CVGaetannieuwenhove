const visitCounter = localStorage.getItem('visitCounter') || 0;
const visitCountElement = document.getElementById('visit-count');
visitCountElement.textContent = visitCounter;

function incrementVisitCounter() {
  const newVisitCounter = parseInt(visitCounter) + 1;// ajoute +1 
  localStorage.setItem('visitCounter', newVisitCounter);
  visitCountElement.textContent = newVisitCounter;//affiche le resultat
}

window.onload = incrementVisitCounter;//incrémentation lors d'un chargement de page affiché