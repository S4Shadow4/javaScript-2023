/* //Revisions sur les fonctions
function multiplication(x,y){
    return x*y;
}
let mult = multiplication(2,4);
console.log(`le resultat de la multiplication de 2 par 4 est: \n ${mult}`);

//Les objets (3 façons de creer des objets)
//Basiquement
let personnage = {
    nom: "AGB",
    prenom: "YANN",
    age: 20,
    identite: function(){
        return console.log(`Le nom du nouveau personnage est : ${this.nom} ${this.prenom} `);
    }
} 
console.log(` l'age du personnage est: \n ${personnage.age}`);
personnage.identite();

//Creation avec le mot clé: "new"
let charactere = "je suis un charactere";
let chaine_charatere = new String("je suis un charactere");
console.log("la taille de charactere est: \n" + charactere.length + "\n" + "la taille de chaine_charactere est: \n" + chaine_charatere.length);

//Creation d'un objet à l'aide d'une fonction constructeur
function identite(n,p,a){
    this.nom = n,
    this.prenom = p,
    this.age = a
}

let romeo = new identite ("AGB", "YANN", 20);
let yann = new identite ("Kwassi", "AFANVI", 21);
let valentin = yann;
console.log(`le nom de yann actuellement est de : ${yann.nom}`);
valentin.nom = ryan;
console.log(`le no de yann actuellement est de : ${yann.nom}`);
/* console.log(romeo.prenom); */

//Creation d'un objet de type */

/*Les objets (un objet peut être vu comme un ensemble de proprietés et de méthodes) 
à savoir qu'il existe des objets natifs comme les objets de type string, boolean, array... */

moi ={
    nom : "AGB",
    prenom : "Yann",
    age : 25,
    
    identite : function(){
        return(
            "Nom :" + this.nom +
            "\n Prenom :" + this.prenom +
            "\n Age : " + this.age
        );
    }
}
console.log(moi.identite());



//objets natifs et valeurs primitives

let val_primitive = "je suis une valeur primitive"
let obj_natif = new String("je suis un objet primitif");

console.log(
    "Val_primitive :" + val_primitive.length +
    "\n Type of val_primitive:" + typeof(val_primitive) +
    "\n Val primitive uppercase :" + val_primitive.toUpperCase()
);

console.log(
    "obj_natif :" + obj_natif.length +
    "\n Type of obj_natif:" + typeof(obj_natif) +
    "\n obj_natif uppercase :" + obj_natif.toUpperCase()
);



//Création des objets avec le mot clé new, objet litteral et à partir d'une fonction constructeur (l'acces aux objets se fait par référence)

//mot clé new 
let identitee = new Object();

identitee.nom = "kodjo";
identitee.prenom = "SKM";
identitee.age = 21;

console.log("The identity who i create is : " + identitee.nom + " " + identitee.prenom + " " + identitee.age + "years old");

// fonction constructeur

function Id(n,p,a){
    this.nom = n,
    this.prenom = p,
    this.age = a
};

let jeff = new Id("AGB", "Jeff", 15);
console.log(jeff.nom);

/* Les méthodes de l'objet STRING: length; toLowerCase(); toUpperCase(); charAt(); indexOf(); 
lastIndexOf(); replace(...,...); slice(...,...); trim() */

//toLowerCase(); toUpperCase();

let texte = "J'apprends le JAVASCRIPT "
console.log(
    `\nTexte de base: ${texte},
    \n Texte en minuscule: ${texte.toLowerCase()},
    \n Texte en majuscule: ${texte.toUpperCase()}`
);

// charAt
console.log(` Voici le 1er caratère du texte : ${texte.charAt(0)}`);

//indexOf(); lastIndexOf;
console.log(` Voici la position du 1er caratère "J" du texte : ${texte.indexOf("J'",1)}`);
console.log(`Voici la position du dernier "J" du texte : ${texte.lastIndexOf("J")}`);

//replace(...,...) 
console.log(` Remplacement de JAVASCRIPT par " PHP" dans le texte : 
    ${texte.replace("JAVASCRIPT", "PHP")}`
);

//slice(...,...)
console.log(`Récupération d'une chaine de caratère à partir des positions spécifiées : 
    ${texte.slice(-11,-1)}`
);

//trim (suppression d'espace superflu)
console.log(`${texte.trim()}`);

/*  Les méthodes de l'objet Number: Number.MIN_VALUE, Number.Max_VALUE, Number.NaN, Number.toString()
    Number.toFixed(),Number.toPrecision(), Number.toExponential(), Number.parseInt(),parseFloat
*/
let positif = Number.MIN_VALUE;
let negative = Number.MAX_VALUE;
let negInf = Number.NEGATIVE_INFINITY;
let posInf = Number.POSITIVE_INFINITY;
let notNumber = Number.NaN;



console.log(
`Positif: ${positif} 
\n Negative: ${negative}
\n negInf: ${negInf}
\n posInf: ${posInf}`
);

let number = 10.04562;
console.log(
    `base number: ${number}
    \n number strignify: ${number.toString()}
    \n type of number strignify is: ${typeof(number.toString())}
    \n number fixed : ${number.toFixed(3)} 
    \n number precision: ${number.toPrecision(3)}
    \n number exponential: ${number.toExponential(3)}
    \n number transform in integer: ${parseInt(number)}
    \n number transform in float: ${parseFloat(number)}`
);

