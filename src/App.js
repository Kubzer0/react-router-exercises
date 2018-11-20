import React from 'react'

import Btn from './Button'

const names = ['ola', 'ala', 'zbyszek']

const namesList = names.map((name)=> <li key={name.toString()}>{name}</li>)
const App = (props) =>
  (
    <div>
      <ul>
          {namesList}
      </ul>
      <Btn
      label="click me"
      alertText= "clicked"
      />
    </div>
  )


export default App


