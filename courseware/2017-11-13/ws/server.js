const http=require('http');
const io=require('socket.io');

//1.http服务
const httpServer=http.createServer();
httpServer.listen(8080);

//2.ws服务
const wsServer=io.listen(httpServer);
wsServer.on('connection', sock=>{
  sock.on('a', function (n1,n2,n3,n4,n5){
    console.log(n1,n2,n3,n4,n5);
  });
});
