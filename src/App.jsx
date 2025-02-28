import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/shared/small/Loader.jsx";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import Login from "./pages/auth/forms/Login.jsx";
import Signup from "./pages/auth/forms/Signup.jsx";
import Forget from "./pages/auth/forms/Forget.jsx";
import Reset from "./pages/auth/forms/Reset.jsx";

// manager routes
const Manager = lazy(() => import("./pages/manager/index.jsx"));
const ManagerDashboard = lazy(() =>
  import("./pages/manager/dashboard/ManagerDashboard.jsx")
);
const Bin = lazy(() => import("./pages/manager/bin/Bin.jsx"));
const AddBin = lazy(() => import("./pages/manager/bin/AddBin.jsx"));
const BinDetail = lazy(() => import("./pages/manager/bin/BinDetail.jsx"));
const Driver = lazy(() => import("./pages/manager/driver/Driver.jsx"));
const Truck = lazy(() => import("./pages/manager/truck/Truck.jsx"));
const Sensors = lazy(() => import("./pages/manager/sensors/Sensors.jsx"));
const Settings = lazy(() => import("./pages/manager/settings/Settings.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthLayout
                bgImg="bg-[url(/src/assets/images/auth/login-bg.png)]"
                form={<Login />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout
                bgImg="bg-[url(/src/assets/images/auth/signup-bg.png)]"
                form={<Signup />}
              />
            }
          />
          <Route
            path="/forget"
            element={
              <AuthLayout
                bgImg="bg-[url(/src/assets/images/auth/forget-bg.png)]"
                form={<Forget />}
              />
            }
          />
          <Route
            path="/reset"
            element={
              <AuthLayout
                bgImg="bg-[url(/src/assets/images/auth/reset-bg.png)]"
                form={<Reset />}
              />
            }
          />

          <Route path="/" element={<Manager />}>
            <Route path="" />
          </Route>
          <Route path="/" element={<Manager />}>
            <Route index element={<ManagerDashboard />} />
            <Route path="bin" element={<Bin />} />
            <Route path="add-bin" element={<AddBin />} />
            <Route path="bin-detail/:id" element={<BinDetail />} />
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
