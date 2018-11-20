import React from 'react'

const DispalyParam = (props)=>(
    <div>
    {props.match.params.uid}
    </div>
)

export default DispalyParam