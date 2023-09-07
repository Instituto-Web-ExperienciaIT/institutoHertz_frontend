
import { Routes, Route } from "react-router-dom"
import { HomePage } from ".."

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/about" element={<h1>About page...</h1>} />
    </Routes>
  )
}
