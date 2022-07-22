import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import SignIn from "./pages/SignIn";
import User from "./pages/User";



function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/account' element={<User />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
