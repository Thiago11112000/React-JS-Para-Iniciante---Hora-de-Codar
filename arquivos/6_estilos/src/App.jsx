import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StylesExamples from './components/StylesExamples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> Teste</h1>
     <StylesExamples/>
    </>
  )
}

export default App
