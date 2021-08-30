//Vanilla
import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const ADD = "ADD"
const MINUS = "MINUS"

const reducer = (state = 0, action) => {
  switch(action.type){
    case ADD : return state + 1
    case MINUS : return state - 1
    default : return state
  }
  //console.log(state)
  //return state
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