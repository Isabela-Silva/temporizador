import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
  state.minutes = minutes // disk ta atualizando o state
  state.seconds = seconds // sendo assim, então ele ta 0,6
  
  timer.updateDisplay()

  events.registerControls() // esse é o events que importamos, e o registerControls é apenas uma das funções do events.
 // então poderia ser events.isMute()

  events.setMinutes() // novo evento que estamos trabalhando
}