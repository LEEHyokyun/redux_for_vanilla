import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {actionTrigger} from '../store'

function Dolistview({text, deleteFunc, id}){
    return(
        <li>
            <Link to={`/${id}`}>{text}</Link>
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