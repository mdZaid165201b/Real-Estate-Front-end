import { useState, useEffect } from "react";
// import "./App.css";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Property from "./pages/Property1";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Whatsapp from "./components/WhatsappBtn";
import axios from "axios";


function App() {
  const [properties, setProperties] = useState([]);
  useEffect(() => { 
    async function fetchProperties(){
      const data = await axios.get("http://localhost:8000/api/admin/getAllProperties");
      setProperties(data.data);
    }
    fetchProperties();
  },[])
  console.log(properties);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={properties} />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/property-view/:id" element={<Property />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<NotFound />} />
      </Routes>
      <Whatsapp />
    </>
  );
}

export default App;
