import { useState } from 'react'
import MainContainer from './components/MainContainer'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex'>
        <List/>
        <MainContainer/>
      </div>
    </>
  )
}

export default App
