var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);

  function createText (text) {
      var textNode = document.createTextNode(text)
      return textNode 
  }

  function createEl (el, text) {
      var newEl = document.createElement(el); 
      newEl.appendChild(text)
      return newEl
  }

  var newMessage = createEl('li', createText(`${message.from}: ${message.text}`))

  var list = document.getElementById('messages'); 
  
  list.appendChild(newMessage); 

  console.log(`${message.from}`)
});

socket.emit('createMessage', {
    from: 'Monique', 
    text: 'Hi'
}, function (data) {
    console.log('Got It!', data); 
}); 

var form = document.getElementById('message-form')

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    socket.emit('createMessage', {
        from: 'User', 
        text: document.getElementById('message').value
    }, function () {

    }); 
})




