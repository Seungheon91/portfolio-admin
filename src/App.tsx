import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts/MainLayout";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Stat } from "./pages/dashboard/Stat";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="stat" element={<Stat />} />
        </Route>

        <Route path="resume" element={<MainLayout />}>
          <Route index element={<Resume />} />
        </Route>

        <Route path="profile" element={<MainLayout />}>
          <Route index element={<Profile />} />
        </Route>

        <Route path="dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="stat" element={<Stat />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
