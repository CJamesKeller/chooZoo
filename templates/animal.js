var html = require('choo/html')

module.exports = function (onclick, animal, i) {
  var type = animal.type
  var x = animal.x
  var y = animal.y

  return html`
    <img src="http://choo-animals.glitch.me/assets/${type}.gif" style="left: ${x}px; top: ${y}px;" id=${i} onclick=${onclick}>
  `
}
