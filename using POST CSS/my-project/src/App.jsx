import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1  className="text-3xl font-bold underline changeMultistyle">
        Testing tail wind css using post css
      </h1> <br /> <br />
      <h1 class="changeColor">Testing custom css</h1>
    </>
  )
}

export default App
