import {createStore} from 'redux'
import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

const addFunc = createAction("ADD")
const deleteFunc = createAction("DELETE")

//console.log(addFunc, deleteFunc)
//console.log(addFunc(), deleteFunc())

/*const reducer = (state=[], action) => {
    switch(action.type){
        case addFunc.type:
            console.log(action)
            return [...state, {text : action.payload, id : Date.now()}]
        case deleteFunc.type:
            return state.filter(deletedList => deletedList.id !== action.payload)
        default : 
            return state
    }
}*/

const reducer = createReducer([], {
    [addFunc] : (state, action) => {
        state.push({text : action.payload, id : Date.now()})
    }, //no return
    [deleteFunc] : (state, action) => state.filter(deletedList => deletedList.id !== action.payload)
    //return
})

const store = configureStore({reducer})

export default store

export const actionTrigger = {
    addFunc,
    deleteFunc
}