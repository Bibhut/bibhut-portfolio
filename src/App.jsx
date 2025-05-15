
import { HashRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/home"
import { NotFoundPage } from "./pages/not-found"


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element= {<HomePage />} />
          <Route  path = "*" element = {<NotFoundPage />}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
