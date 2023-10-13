import state from './state.js'
import * as el from './elements.js'
import * as action from './action.js' 
import { kichenTimer } from './sounds.js'

export function countdown(){
  clearTimeout(state.count)
  if(!state.isRunning) { // caso nao esteja rodando, entao para a aplicação
    return
  }

  let minutes = Number(el.minutes.textContent) // converte pra numero
  let seconds = Number(el.seconds.textContent)
  seconds-- // decrementa, diminui os segundos
  if( seconds < 0 ) {
    seconds = 59
    minutes--
  }
  if(minutes < 0 ) {
    // state.isRunning = false
    // document.documentElement.classList.remove('running')
    kichenTimer.play() // deu certo, mas tem um bug
    action.reset()
    return
    
  }
  updateDisplay(minutes, seconds) // atualiza a função
  // atenção sobre recursão -> ela precisa ser parada em algum momento
  state.countdownId = setTimeout(() => countdown(), 1000) // recursão => quando uma função é chamada dentro dela
  // significa que a cada 1 segundo a função vai ser chamada de novo!
} // lembrando que uma função que recebe uma função de volta se chama callback 
export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes // nem sempre vai ser passado o valor, ou seja quando for null ele vai pegar o valor do state
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0") // ele ta pegando o minutos do html e mudando pelo minuto declarado pelo usuário ou o minuto do state
  el.seconds.textContent = String(seconds).padStart(2, "0")
}