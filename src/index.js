import {createStore} from 'redux'

const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state = [], action) => {
  console.log(action)
  switch(action.type){
    case ADD_TODO : return [{ text : action.text, id : action.id }, ...state]
    case DELETE_TODO : return state.filter(deletedList => deletedList.id !== Number(action.id))
    default : return state
  }
}

const onSubmit = e => {
  e.preventDefault()

  const toDO = input.value
  input.value = ""

  store.dispatch({type : "ADD_TODO", text : toDO, id: Date.now()})
}

form.addEventListener("submit", onSubmit)

const store = createStore(reducer)

const paintTextToView = () => {
  const lists = store.getState()
  ul.innerHTML = ""

  lists.forEach(listItem => {
    const li = document.createElement("li")
    const btn = document.createElement("button")

    li.id = listItem.id
    li.innerText = listItem.text
    ul.appendChild(li)
    
    btn.innerText = "DELETE the list"
    btn.addEventListener("click", (e) => {
      const id = e.target.parentNode.id
      store.dispatch({ type : "DELETE_TODO", id })
    })
    li.appendChild(btn)
  })
}

store.subscribe(paintTextToView)





