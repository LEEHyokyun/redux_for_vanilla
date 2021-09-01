import {createStore} from 'redux'
import { createAction } from '@reduxjs/toolkit'

const addFunc = createAction("ADD")
const deleteFunc = createAction("DELETE")

//console.log(addFunc, deleteFunc)
//console.log(addFunc(), deleteFunc())

const reducer = (state=[], action) => {
    switch(action.type){
        case addFunc.type:
            console.log(action)
            return [...state, {text : action.payload, id : Date.now()}]
        case deleteFunc.type:
            return state.filter(deletedList => deletedList.id !== action.payload)
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