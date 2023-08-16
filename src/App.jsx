import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Homepage/Home";
import Dashboard from "./Dashboard/Dashboard";
import Departments from "./Departments/Departments";
import Products from "./Products/Products";
import Description from "./Description/Description";
import FilterProvider from "./Context/FilterContext";

function App() {


  return (
    <>
    <FilterProvider>
     <Router>
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Description/>}/>
      </Route>
      </Routes>
     </Router>
     </FilterProvider>
    </>
  )
}

export default App
