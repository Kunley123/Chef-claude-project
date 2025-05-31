import React from 'react'
import './App.css'
import Header from './claude-components/Header.jsx'
import Main from './claude-components/Main.jsx'
import Fragment from 'react';
import Example from './examples-component/Example.jsx';
import Practise from './examples-component/Practise.jsx';
import Form from './components/Form.jsx';

function App() {

  return (
    <>
      <Header />
      <Main />
      <Example />
      <Practise />
      <Form />
    </>
  )
}

export default App