import { Server } from "./server";
const cluster = require('cluster');
const os = require('os');
const { spawn } = require('child_process');
const child = spawn('pwd');

let server =  new Server().app;
let port = 3000;



// child.on('exit', function (code, signal) {
//     console.log('child process exited with ' +
//                 `code ${code} and signal ${signal}`);
//   });

// if (cluster.isMaster) {
//     console.log(`Master PID ${process.pid} is running`);
  
//     // Get the number of available cpu cores
//     const nCPUs = os.cpus().length;
//     // Fork worker processes for each available CPU core
//     for (let i = 0; i < nCPUs; i++) {
//       cluster.fork();
//     }
  
//     cluster.on("exit", (worker, code, signal) => {
//       console.log(`Worker PID ${worker.process.pid} died`);
//     });
//   } else {
  
//     server.get("/", (req, res) => {
//       res.send("Node is Running...");
//     });
//     server.listen(port,()=>{
//         console.log(`Server Listen port :`,port);
//         console.log(`Worker PID ${process.pid} started`);
//     })
  
//   }

  server.get("/", (req, res) => {
      res.send("Node is Running...");
  });
  
  server.get("/home", (req, res) => {
    res.send("Wel come to home");
});


  server.listen(port,()=>{
    console.log(`Server Listen port :`,port);
    console.log(`Worker PID ${process.pid} started`);
})
