import { useState } from 'react'
import Mlist from './components/menu-list'
import menus from './components/data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex w-1/5 jsutify-center h-screen bg-blue-500'>
      <Mlist list={menus}/>
    </div>
    </>
  )
}

export default App
