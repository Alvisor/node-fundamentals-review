const fs = require('fs');

console.log('1) Start of the script');

/**
 * setTimeout(callback, 0) programa la ejecución del callback 
 * en la fase "timers" del Event Loop (macrotask), 
 * después de que finalice la operación actual y las microtasks pendientes.
 */
setTimeout(() => {
  console.log('5) setTimeout callback');
}, 0);

/**
 * setImmediate(callback) se programa para la fase "check" del Event Loop,
 * que sucede justo después de la fase "poll" donde se manejan I/O callbacks.
 */
setImmediate(() => {
  console.log('6) setImmediate callback');
});

/**
 * process.nextTick(callback) se considera una "microtask".
 * Se ejecuta al final de la misma fase del Event Loop en la que se llamó, 
 * antes de pasar a la siguiente fase de macrotask.
 */
process.nextTick(() => {
  console.log('3) nextTick callback');
});

/**
 * Aquí hacemos una operación de I/O (leer un archivo) 
 * para ver cuándo se ejecuta su callback dentro del Event Loop.
 * Este callback se manejará en la fase "poll" una vez que el archivo 
 * esté leído, antes de la fase "check" (donde corre setImmediate).
 */
fs.readFile('./01-event-loop/dummy.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('4) fs.readFile callback -> Archivo leído:', data);
});

console.log('2) End of the script');
