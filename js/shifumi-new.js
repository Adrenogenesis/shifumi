/*
 DOM
      shi-fu-mi
      mobile-first
      button effet hover
      vous / ia et nouvelle partie
	  
	  //Déclaration des éléments du DOM


//TODO: Fonction Jeu
  //TODO: Choix de l'IA -> iaChoice
  //TODO: récupérer le choix du joueur -> playerChoice
  //TODO: Comparer les choix (playerChoice, iaChoice)-> winnerIs
     //TODO: Si : Cas égalité
     //TODO: Sinon Si : Cas de victoire 
     //TODO: Sinon : Cas de défaite
  //TODO: Afficher les résultats
  //TODO: Afficher le choix du joueur (playerChoice)
    //TODO: Afficher le choix de l'IA (iaChoice)
    //TODO: Afficher le résultat
//TODO: Fonction restart

*/
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        const joueur = buttons[i].innerHTML;
        const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";

        if (joueur === robot) {
            resultat = "Egalité";
        }
        else if ((joueur === "Pierre" && robot === "Ciseaux") || (joueur === "Feuille" && robot === "Pierre") ||
         (joueur === "Ciseaux" && robot === "Feuille")){
             resultat = "Gagné";
               }else{
                   resultat = "Perdu";
               }
               document.querySelector(".resultat").innerHTML = `
               Joueur : ${joueur} </br>
               Robot : ${robot} </br>
               ${resultat} `;

    });
}