//alert("Ceci est affiché dans l'élément body");
console.log('coucou je m\'appelle kodjo makonou');
console.log(45);

/* Variables en javascript */
var x = 25;
var homme = true;
x+= 23;

// typeof() pour tester le type de valeur et '+' pour la concatenation
console.log(typeof(x)+":"+x);

//conditions if, if...else et if...else if...else
//utilisation de type of pour controler le type de valeur entré par l'utilisateur

//Les operateurs logiques &&, ||, !
let heure =18 , bon ="";

if (typeof(heure)=="number") {
    if(heure <=12){
        console.log("C'est le matin");
    }
    else if(heure>=12 && heure <=16){
        console.log("C'est l'apres-midi");
    }else
    console.log("C'est la soirée");
}
else{
    console.log("Entrer une valeur valide");
}

//Les conditions ternaires
bon = (heure<=16)? console.log("welcome"): "bonsoir";
console.log(bon);

//Instruction switch
let n = 18;

switch (n) {
    case 1:
        console.log("Vous avez eu une mauvaise note");
        break;
    case 18:
        console.log("Vous avez eu une bonne note");
        break;

    default:
        console.log("Entrer une valeur valide pour votre note");
}

//Les boucles do...while, while, for.

//Les fonctions natives(alert,prompt...)
//Creation de fonction (parametre et argument)
function multiplication(x,y){
    return x*y;
}
let mult = multiplication(5,10);
console.log(mult);

