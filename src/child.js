import React from 'react'
function Child(props) {
    return (
        <div>
            <h1>This is {props.name}</h1>
            <h1>here is the {props.content}</h1>
        </div>
    )
}
export default Child