import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="flex min-h-screen flex-col text-gray-300 bg-secondary font-montserrat">
      <Navbar />
      <Footer />
    </main>
  )
}

export default App
