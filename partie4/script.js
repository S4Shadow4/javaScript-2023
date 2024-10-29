/* Navigation dans le DOM Html */

//parentNode
let para = document.querySelector(".p");
let div = para.parentNode;

div.style.backgroundColor = 'gray';

//childesNodes
let b = document.body;
let divSecondTime = b.childNodes[3];
let texte = divSecondTime.childNodes[1].firstChild.nodeValue;
//let texteContenu = texte.childNodes[0].nodeValue;
console.log(texte);

//firstChild,lastChild, nodeValue
let paras = document.querySelectorAll(".p")[1];

let texte1 = paras.firstChild;
let texte2 = paras.lastChild;

let innerTexte1 = texte1.nodeValue;
let innerTexte2 = texte2.childNodes[0].nodeValue;

console.log('contenu du premier élément:'+ innerTexte1+
    '\n' + 'contenu du deuxième élément: '+ innerTexte2 
); 

let titre = document.getElementById('titre');

let divs = titre.nextSibling.nextSibling;

/* divs.innerHTML = '<p> texte de remplacement</p>'; */


