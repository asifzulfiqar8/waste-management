import { lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// manager routes
const Manager = lazy(() => import('./pages/manager/index.jsx'))
const ManagerDashboard = lazy(() => import('./pages/manager/dashboard/ManagerDashboard.jsx'))
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Manager />}>
          <Route index element={<ManagerDashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
