import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='justify-center mx-60 bg-slate-400'>Test MyApp</h1>
      <div className='mt-64 text-5xl'>
         <p>test</p>
      </div>
    </>
  )
}

export default App
