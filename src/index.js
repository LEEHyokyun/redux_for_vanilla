//Vanilla
import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const reducer = (state = 0, action) => {
  if(action.type === "ADD"){
    state = state + 1
  }
  if(action.type === "MINUS"){
    state = state - 1
  }
  //console.log(state)
  return state
}
const countStore = createStore(reducer)

const addHandler = () => {
  countStore.dispatch({type:"ADD"})
}

add.addEventListener("click", addHandler)

const minusHandler = () => {
  countStore.dispatch({type:"MINUS"})
}

minus.addEventListener("click", minusHandler)

const stateChanged = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(stateChanged)