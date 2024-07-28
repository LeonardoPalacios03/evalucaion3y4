import { Route, Routes } from "react-router-dom"
import { Navbar } from "../ui/components/Navbar"
import { LogOutPage } from "../auth/pages/LogOutPage"
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes"

export const AppRouter = () => {
  return (
    <>
        <Routes>
          <Route path="logout" element={<LogOutPage/>} />
          <Route path="/*" element={<HeroesRoutes/>} /> 
        </Routes> 
    </>
  )
}
