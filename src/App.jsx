import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import Event from './pages/Event'
import Players from './pages/Players'
import Scores from './pages/Scores'
import OnlyInDesktop from './components/OnlyInDesktop'

import SideDrawer from './components/SideDrawer'

function App() {
  return (
    <>

      <div className="visible md:invisible" ><OnlyInDesktop/></div>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideDrawer/>
        </div>
        <main className="p-7 col-span-4">
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/events">
              <Route index element={<Events/>} />
              <Route path=":name" element={<Event/>} />
            </Route>
            <Route path="/players" element={<Players/>}></Route>
            <Route path="/scores" element={<Scores/>}></Route>
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
