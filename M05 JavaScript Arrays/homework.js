/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) { //1
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.shift();
}

function devolverUltimoElemento(array) { //1
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) { //1
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) { //1
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var res = array.map( (num)=>{
      return num+1;
   })
   return res;
}

function agregarItemAlFinalDelArray(array, elemento) { //1
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) { //1
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) { //1
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabrasConcatenadas = palabras.join(' ');
   return palabrasConcatenadas;
}

function arrayContiene(array, elemento) { //2
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var contiene = array.includes(elemento);
   return contiene;
}

function agregarNumeros(arrayOfNums) { //1
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var res = 0;
   arrayOfNums.forEach(num => {
      res += num;
   });
   return res;
}

function promedioResultadosTest(resultadosTest) { //1
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var res = 0;
   resultadosTest.forEach(num => {
      res += num;
   });
   res = res/resultadosTest.length;
   return res;
}

function numeroMasGrande(arrayOfNums) { //1
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var res = 0;
   arrayOfNums.forEach(num => {
      if (num>res){
         res = num;
      }
   });
   return res;
}

function multiplicarArgumentos() { //1
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0){
      return 0;
   }
   else if (arguments.length ===1) return arguments[0];
   var res = 1;
   for (var i = 0; i<arguments.length ; i++){
      res *= arguments[i];
   }
   return res;
}

function cuentoElementos(array) { //1
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var res = 0;
   array.forEach((num)=>{
      if (num>18){
         res++;
      }
   })
   return res;
}

function diaDeLaSemana(numeroDeDia) { //2
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia===1 || numeroDeDia ===7){
      return 'Es fin de semana';
   }
   else return 'Es dia laboral';
}

function empiezaConNueve(num) { //2
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var test = num.toString();
   var numeros = test.split('');
   test = numeros.shift();
   if (test==9) return true;
   else return false;
}

function todosIguales(array) { //2
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var test = array[0];
   var res = array.every((num) => {
         return num == test;
   })
   return res;
}

function mesesDelAño(array) { //2
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];
   
   array.map((mes)=> {
      if (mes == 'Enero' || mes =='Marzo' || mes == 'Noviembre' ){
         meses.push(mes);
      }
   })
   if (meses.length===3) return meses;
   else return 'No se encontraron los meses pedidos';
}

function tablaDelSeis() { //1
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var res = [];
   for (var i = 0 ; i<11;i++){
      res.push(i*6);
   }
   return res;
}

function mayorACien(array) { //1
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var res = [];
   array.forEach((num)=>{
      if (num>100){
         res.push(num);
      }
   })
   return res;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) { //2
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arreglo = [];
   for (i=1;i<=10;i++){
      num+=2;
      arreglo.push(num);
      if (num===i){
         return 'Se interrumpió la ejecución';
         break;
      }
   }
   return arreglo;

}

function continueStatement(num) { //1
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arreglo = [];
   for (i=1;i<=10;i++){
      if (i===5){
         continue;
      }
      num+=2;
      arreglo.push(num);      
   }
   return arreglo;
}
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
