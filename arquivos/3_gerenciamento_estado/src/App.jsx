import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateComponent from './components/UseStateComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseStateComponent/>
    </>
  )
}

export default App
