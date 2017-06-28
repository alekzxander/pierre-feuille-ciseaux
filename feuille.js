
let scoreOrdi =0 ;
let scoreUser =0 ;
let choixUser = "";
var choixOrdi = "pierre";
let result = "";




/*l'utilisateur choisi en activant les boutons*/


function pierre() {
	
		
	choixUser = "pierre";
	document.getElementById('meuh');meuh.innerHTML = "pierre";
	return choixUser ;

	


}	
function ciseaux() {

	choixUser = "ciseaux";
	document.getElementById('meuh');meuh.innerHTML = "ciseaux";
	return choixUser;

}
function feuille() {

	choixUser = "feuille";
document.getElementById('meuh');meuh.innerHTML = "feuille";

	return choixUser;
	}
/*l'utilisateur choisi en activant les boutons*/


/* Choix de l'ordi stocké aléatoirement dans une variable*/
function ordinateur() {

	var ordi = ["pierre", "feuille", "ciseaux"];
var choix = ordi.length;
choixOrdi = ordi[Math.random() * choix | 0];
document.getElementById('meuh');meuh.innerHTML = "L'ordinateur a choisi =)";
  return choixOrdi;
  

}



function comparer(){
			
		 if (choixUser === choixOrdi){
		 	
		 	document.getElementById('meuh');meuh.innerHTML = "Egalité !!! "+ choixUser + " contre " + choixOrdi;
		 }

		 else if (choixUser === "pierre" && choixOrdi === "ciseaux"||choixUser === "ciseaux" && choixOrdi === "feuille"||choixUser === "feuille" && choixOrdi === "pierre"){
		 	
		 	scoreUser += 5;
		 	document.getElementById('meuh');meuh.innerHTML = "Bravo !! " + choixUser + " contre " + choixOrdi;

		 }else{
		 	
		 	scoreOrdi += 5;
		 	document.getElementById('meuh');meuh.innerHTML =  choixOrdi + " contre " + choixUser + "!! \nL'ordinateur à gagner espece de looser !!!";
		 
	
		}



	}

function score () {
	document.getElementById('meuh');meuh.innerHTML = "Votre score est de " + scoreUser + " contre " + scoreOrdi;
}