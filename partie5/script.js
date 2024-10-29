let p2 = document.querySelectorAll('p')[1];

/* p2.addEventListener('click', textChange);

function textChange(){
    this.innerHTML='<strong>Bravo tu as cliqué</strong>'
    this.style.color='gray'
}; */

/* p2.addEventListener("click", Message1);
p2.addEventListener("click", Message2);

function Message1(){
    alert("premier message")
};

function Message2(){
    alert("Deuxième message")
};
 */

/* exécution des évènements mouseover, mousedown et leur reset */

p2.addEventListener('mouseover', Fonction1);
p2.addEventListener('mouseout', Reset1);
p2.addEventListener('mousedown', Fonction2);
p2.addEventListener('mouseup', Reset2);

function Fonction1(){
    this.innerHTML= 'Fais un appui long dès à présent'
    this.style.backgroundColor = 'orange'
}

function Reset1(){
    this.innerHTML= 'Passez sur moi'
    this.style.backgroundColor = ''
}


function Fonction2(){
    this.innerHTML= 'Félicitation pour ton appuis long'
    this.style.color = 'green'
    this.style.fontWeight='bold'
    this.style.fontSize='50px'
}

function Reset2(){
    this.innerHTML= 'Passez sur moi'
    this.style.color = ''
    this.style.fontWeight=''
    this.style.fontSize=''
}

/* La propagation des évènements à savoir les phases de capture et de bouillonement*/

let b = document.body;
let div = document.querySelector('div');
let p = document.querySelectorAll('p')[2];
let strong = document.querySelector('strong');

/* Mise en place du déclenchement de strong et div 
dans la phase de capture et classement du déclenchement des évènements qui est false par défaut */

b.addEventListener('click', bodyText);

function bodyText(){
    console.log("texte du body")
};

div.addEventListener('click', textDiv, true);

function textDiv(){
    alert("text Div")
};

p.addEventListener('click', textP);

function textP(){
    alert('text P')
};

strong.addEventListener('click', strongText, true);

function strongText(){
    alert("text du strong")
};

// si je clique sur strong: div, strong,p,body
//si je clique sur p: div, p, body
//si je clique sur div: div, body
//si je clique sur body: body 


/* L'objet Event et ses méthodes*/

let h2 = document.getElementById('event');

h2.addEventListener('click', h2Function, true);

function h2Function (event){
    this.innerHTML = '<strong> voila le déclencheur de cet évènement: </strong>' + event.target+ '\n'+
    'Voilà l\'évènement déclenché: '+ event.currentTarget +
    'voila le type de l\'évènement :' + event.type
};

let divStopPropagation = document.querySelectorAll('div')[1];

divStopPropagation.addEventListener('click', stopPropagation, true);

function stopPropagation(event) {
    console.log('arret de la propagation');
    /* event.stopPropagation(); */
    /* event.preventDefault(); */
};



