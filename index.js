const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

io.on('connection', (socket) => {
    console.log('un user s\'est connecté');

    socket.on('disconnect',() => {
        console.log('un user s\'est déconnecté');
    })

    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg);
    });
});

server.listen(3000, () => {
    console.log('Running on port 3000');
});