var body = document.querySelector('body')
// var marioRun = document.querySelector('#run');
var marioStand = document.querySelector('.mario')
var value = 0
var interval

//////////////////////////////////////////////// Right Key - Running

function running(event) {
  if (event.keyCode === 39) {
    marioStand.classList.add('running')

    interval = setInterval(moveBackground, 10)
    counter -= 5
  }
}

body.addEventListener('keydown', running)

//////////////////////////////////////////////// Right Key - stop runnig

function stopRunning(event) {
  marioStand.classList.remove('running')
  marioStand.classList.remove('reverse')
  clearInterval(interval)
}

body.addEventListener('keyup', stopRunning)

///////////////////////////////////////////////// Move Background

function moveBackground(event) {
  body.style.backgroundPositionX = value + 'px'
}

//////////////////////////////////////////////// Left kay

function reverse(event) {
  if (event.keyCode === 37) {
    marioStand.classList.add('reverse')
    marioStand.classList.add('running')

    interval = setInterval(moveBackground, 10)
    counter += 5
  }
}

body.addEventListener('keydown', reverse)

////////////////////////////////////////////  Jumping

function jumping(event) {
  if (event.keyCode === 32) {
    console.log('aa')

    static.classList.add('jump')
  }
}
body.addEventListener('keydown', jumping)

function landing(event) {
  static.classList.remove('jump')
}
body.addEventListener('keyup', landing)
