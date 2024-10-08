const http = require('http');
const PORT = 8082;

const server = http.createServer((req,res)=>{
   res.writeHead(200, { 'content-type' : 'terxt/html'});
   res.write('<h1>Hello</h1>');
   res.end();
})

server.listen(PORT, ()=>{
    console.log(`Server started on Port:${PORT}`);
})