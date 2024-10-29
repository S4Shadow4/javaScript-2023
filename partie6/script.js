let fenetre = '';

let p = document.querySelector('p');
p.addEventListener('click', pFenetre);

function pFenetre(){
    window.open('https://google.fr.com','_blank','width = 800 height= 600');
};

let ouvrir = document.getElementById('ouvrir');

ouvrir.addEventListener('click',fOuvrir);

function fOuvrir(){
    fenetre = window.open('https://google.fr','_blank','width=600,height=400');
}

let fermer = document.getElementById('fermer');

fermer.addEventListener('click', fFermer);

function fFermer (){
   fenetre.close()
}

let modifier = document.getElementById('modifier');

modifier.addEventListener('click',fModifier);

function fModifier(){
    fenetre.resizeTo(800,800);
};

console.log(fenetre);

/* L'objet screen */

let para = document.getElementById('screen');

let hauteur = screen.height;
let hauteurDispo = screen.availHeight;
let screenDepth = screen.pixelDepth;

para.innerHTML= 'Voici la hauteur de l\'ecran:'+ hauteur+ '\n'+
'Voici la hauteur disponible de l\'ecran:'+ hauteurDispo+ '\n'+
'Voici la profondeur de l\'ecran: ' + screenDepth;

/* L'objet navigator */


/* function  */
/* 
function entier ([x]){
    return x*x;
};

console.log(entier([2,4])); */

var J = [20,30,10,5,7,12];
var i = '';
var j = '';


for(i=0; i<J.length;i++){
    if(J[0]<J[i+1]){
        j = J[0]
    } else if (J[0]>J[i+1]){
        j = J[i+1]
    }
    alert(j);
};
