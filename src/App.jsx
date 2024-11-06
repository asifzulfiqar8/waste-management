import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/shared/small/Loader.jsx";

// manager routes
const Manager = lazy(() => import("./pages/manager/index.jsx"));
const ManagerDashboard = lazy(() =>
  import("./pages/manager/dashboard/ManagerDashboard.jsx")
);
const Bin = lazy(() => import("./pages/manager/bin/Bin.jsx"));
const Driver = lazy(() => import("./pages/manager/driver/Driver.jsx"));
const Truck = lazy(() => import("./pages/manager/truck/Truck.jsx"));
const Sensors = lazy(() => import("./pages/manager/sensors/Sensors.jsx"));
const Settings = lazy(() => import("./pages/manager/settings/Settings.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Manager />}>
            <Route index element={<ManagerDashboard />} />
            <Route path="bin" element={<Bin />} />
            <Route path="truck" element={<Truck />} />
            <Route path="driver" element={<Driver />} />
            <Route path="sensors" element={<Sensors />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
