import {createStore} from 'redux'

const ADD = "ADD"
const DELETE = "DELETE"

const addFunc = text => {
    return {
        type : ADD,
        text : text,
        id : Date.now()
    }
}

const deleteFunc = id => {
    return {
        type : DELETE,
        id : Date.now()
    }
}

const reducer = (state=[], action) => {
    switch(action.type){
        case ADD:
            return [{text : action.text, id : action.id}, ...state]
        case DELETE:
            return state.filter(deletedList => deletedList.id !== action.id)
        default : 
            return state
    }
}

const store = createStore(reducer)

export default store

export const actionTrigger = {
    addFunc,
    deleteFunc
}