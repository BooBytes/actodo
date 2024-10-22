import { Route, Routes, BrowserRouter } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Landing from "./pages/Landing.jsx"
import { useState } from "react"; 





function App() {
  const [users, setusers] = useState([]); 
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setusers = {setusers}/>}></Route>
        <Route path='/signup' element={<Signup users = {users} setusers = {setusers}/>}></Route>
        <Route path='/landing' element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}
export default App;
