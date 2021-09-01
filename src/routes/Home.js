import React, {useState} from 'react'
import {connect} from 'react-redux'
import {actionTrigger} from '../store'
import Dolistview from '../components/Dolistview'

function Home({doList, addFunc}) {
    //console.log(props)
    const [text, setText] = useState("")
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e){
        e.preventDefault()
        addFunc(text) //call dispatch logic by specific function
        setText("")
    }

    return(
    <div>
        <h1>TO DO LIST</h1>
        <form onSubmit={onSubmit}>
        <input type="text" value = {text} onChange={onChange}/>
        <button>LIST ADD</button>
        </form>
        <ul>{doList.map(doListToView => <Dolistview key={doListToView.id} {...doListToView} />)}</ul>
    </div>
    )
}

function mapStateToProps(state) {
    //console.log(state, ownProps)
    return {doList : state}
}

function mapDispatchToProps(dispatch){
    return {
        addFunc : (text) => dispatch(actionTrigger.addFunc(text))
        //you can only use dispatch(action) structure, when you give dispatch with action aruguments.
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)