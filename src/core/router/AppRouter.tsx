import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../../app/modules/login"
import { HomeRoutes } from "../../app/modules/home/routes/HomeRoutes"

export const AppRouter = () => {

  return (
    <Routes>
      <Route path="/*" element={ <HomeRoutes /> } />
      <Route path="/login" element={ <LoginPage /> } />

      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes> 
  )
}
