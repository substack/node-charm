var charm = require('../')(process, {
  colors: false,
  format: false
})

charm
  .position(0, 0)
  .background('red')
  .foreground('white')
  .write('no format. no colors.')
  .move(10, 10)
  .write('by demand.')
