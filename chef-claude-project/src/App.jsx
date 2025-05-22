import React from 'react'
import './App.css'
import Header from './claude-components/Header.jsx'
import Main from './claude-components/Main.jsx'
import Fragment from 'react';
import Example from './examples-component/Example.jsx';


function App() {

  return (
    <>
      <Header />
      <Main />
      <Example />
    </>
  )
}

export default App