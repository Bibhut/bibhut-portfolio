
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { NotFoundPage } from "./pages/not-found"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element= {<HomePage />} />
          <Route  path = "*" element = {<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
