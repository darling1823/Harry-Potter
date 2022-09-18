import React from 'react'
import Main from './Components/Main/Main'
import Header from './Components/Header/Header'
import { GlobalStyle } from './Components/Header/Style'

const App = () => {
  return(
    <section>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </section>
  )
}

export default App