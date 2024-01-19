import { Route, Routes } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import SignUp from "./components/SignUp/SignUp"
import SignIn from "./components/SignIn/SignIn"

function App() {
  

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Dashboard/>}></Route> */}
        <Route path="/" element={<SignIn/>}></Route>
        {/* <Route path="/" element={<SignUp/>}></Route> */}
      </Routes>
    </>
  )
}

export default App
