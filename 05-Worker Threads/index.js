const http = require('http');
const { Worker } = require('worker_threads');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/block') {
    // Simula una operación intensiva de CPU usando Worker Threads
    const worker = new Worker(`
      const { parentPort } = require('worker_threads');
      let sum = 0;
      for (let i = 0; i < 1e9; i++) {
        sum += i;
      }
      parentPort.postMessage(sum);
    `, { eval: true });

    worker.on('message', (result) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`Result: ${result}`);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port \${PORT}\`);
}   
