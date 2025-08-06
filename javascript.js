//Imprime todos los números entre 100 y 200 que sean divisibles por 3 o 7
//La suma de todos los números divisibles por 3 o 7 es:6322

let output = "";// Variable para almacenar el resultado
let sumaTodoslosnumeros = 0;// Variable para almacenar la suma de los números

for(let i = 100; i<= 200; i++){// Bucle que recorre los números del 100 al 200
	if( i % 3 == 0 || i % 7 == 0){// Comprueba si el número es divisible por 3 o 7
		output += `${i} `;// Añade el número al resultado
		sumaTodoslosnumeros += i;// Añade el número a la suma total
		// Aquí puedes realizar otras operaciones si lo deseas
	}else{
		output += `<span class='text-danger'>${i}</span>`;// Añade el número no divisible a la salida con un estilo diferente
	}
}
document.getElementById("output").innerHTML = output;// Muestra el resultado en el elemento con id "output"
console.log("La suma de todos los números divisibles por 3 o 7 es:" + sumaTodoslosnumeros);// Muestra la suma total en la consola