import React from 'react'

const names = ['ola', 'ala', 'zbyszek']

const App = (props) =>
  (
    <div>
      <ul>
        {
          names.map((name)=> <li key={name.toString()}>{name}</li>)
        }
      </ul>
    </div>
  )


export default App


