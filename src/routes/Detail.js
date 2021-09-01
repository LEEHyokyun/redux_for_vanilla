import React from 'react'
import {connect} from 'react-redux'

function Detail({state, ownProps}) {
    const {match : {
        params : {
            id
        }
    }} = ownProps

    console.log(id, "By ownProps")

    const idByState = state.find(element => element.id === Number(id))
    console.log(idByState.id, "By state")
    

    console.log(state, ownProps, 'THIS IS after RENDERING : RENDERING logic')
    return (
        <>
        <h2>{ownProps? id : null}</h2>
        <h3>CREATED AT : {ownProps? id : null}</h3>
        </>
    )
}

function mapStateToProps(state, ownProps){
    console.log(state, ownProps, 'THIS IS BEFORE RENDERING : connection logic')
    return {
        state : state,
        ownProps : ownProps
    }
}

export default connect(mapStateToProps) (Detail)