import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventHandlingexamples from './components/EventHandlingexamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <EventHandlingexamples/>
    </>
  )
}

export default App
