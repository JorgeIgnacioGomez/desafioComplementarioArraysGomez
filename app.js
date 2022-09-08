//FILTER!!!!
//en el primer Array creado llamado personas, hago que por consola muestre solamente a quienes sean mayores de edad, a través de un FILTER.
const personas = [
    { nombre: 'Carlos', edad: 20},
    { nombre: 'Sandra', edad: 25},
    { nombre: 'Franco', edad: 15},
    { nombre: 'María', edad: 17},
    { nombre: 'Juan', edad: 40}
];

const mayores = personas.filter(p => p.edad >=18);

console.log(mayores);

//----------------------------------------------------------------------

//PUSH!!!!
//En el segundo ejemplo llamado "array", creo el mismo vacío, para luego agregarle mediante un PUSH, sus respectivos valores, todo se verá reflejado en consola!.
let array = [];

let obj = {
    name: 'Jorge',
    age: 30,
    role: 'admin'
};
let obj2 = {
    name: 'Ignacio',
    age: 25,
    role: 'user'
};

array.push(obj, obj2);

console.log(array);

//----------------------------------------------------------------------

//SLICE!!!! Elimino un Elemento.
//Declararamos un Array.
let mascotas = ['Wolf', 'Tina', 'Boni'];

//Eliminamos el último elemento a través de un SLICE
mascotas = mascotas.slice(0,-1)

//Mostramos resultado por consola!.
console.log('Mascotas', mascotas); //Muestra Tom y Ginger

//-----------------------------------------------------------------------