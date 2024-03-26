import { Route, Routes } from "react-router-dom"
import Inicio from "./Inicio"
import ConfirmPage from "./ConfirmPage"


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={ <Inicio/>}/>
        <Route path="/confirm-page" element={ <ConfirmPage/>}/>
      </Routes>
    </div>
  )
}

export default App
