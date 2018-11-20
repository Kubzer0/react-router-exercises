import React from 'react'

const Btn = ({label, alertText}) =>
    (
        <button onClick={()=> alert(alertText)}>
            {label}
        </button>
    )

export default Btn