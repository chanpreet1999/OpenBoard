const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const socketServer = require('socket.io')(httpServer);

app.use(express.static('activity'));

app.get('/home', function (req, res) {
    console.log('home');
})

socketServer.on('connection', (socket) => {
    console.log('Connection made');
    console.log(socket.id);

    socket.on( 'colorChange', function (color) {
        console.log('color changed to :'+ color);
        socket.broadcast.emit('rColorChange', color)
    } );
    socket.on('widthChange', function( width ){
        console.log('width change :'+width );
        socket.broadcast.emit( 'serverWidthChange', width );
    })
    socket.on( 'md', function(point){
        console.log(point);
        socket.broadcast.emit( 'onmd', point );
    } )
    socket.on( 'mm', function(point){
        console.log(point);
        socket.broadcast.emit( 'onmm', point );
        
    } )

});

httpServer.listen(3000, function (req, res) { //tcp => uniquely identify server on a machine
    console.log('server started at port 3000');
});