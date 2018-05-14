import './phaser/phaser.min'
// var Phaser = require('./phaser.min')

// var width = Math.max(document.documentElement.addclientWidth, window.innerWidth || 0)
// var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

[document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
].forEach(function(item, i, arr){
  alert
})
alert('Высота с учетом прокрутки: ' + scrollHeight)

let config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  zoom: 1,
  scene: {
    preload: preload,
    create: create
  }
}

var game = new Phaser.Game(config)

function preload () {
  this.load.image('logo', 'assets/img/logo.png')
}

function create () {
  var logo = this.add.image(400, 150, 'logo')

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1
  })
}
