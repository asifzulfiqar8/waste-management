import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMap from "./pages/driver/pages/dashboard/ViewMap.jsx";

// Lazy load all components/pages
const Loader = lazy(() => import("./components/shared/small/Loader.jsx"));
const AuthLayout = lazy(() => import("./pages/auth/AuthLayout.jsx"));
const Login = lazy(() => import("./pages/auth/forms/Login.jsx"));
const Signup = lazy(() => import("./pages/auth/forms/Signup.jsx"));
const Forget = lazy(() => import("./pages/auth/forms/Forget.jsx"));
const Reset = lazy(() => import("./pages/auth/forms/Reset.jsx"));

const DriverDetail = lazy(() => import("./pages/manager/driver/DriverDetail.jsx"));
const TruckDetail = lazy(() => import("./pages/manager/truck/TruckDetail.jsx"));
const AddTruck = lazy(() => import("./pages/manager/truck/AddTruck.jsx"));
const Recycle = lazy(() => import("./pages/manager/recycle/Recycle.jsx"));
const BinReport = lazy(() => import("./pages/manager/binReport/BinReport.jsx"));
const TruckReport = lazy(() => import("./pages/manager/truckReport/TruckReport.jsx"));
const DriverReport = lazy(() => import("./pages/manager/driverReport/DriverReport.jsx"));
const RecycleReport = lazy(() => import("./pages/manager/recycleRreport/RecycleReport.jsx"));
const WastReport = lazy(() => import("./pages/manager/wastReport/WastReport.jsx"));
const Configuration = lazy(() => import("./pages/manager/Configuration/Configuration.jsx"));
const Alert = lazy(() => import("./pages/manager/Alert/Alert.jsx"));

const Drivers = lazy(() => import("./pages/driver/index.jsx"));
const DriverDashboard = lazy(() => import("./pages/driver/pages/dashboard/DriverDashboard.jsx"));
const DriverAlerts = lazy(() => import("./pages/driver/pages/alerts/DriverAlerts.jsx"));
const DriverRoutes = lazy(() => import("./pages/driver/pages/routes/DriverRoute.jsx"));
const DriverSettings = lazy(() => import("./pages/driver/pages/setting/DriverSettings.jsx"));

const Admin = lazy(() => import('./pages/admin/index.jsx'));
const AdminDashboard = lazy(() => import('./pages/admin/pages/dashboard/AdminDashboard.jsx'))
const AddManager = lazy(() => import('./pages/admin/pages/addManager/AddManager.jsx'))
const AllUsers = lazy(() => import('./pages/admin/pages/allUsers/AllUsers.jsx'))
const AdminSettings = lazy(() => import('./pages/admin/pages/settings/AdminSettings.jsx'))
const Subscriptions = lazy(() => import('./pages/admin/pages/subscriptions/Subscriptions.jsx'))
// Manager routes lazy imports
const Manager = lazy(() => import("./pages/manager/index.jsx"));
const ManagerDashboard = lazy(() => import("./pages/manager/dashboard/ManagerDashboard.jsx"));
const Bin = lazy(() => import("./pages/manager/bin/Bin.jsx"));
const AddBin = lazy(() => import("./pages/manager/bin/AddBin.jsx"));
const BinDetail = lazy(() => import("./pages/manager/bin/BinDetail.jsx"));
const Driver = lazy(() => import("./pages/manager/driver/Driver.jsx"));
const AddDriver = lazy(() => import("./pages/manager/driver/AddDriver.jsx"));
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
            <Route path="add-truck" element={<AddTruck />} />
            <Route path="truck-detail/:id" element={<TruckDetail />} />
            <Route path="driver" element={<Driver />} />
            <Route path="add-driver" element={<AddDriver />} />
            <Route path="driver-detail" element={<DriverDetail />} />
            <Route path="sensors" element={<Sensors />} />
            <Route path="recycle" element={<Recycle />} />
            <Route path="bin-report" element={<BinReport />} />
            <Route path="truck-report" element={<TruckReport />} />
            <Route path="driver-report" element={<DriverReport />} />
            <Route path="recycle-report" element={<RecycleReport />} />
            <Route path="wast-report" element={<WastReport />} />
            <Route path="configuration" element={<Configuration />} />
            <Route path="alert" element={<Alert />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/drivers" element={<Drivers />}>
            <Route index element={<DriverDashboard />} />

            <Route path="view-map" element={<ViewMap />} />
            <Route path="alert" element={<DriverAlerts />} />
            <Route path="routes" element={<DriverRoutes />} />
            <Route path="settings" element={<DriverSettings />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminDashboard />} />
            <Route path="all-users" element={<AllUsers />} />
            <Route path="subscriptions" element={<Subscriptions />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="add-manager" element={<AddManager />} />


          </Route>


        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
