import React from 'react'
 import{useReducer} from "react"
let initialState = 0
const reducer = (state, { type, payload }) => {
    // console.log(state,action)
    switch (type) {
        case "INCREMENT": {
            return state + payload
        }
        case "DECREMENT": {
            return state - payload
        }
        default: {
            return state
        }
    }

}


const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div> 
            <div> {state}</div>

            <button onClick={() => dispatch({ type: "INCREMENT", payload: 100 })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>-</button>
        </div>
    )
}

export default UseReducer