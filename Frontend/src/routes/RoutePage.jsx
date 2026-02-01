import LandingPage from "../pages/LandingPage"
import SignIn from "../pages/SignIn"
import { Routes, Route } from "react-router"

function RoutePage() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default RoutePage;
