import LandingPage from "../pages/LandingPage"
import SignIn from "../pages/SignIn"
import FrontPage from "../pages/FrontPage"
import { Routes, Route } from "react-router"

function RoutePage() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/frontpage" element={<FrontPage />} />
      </Routes>
    </div>
  )
}

export default RoutePage;
