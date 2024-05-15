/*Ejercicios Destructuring*/
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

/*Montrar el usuario Ana*/
const {name,email}= empleados
console.log (empleados [1])

/*Monstrar el emial de Luis*/
const [luis] = empleados;
const { email: emailLuis } = luis;
console.log(emailLuis);

const pokemon = {
  name: "Bulbasaur",
  type: "grass",
  ability: {
      "primary": "Overgrow",
      "hidden": "Chlorophyll"
  },
  stats: {
      hp: 45,
      attack: 49,
      deffense: 59,
      speed: 45
  },
  moves: [
      "Growl", "Tackle", "Vine Whip", "Razor Leaf"
  ]
}

const { name: nombre, type, moves } = pokemon
console.log ('nombre')
console.log (nombre)
console.log (type)
console.log ('moves:', pokemon.moves[1])


/*Ejercicios Spread/rest*/

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
      "primary": "Static",
      "hidden": "Lightning rod"
  },
  stats: {
      hp: 35,
      attack: 55,
      deffense: 40,
      speed: 90
  },
  moves: [
      "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ],
}

const mergeObjets = {...pikachu, ...pokemon }
console.log (mergeObjets)


/*Recibe cualquier cantidad y lo suma*/ 

function sumEveryOther(...sumEveryOther){
  let suma=0
  for (const arg of sumEveryOther) { 
    suma += arg
   }
  return (suma)
}
console.log (sumEveryOther (6,8,2,3,1));
console.log (sumEveryOther (11,3,12));


/*Reciba numero strigns y retornar la suma de los numeros*/
function addOnlyNums(...args) {
  let suma = 0
  for (let i= 0; i < args.length; i++ ) {
    if (typeof args[i] === "number" ) {
      suma += args[i]
    }
  }
  return suma
}

console.log (addOnlyNums (1,'perro',2,4))

/*Reciba cualquier argumento y devuelva el numero de arguntos recibidos*/
function countTheArgs (...countTheArgs) {
  return countTheArgs.length
 }
console.log (countTheArgs('gato', 'perro'))
console.log (countTheArgs('gato', 'perro', 'pollo', 'oso'))


/*Recibe dos arrays como argumentos y solo devuelva un array combinandos de los dos*/
function comnbienTwoArrays(array1, array2){
  return [...array1,...array2]

}
console.log (comnbienTwoArrays (['patata', 'tomate', 'lechuga'],[1, true, 'chocolate']))




