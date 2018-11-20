import React from 'react'

const Btn = ({label, onClickHandler}) =>
    (
        <button onClick={onClickHandler}>
        {label}
        </button>
    )

export default Btn