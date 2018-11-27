/**
    封装socket.io,为了获取server以便监听.
 */
var socketio = {};
var socket_io = require('socket.io');
socketio.getSocketio = function(server){
    var io = socket_io.listen(server);
    io.sockets.on('connection', function (socket) {
        console.log('连接成功');
        // 客户端监听
        socket.on('post',function(req){
            // 同页面信息传递
            socket.emit('send', {data: req});
            // 跨页面信息传递
            socket.broadcast.emit('send', {data: req});
        })
    })
};

module.exports = socketio;
