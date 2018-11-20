import React from 'react'

import Btn from './Button'

const names = ['ola', 'ala', 'zbyszek']

const namesList = names.map((name) => <li key={name.toString()}>{name}</li>)
const App = (props) =>
  (
    <div>
      <ul>
        {namesList}
      </ul>
      <Btn
        label = "kliknij mnie"
        onClickHandler={() => alert('tekst')}
      />
    </div>
  )


export default App


