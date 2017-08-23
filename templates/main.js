var html = require('choo/html')
var animal = require('./animal')

module.exports = function (state, emit) {
  return html`
    <div class="container">
      <div class="grass">
        <img src="http://choo-animals.glitch.me/assets/bg.gif" onclick=${add} />
        ${state.animals.map(animalMap)}
      </div>
      <div class="controls">
        <ul class="filters">
          <li><a href="/">all</a></li>
          <li><a href="/filter/crocodile">crododiles</a></li>
          <li><a href="/filter/koala">koalas</a></li>
          <li><a href="/filter/lion">lions</a></li>
          <li><a href="/filter/tiger">tigers</a></li>
          <li><a href="/filter/walrus">walruses</a></li>
        </ul>
      </div>
    </div>
  `

  function animalMap (obj, i) {
    var type = state.params.type

    if (type && type !== obj.type) {
      return // nothing
    } else {
      return animal(remove, obj, i)
    }
  }

  function add (e) {
    var x = e.offsetX - 20
    var y = e.offsetY - 10

    emit('addAnimal', {x: x, y: y})
  }

  function remove (e) {
    var index = e.target.id
    emit('removeAnimal', index)
  }
}
