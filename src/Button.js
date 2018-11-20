import React from 'react'

const Btn = ({label}) =>
    (
        <button onClick={()=> alert('alert')}>
            {label}
        </button>
    )

export default Btn