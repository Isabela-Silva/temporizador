import { controls } from "./elements.js" // aqui tem uma const controls daquela section do html que pega todos os icones
import * as actions from './action.js' // tem o toggleRunning do data-action
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"
import state from './state.js'

export function registerControls() {
  controls.addEventListener('click', (event) => { // sempre que clicarmos nos botões vai acontecer algumas coisas
  const action = event.target.dataset.action // o action é o metodo que foi usado no html  
    if(typeof actions[action] != "function") { // se o tipo do actions for diferente de uma função então para a aplicação
      return
    }

    actions[action]() //indica que actions é um objeto (ou um módulo) e "toggleRunning" é uma chave desse objeto, ou seja, um nome que identifica uma propriedade ou função dentro do objeto actions.
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', (event) => { // blur -> quando sai do foco
    let time = event.currentTarget.textContent // essa é uma forma de pegar o texto do elemento
    time = time > 60 ? 60 : time // o time está maior que 60? 

    state.minutes = time // atualiza os minutes com o time
    state.seconds = 0 // não é possivel atualizar o seconds -> depois bora verificar isso aqui

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })


  
}
