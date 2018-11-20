import React from 'react'

const Btn = (props) =>
    (
        <button onClick={()=> alert('alert')}>
            {props.label}
        </button>
    )

export default Btn