import { Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import ConfirmPage from "./ConfirmPage"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/newsletter-form" element={ <Inicio/>}/>
        <Route path="/newsletter-form/confirm-page" element={ <ConfirmPage/>}/>
      </Routes>
    </div>
  )
}

export default App
