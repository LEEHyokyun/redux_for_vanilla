import React from 'react'
import {connect} from 'react-redux'

import {actionTrigger} from '../store'

function Dolistview({text, deleteFunc}){
    return(
        <li>
            {text}
            <button onClick={deleteFunc}>DELETE</button>
        </li>
    )
}

function mapDispatchToProps(dispatch, ownProps){
    //console.log(ownProps)
    
    return {
        
        deleteFunc : () => dispatch(actionTrigger.deleteFunc(ownProps.id))
        //you can only use dispatch(action) structure, when you give dispatch with action aruguments.
    }
}

export default connect(null, mapDispatchToProps) (Dolistview)