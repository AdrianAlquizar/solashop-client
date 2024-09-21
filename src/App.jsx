import { useState } from 'react'
import Header from './components/header'
import Home from './pages/Home'

function App() {
  {/*const [count, setCount] = useState(0)*/}

  return (
    <>
      <main className="container mx-auto p-4">
          <Home />
      </main>
    </>
  )
}

export default App
