// Ejemplo de asincronismo en JavaScript
console.log('Inicio del programa');

// Simulando operaciones asincrónicas básicas con setTimeout
setTimeout(() => {
  console.log('setTimeout: Operación 1 completada después de 1s');
}, 1000);

setImmediate(() => {
  console.log('setImmediate: Esto se ejecuta después de las I/O callbacks');
});

process.nextTick(() => {
  console.log('nextTick: Prioridad máxima, ejecutado antes de cualquier macrotask');
});

// 1. Callbacks: Manejo básico
function loadDataCallback(id, callback) {
  console.log(`Callback: Cargando datos para ID: ${id}`);
  setTimeout(() => {
    callback(null, { id, name: `User ${id}` });
  }, 1500);
}

loadDataCallback(1, (err, user) => {
  if (err) {
    console.error('Error cargando datos:', err);
  } else {
    console.log('Callback: Datos cargados:', user);

    // Ejemplo de Callback Hell
    loadDataCallback(2, (err, user2) => {
      if (err) {
        console.error('Error cargando datos:', err);
      } else {
        console.log('Callback: Datos cargados para ID 2:', user2);

        loadDataCallback(3, (err, user3) => {
          if (err) {
            console.error('Error cargando datos:', err);
          } else {
            console.log('Callback: Datos cargados para ID 3:', user3);
          }
        });
      }
    });
  }
});

// 2. Promises: Simplificando el manejo de asincronismo
function loadDataPromise(id) {
  console.log(`Promise: Cargando datos para ID: ${id}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject('ID no válido');
      } else {
        resolve({ id, name: `User ${id}` });
      }
    }, 1000);
  });
}

loadDataPromise(1)
  .then((user) => {
    console.log('Promise: Datos cargados:', user);
    return loadDataPromise(2); // Encadenar otra operación asíncrona
  })
  .then((user2) => {
    console.log('Promise: Datos cargados para ID 2:', user2);
    return loadDataPromise(3); // Encadenar otra operación asíncrona
  })
  .then((user3) => {
    console.log('Promise: Datos cargados para ID 3:', user3);
  })
  .catch((error) => {
    console.error('Promise: Error cargando datos:', error);
  });

// 3. Async/Await: Más legible y fácil de manejar
async function loadAllData() {
  try {
    console.log('Async/Await: Iniciando carga de datos...');
    const user1 = await loadDataPromise(1);
    console.log('Async/Await: Datos cargados:', user1);

    const user2 = await loadDataPromise(2);
    console.log('Async/Await: Datos cargados para ID 2:', user2);

    const user3 = await loadDataPromise(3);
    console.log('Async/Await: Datos cargados para ID 3:', user3);

    console.log('Async/Await: Carga completa');
  } catch (error) {
    console.error('Async/Await: Error cargando datos:', error);
  }
}

loadAllData();

// Final del programa
console.log('Fin del programa');
