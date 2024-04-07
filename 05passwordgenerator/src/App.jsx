import { useState,useCallback} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setAllowed]=useState(false);
  const[password,setPassword]=useState("")
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@#$%^&*()-_+=[]{}~'"
    for (let i = 0; i <=array.length; i++) {
      let char=Math.floor(Math.random()*str.length+1 )
      pass =str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])


  return (
    <>
      
      <div classNmae="w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center'>Password generator</h1>
        <div classNmae="flex shadow rounded-lg overflow-hidden  mb-4">
          <Input
          type="text"
          value={password}
          classNmae="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          />
          </div>
          </div>
          </>
        
    
    
  )
}

export default App
