import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Route1 from './Route1'
import Route2 from './Route2'
import Route3 from './Route3'


const App = (props) =>
  (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/route-1" exact={true} component= {Route1}></Route>
          <Route path="/route-2" exact={true} component= {Route2}></Route>
          <Route path="/route-3" exact={true} component= {Route3}></Route>
          
        </div>
      </BrowserRouter>
    </div>
  )


export default App


