import {createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

/*
const addFunc = createAction("ADD")
const deleteFunc = createAction("DELETE")

const reducer = createReducer([], {
    [addFunc] : (state, action) => {
        state.push({text : action.payload, id : Date.now()})
    }, //no return
    [deleteFunc] : (state, action) => state.filter(deletedList => deletedList.id !== action.payload)
    //return
})
*/

const makeLists = createSlice({
    name : 'makeLists',
    initialState: [],
    reducers: {
        addFunc : (state, action) => {
            state.push({text : action.payload, id : Date.now()})
        },
        
        deleteFunc : (state, action) => state.filter(deletedList => deletedList.id !== action.payload)
    }
})

const store = configureStore({reducer : makeLists.reducer})

console.log(makeLists.actions)

export default store

export const {
    addFunc,
    deleteFunc
} = makeLists.actions