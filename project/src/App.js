import React from 'react'

// npm install react-router-dom --save
import {
  BrowserRouter,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import Header from './Header'
import NotFound from './NotFound'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

      <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
