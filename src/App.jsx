import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Homepage/Home";
import Dashboard from "./Dashboard/Dashboard";
import Departments from "./Departments/Departments";
import Products from "./Products/Products";

function App() {


  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/products" element={<Products/>}/>
      </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
