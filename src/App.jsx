import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold animate-pulse text-blue-600'>Hello World 2</h1>
      </div>
    </div>
  )
}

export default App
