
//fonction fléchée
function add(){
    return 2 + 4
};
console.log(add())

var add1 =()=>{
    return 2+4
}
console.log(add1())

let add2 = (n1,n2)=>(n1+n2)
console.log(add2(2,4))


//Spread operator

let colors = ['red', 'green', 'blue']

let colorAdd = colors.concat('pink')
console.log(colorAdd)

let newColors = [...colors,'green']
console.log(newColors)

//utilisation du mot clé let pour déclarer les variables en local

const prenom = 'julien'
let name = 'Yann'

if(1 === 1){
    let name = 'Jacob'
}
console.log(name)
prenom ='juice'

// template string
//destructuring

let person = {
    nom : 'jules',
    age : 12
}

let personnage =({nom,age})=>(
    console.log(`je me nomme ${nom} et j'ai ${age}`)
)
personnage(person)