/* L'objet Array et les méthodes */
let prenoms = ['Jordan', 'Djilan', 'Karl', 'Jeff'];
let p ='';

for(let i=0; i<prenoms.length; i++){
    p += 'Prenom n°' + (i+1) + ':' + prenoms[i] + '\n';
}

console.log(p);

let aff ='';

let prenom = {
    prenom1 : 'Jordan',
    prenom2 : 'Djilan',
    prenom3 : 'Karl',
    prenom4 : 'Jeff'
};



for(let clef in prenom){
    aff += clef + ': '+ prenom[clef] + '\n' 
};
console.log("Voici les prénoms affichés à partir de l'objet prenom: \n" +aff);

/* Les méthodes de l'objet array: push(...)*/

//push();

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

let ajts = jours.push("Vendredi","Samedi");

for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

alert('Le tableau contient'+ ajts+ 'éléments \n'+ 'Nouvelles valeurs du tableau : \n'  + P);  */


//pop();

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

let suppr = jours.pop();

for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

alert('Nouvelles valeurs du tableau après suppression de  : \n' + suppr + '\n'  + P); */


//unshift

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

let ajtDebut = jours.unshift("Dimanche");

for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

alert('Nouvelles valeurs du tableau après ajout d\'un élément en début : \n' + '\n'  + P); */


//shift

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi','vendredi'], P = '';

let suppDebut = jours.shift();

for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

alert('Nouvelles valeurs du tableau après suppression : \n'+ suppDebut  + '\n'  + P); */

// sort(classement par ordre alphabétique), reverse 

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

jours.sort();
jours.reverse();


for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

alert('Nouvelles valeurs du tableau après classification et renversement : \n' + '\n'  + P); */


//slice

/* let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

let slice = jours.slice(1,3)

alert('Nouvelles valeurs du tableau après decoupage d\'une partie : \n' + '\n'  + slice); */


// splice(position, nbres elements à supprimer, ajouts )

let jours = ['lundi', 'mardi', 'mercredi','jeudi'], P = '';

let nouvTab = jours.splice(1,2,"dilurma");

for (let i = 0; i<jours.length; i++){
    P += 'Jour N°:' + (i+1) + ' ' + jours[i] + '\n';
}

console.log('Nouvelles valeurs du tableau après le splice : \n' + '\n'  + P);


//concat
let garçons = ["jeff", "jordan"];
let filles = ["gloria", "precious"];

let gf = garçons.concat(filles);
let fg = filles.concat(garçons);

console.log("Voici le tableau des garçons et des filles: \n"+ gf+ '\n' + 'Voici le tableau des filles et des garçons \n' + fg)

/*  L'objet Date et ses méthodes */

//Date litterale ou timestampsunit(nbre de millisecondes écoulées depuis le 19 Janvier 1970)

let dateLit =  Date();
let dateMill = Date.now();

console.log(
    `Date litterale : ${dateLit} \n 
    Date timeStamp : ${dateMill}`
);

/* Les méthodes de l'objet Date; les getteurs et les setteurs */

let d = new Date;

let dms = d.getTime();
let fullYear = d.getFullYear();
let date = d.getDate();
let day = d.getDay();
let month = d.getMonth();

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let milliseconds = d.getMilliseconds();

console.log(
    "Aujourd'hui on est le : \n"+ date +"/" + month +"/" + fullYear + "\n" +
    "Il est : \n" + hours +":"+ minutes +":"+ seconds+":"+ milliseconds
);


let mois = ['Janvier','Février','Mars','Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre','Octobre','Novvembre','Décembre'];
let jourSemaine = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

console.log(
    "Aujourd'hui c'est le \n" + jourSemaine[day]+" "+ date+" "+ mois[month]+" "+ fullYear+"\n Et il est"+":"
    + hours+":"+minutes+":"+seconds+":"+milliseconds
)

/* L'objet math et ses méthodes */
//Pas de constructeur pour ce objet donc on ne peut pas créér d'objet de ce type et ses méthodes s'appliquent à lui meme

//random
let x = Math.random()*1000;
//round
let xArr = Math.round(x);

let y = Math.random()*1000;

console.log(
    "Valeur de x:" + x+ "\n"+
    "Valeur de y: "+ y + "\n" +
    "Valeur arrondie de x:" + xArr
);
 
//floor ceil
let valArrDefaut = Math.floor(x);
let valArrExces =Math.ceil(x);

console.log(
    "Valeur arrondie de x de base: " + x + "\n"+
    "Valeur arrondie de x par defaut: " +valArrDefaut+ "\n"+
    "Valeur arrondie de x par exces: " +valArrExces
);

// min et max (plus petit et plus grand)

let min = Math.min(12,-10,20,40,-100);
let max = Math.max(12,-10,20,40,-100);

console.log(
    "Valeur la plus petite:"+ min +"\n"+
    "Valeur la plus grande:"+ max
);

//sqrt, pi, power, 

let a = 10;
let b = 2;

let power = Math.pow(a,b);
let sqrt = Math.sqrt(a);
let PI = Math.PI;
let cos = Math.cos(a);
let sin = Math.sin(a);

console.log(
    "Valeur de a exposant b:" + power + "\n"+
    "Valeur de racine carré de a:" + sqrt + "\n"+
    "Valeur de PI:" + PI+
    "Valeur de cosinus de a:" + cos + "\n" +
    "Valeur de sinus de a:" + sin  
);