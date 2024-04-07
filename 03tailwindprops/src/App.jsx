import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Arvind",
    age:21
  }
  let newArr=[1,2,3]

  return (
    <>
      
      
  
      <h1>Taiwind test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="Arvind"/>
      
    </>
  )
}

export default App
