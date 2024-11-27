import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseEffectExamples from './components/UseEffectExamples'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseEffectExamples/>
    </>
  )
}

export default App
