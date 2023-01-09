import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import { Route, Routes } from "react-router-dom";
import Property from "./pages/Property1";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Whatsapp from "./components/WhatsappBtn";
import Register from "./admin_pages/Register";
import Login from "./admin_pages/Login";
import Layout from "./admin_pages/Layout";
import AdminProperties from "./admin_pages/Properties";
import axios from "axios";
import AddProperty from "./admin_pages/AddProperty";
import AdminCategories from "./admin_pages/Categories";
import AddCategory from "./admin_pages/AddCategory";
import WhatsappPage from "./admin_pages/WhatsappPage";

function App() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    async function fetchProperties() {
      const data = await axios.get(
        "http://localhost:8000/api/admin/getAllProperties"
      );
      setProperties(data.data);
    }
    fetchProperties();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home data={properties} />} />
        <Route path="/" element={<Home data={properties} />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/property-view/:id" element={<Property />} />
        <Route path="property-view/:id" element={<Property />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin/login" element={<Login />} />
        <Route path="admin/register" element={<Register />} />
        <Route path="admin/dashboard" element={<Layout />}>
          <Route path="properties" element={<AdminProperties />} />
          <Route path="add-property" element={<AddProperty />} />
          <Route path="categories" element={<AdminCategories />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="update-whatsapp" element={<WhatsappPage />} />
        </Route>

        <Route element={<NotFound />} />
      </Routes>
      <Whatsapp />
    </>
  );
}

export default App;
