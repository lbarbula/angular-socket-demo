var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname + '/app'))

app.get('/', function(req, res){
  res.render('index')
})

io.on('connection', function(socket){
  console.log('A user has entered')
  socket.on('new-message', function(data){
    console.log('server data:', data);
    io.emit('recieve-message', data)
  })
})

http.listen('3000', function(){
  console.log('connected')
})
