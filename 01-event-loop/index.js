// 01-event-loop/index.js

console.log('Start of the script');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback');
});

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('End of the script');
