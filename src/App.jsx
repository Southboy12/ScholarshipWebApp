import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./Pages/Layout"
import Scholarship from "./Pages/Scholarship"
import Apply from "./Pages/Apply"
import Earning from "./Pages/Earning"
import Support from "./Pages/Support"
import Card from "./Pages/Card"
import Tracker from "./Pages/Tracker"
import Profile from "./Pages/Profile"
import Favorites from "./components/Favorites"
import Discover from "./components/Discover"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={ <Layout />} >
          <Route index="scholarship" element={ <Scholarship />} />
          <Route path="apply" element={ <Apply />} />
          <Route path="support" element={ <Support />} />
          <Route path="earning" element={ <Earning />} />
          <Route path="card" element={ <Card />} />
          <Route path="tracker" element={ <Tracker />} />
          <Route path="profile" element={ <Profile />} />
        </Route>
      </Routes>
      
    </Router>
  )
}

export default App
