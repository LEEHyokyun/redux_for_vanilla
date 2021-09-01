import {createStore} from 'redux'

const ADD = "ADD"
const DELETE = "DELETE"

export const addFunc = text => {
    return {
        type : ADD,
        text
    }
}

export const deleteFunc = id => {
    return {
        type : DELETE,
        id
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