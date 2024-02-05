const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Fonction pour ajouter une tâche à la liste, elle vérifie si l'input est vide et affiche une alerte si l'est
// Si elle n'est pas vide, elle crée un nouvel élément "li", elle ajoute le contenu saisi à l'élément "li"
// Elle crée un élément span pour le bouton de suppression, ajoute le symbole "x" à l'élément span
// Puis ajoute l'élément span à l'élément "li"
// Après avoir fait cela elle réinitation la valeur de l'input pour ce se soit vide et sauvegarde les données dans le stockage local

function AddTask(){
    if (inputBox.value === '') {
        alert("Vous devez écrire quelque chose !");        
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// L'écouteur d'événements pour la liste, vérifie si l'élément cliqué est un "li"
// Puis basculer la classe "checked" pour l'élément "li" cela permet de cocher la liste en "fait" et barre la tache
// Ensuite il sauvegarde les données dans le stockage local
// Sinon si je clique sur l'élément "span" donc la petite croix, il me retire l'élément "li" et sauvegarde cela dans le stockage local



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Fonction pour sauvegarder les données dans le stockage local
// Stocke le contenu de la liste dans le stockage local

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Fonction pour afficher les tâches sauvegardées
// Récupère les données sauvegardées depuis le stockage local et les affiche dans la liste

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

// Appelle la fonction pour afficher les tâches sauvegardées lors du chargement de la page
showTask();
