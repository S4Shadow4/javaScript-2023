/* La portée en javascript stipule le fait qu'on peut accéder à une variable déclarée en global meme
au sein d'une fonction. Mais une variable déclarée en locale au sein d'une fonction par exemple ne 
sera accessible qu'à l'intérieur de cette fonction */

/* Les fonctions anonymes */

/* let carre = function (x){
    alert("carré de"+ x +' ='+ x*x)
};

let y = prompt('Entrez un nombre pour obtenir son carre');
carre(y); */


/* fonctions auto-invoquée */

/* (function(x){
    x = prompt("Entrez un nombre pour obtenir son care");
    alert("carré de"+ x +' ='+ x*x); 
})(); */


//Les closures;
function compteur(){
    var i = 0;
    return function(){
        return i ++;
    }
}
let plusUn = compteur();

console.log(
    "premier tour:"+ plusUn()+"\n"+
    "Deuxieme tour:"+ plusUn()+"\n"+
    "Troisième tour:"+ plusUn()

);

/* DOM HTML(Document Object Model) c'est une interface de programmation qui 
permet de manipuler le code html d'une page en utilisant un langage de script */

let titreElt = document.getElementById("gros_titre").innerHTML;
console.log(titreElt);

let paragrahElt = document.querySelector(".para").innerHTML;
let paragrahTextElt = document.querySelector(".para").textContent;

console.log('Contenu du premier paragraphe: '+ '\n' +paragrahElt+ '\n'+
    'Contenu textuel du premier paragraphe: '+'\n'+ paragrahTextElt
);

let paragraphTags = document.getElementsByTagName("p");
console.log(paragraphTags);
console.log(paragraphTags[0].textContent)

let paragrahElts = document.getElementsByClassName("para");
console.log(paragrahElt);

let querySelectorEltA = document.querySelector("p a");
console.log(querySelectorEltA);

let selectParagraph = document.querySelectorAll(".para");
console.log(selectParagraph[1].textContent);

let title = document.title;
console.log(title);

let content = document.body.innerHTML;
console.log(content);

let lien = document.links;
console.log(lien[0]); 

/* Modification des éléments hTML dans le DOM hTML */

document.getElementById("gros_titre").innerHTML += 'et modification des éléments dans le dom html';
/* document.getElementById("gros_titre").textContent = 'ajout de texte additionnel' */

document.querySelector('a').href = 'https://google.fr';
document.querySelector('.para').className = ("para1");

let titre = document.getElementById("gros_titre");
titre.style.color = "orange";
titre.style.fontSize = "60px";

/* Création et insertion des éléments Html dans une page html */

let newPara = document.createElement("p");
newPara.id = 'titre';

let texte = document.createTextNode('nouveau texte inséré');

/* newPara.appendChild(texte);
document.body.appendChild(newPara); */
newPara.appendChild(texte);

let paragraphBefore = document.querySelector('.para');

document.body.insertBefore(newPara,paragraphBefore);


let nouveauPara = document.createElement("textarea");

let para = document.querySelector('.para');
document.body.insertBefore(nouveauPara, para);

/* Modification et suppression d'un élément */

let titreH2 = document.getElementById('titreH2');
//document.body.removeChild(titre);

let textCreate = document.createElement('h2');

textCreate.id = 'texte_insere';
let txt = textCreate.textContent = "text inséré dynamiquement";

document.body.replaceChild(textCreate,titreH2);


