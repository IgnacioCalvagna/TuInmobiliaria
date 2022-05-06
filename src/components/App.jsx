import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import FormProperty from "./FormProperty";
import SignupCard from "./SignupCard";
import Login from "./Login";
import Navbar from "./Navbar";
import Home from "./Home";
import GridProperty from "./GridProperty";
import Card from "./Card";
import Footer from "./Footer";
import FilterCategory from "./FilterCategory";
import FilterLocation from "./FilterLocation";
import FilterPrice from "./FilterPrice";
import AdminProperty from "./AdminProperty";

function App() {

useEffect(() => {
  localStorage.setItem("storage","Cualquier cosa");
  //localStorage.getItem("storage");
}, []);
 
  /* const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(persistUser());
  }, []);

  useEffect(() => {
    axios.get('/api/property/').then(res => setProducts(res.data));
  }, []);
*/

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <div> 
                <GridProperty property="property" />
              </div>
            </>
          }
        />
        <Route path="/admin/property" element={<AdminProperty />} />

        <Route path="/Search/LowerPrice" element={<FilterPrice />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/location/:location" element={<FilterLocation />} />
        <Route path="/category/:category" element={<FilterCategory />} />
        <Route path="/register" element={<SignupCard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormProperty />} />
        <Route path="/card" element={<Card />} />
        <Route path="/grid" element={<GridProperty property="property" />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;