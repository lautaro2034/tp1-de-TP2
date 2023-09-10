const fs = require("fs");

function leerArchivoComoString(rutaArchivo) {
  try {
    const contenido = fs.readFileSync(rutaArchivo, "utf-8");
    return contenido;
  } catch (error) {
    throw new Error("No se pudo leer el archivo");
  }
}

function escribirTextoEnArchivo(rutaArchivo, texto, flag) {
  try {
    if (flag) {
      fs.writeFileSync(rutaArchivo, texto);
    } else {
      throw new Error("El archivo no existe");
    }
  } catch (error) {
    throw error;
  }
}

console.log(" ");
console.log("String a Array de numeros");
console.log(" ");
function transformarStringEnArrayDeNumeros(texto, separador) {
  const partes = texto.split(separador);
  const numeros = [];

  partes.forEach((parte) => {
    const numero = parseFloat(parte);
    if (!isNaN(numero)) {
      numeros.push(numero);
    }
  });

  return numeros;
}

try {
  const contenidoArchivo = leerArchivoComoString("index.txt");
  console.log(contenidoArchivo);

  escribirTextoEnArchivo("index.txt", "Hola, mundo!", true);

  const texto = "10,20,30,abc,40,50";
  const numeros = transformarStringEnArrayDeNumeros(texto, ",");
  console.log(numeros);
} catch (error) {
  console.error(error.message);
}
console.log(" ");
console.log("Array de numeros a String");
console.log(" ");

function transformarArrayDeNumerosAUnSoloString(array, separador) {
  if (!Array.isArray(array)) {
    throw new Error("El primer argumento debe ser un array");
  }

  if (typeof separador !== "string") {
    throw new Error("El segundo argumento debe ser un string");
  }

  return array.join(separador);
}

// Ejemplo de uso
const miArray = ["10", "20", "30", "40", "50"];
const separador = ",";
const resultado = transformarArrayDeNumerosAUnSoloString(miArray, separador);
console.log(resultado);

console.log(" ");
console.log(" combinacion de dos Arrays");
console.log(" ");

function combinarDosArrays(array1, array2) {
  const combinedArray = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combinedArray.push(array1[i]);
      i++;
    } else if (array2[j] < array1[i]) {
      combinedArray.push(array2[j]);
      j++;
    } else {
      combinedArray.push(array1[i]);
      i++;
      j++;
    }
  }

  while (i < array1.length) {
    combinedArray.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    combinedArray.push(array2[j]);
    j++;
  }

  return combinedArray;
}

// Ejemplo de uso
const array1 = [1, 5, 10];
const array2 = [2, 3, 8, 11];
const conbinacion = combinarDosArrays(array1, array2);
console.log(conbinacion); 

console.log(" ");
console.log(" combinacion de N Arrays");
console.log(" ");

function combinarNArrays(arrays) {
  const combinedArray = [];
  const indices = new Array(arrays.length).fill(0);

  while (indices.some((index, arrayIndex) => index < arrays[arrayIndex].length)) {
    let smallestValue = Infinity;
    let smallestIndex = -1;

    for (let i = 0; i < arrays.length; i++) {
      if (indices[i] < arrays[i].length && arrays[i][indices[i]] < smallestValue) {
        smallestValue = arrays[i][indices[i]];
        smallestIndex = i;
      }
    }

    combinedArray.push(smallestValue);
    indices[smallestIndex]++;
  }

  return combinedArray;
}

// Ejemplo de uso
const arrays = [[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]];
const n = combinarNArrays(arrays);
console.log(n); 
