var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMsg', {
      from: 'david@test.com', 
      text: 'This is a new message'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMsg', function (msg) {
    console.log(msg)
});


