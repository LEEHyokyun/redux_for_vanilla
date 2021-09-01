import React, {useState} from 'react'
import {connect} from 'react-redux'

import addFunc from '../store'

function Home({doList, dispatch}) {
    //console.log(props)
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
         dispatch({type: "ADD", text: text, id : Date.now()})
        setText("")
    }

    return(
    <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={onSubmit}>
        <input type="text" value = {text} onChange={onChange}/>
        <button>LIST ADD</button>
        </form>
        <ul>{JSON.stringify(doList)}</ul>
    </div>
    )
}

function mapStateToProps(state) {
    //console.log(state, ownProps)
    return {doList : state}
}

function mapDispatchToProps(dispatch){
    return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)