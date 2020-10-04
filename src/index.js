require('dotenv').config();
const app = require('./server');
const socket = require('socket.io');

const srv = app.listen(app.get('port'), () => console.log('Listening on port: ' + app.get('port')));

const io = socket(srv);

io.on('connection', (socket) => {
    //console.log('Socket connection succeded, with id: ' + socket.id);
    
    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    })

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    })
})