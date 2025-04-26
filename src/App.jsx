import { useState } from 'react'
import Parent from './Parent'
import UserProvider from './context-provider/context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  // This was incomplete in your code
        minHeight: '100vh',    // Added for full viewport height centering
        padding: '20px'        // Added for some spacing
      }}>
        <Parent />
      </div>
    </UserProvider>
  )
}

export default App
