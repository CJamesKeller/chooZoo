var choo = require('choo')
var main = require('./templates/main')
var app = choo()

app.use(function (state, emitter) {
  state.animals = [
    {type: 'lion', x: 200, y: 100},
    {type: 'crocodile', x: 50, y: 300}
  ]

  emitter.on('addAnimal', function (data) {
    var animals = ['crocodile', 'koala', 'lion', 'tiger', 'walrus']

    var type = Math.floor(Math.random() * 5)
    var x = data.x
    var y = data.y

    var obj = {type: animals[type], x: x, y: y}
    state.animals.push(obj)

    emitter.emit('render')
  })

  emitter.on('removeAnimal', function (i) {
    state.animals.splice(i, 1)
    emitter.emit('render')
  })
})

app.route('/', main)
app.route('/filter/:type', main)

app.mount('div')
