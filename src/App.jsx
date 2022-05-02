import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './components/Home'
import { Nav } from './components/Navbar'
import { PrivateContent } from './components/PrivateContent'
import { Todos } from './components/Todos'
import { DataContext } from './contexts/DataContext'
import { useArray } from './hooks/useArray'

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  const todos = useArray([
    { _id: "t1", title: "Do some routing" },
    { _id: "t2", title: "Test custom hook" },
  ])

  const sharedData = {
    todos,
    loggedIn, setLoggedIn
  }

  return (
    <DataContext.Provider value={sharedData}>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="/todos" element={<PrivateContent element={ <Todos /> } />}></Route>
            {/* <Route path="/todos" element={<Todos />}></Route> */}
          </Routes>
        </header>
      </div>
    </DataContext.Provider>
  )
}

export default App
