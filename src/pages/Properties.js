import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar1";
import PropertiesBody from "../components/PropertiesBody";
import axios from "axios";

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [properties, setProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    async function fetchCategories() {
      const data = await axios.get(
        "http://localhost:8000/api/admin/getAllCategories"
      );
      setCategories(data.data.data);
    }
    async function fetchProperties() {
      const data = await axios.get(
        "http://localhost:8000/api/admin/getAllProperties"
      );
      setProperties(data.data.data);
    }
    fetchProperties();
    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchCategoryProperties() {
      const data = await axios.get(
        `http://localhost:8000/api/admin/categoryProperties/${categoryId}`
      );
      console.log(data.data.data);
      setProperties(data.data.data);
    }
    if (categoryId !== "") {
      fetchCategoryProperties();
    }
  }, [categoryId]);
  console.log(properties);
  return (
    <div>
      <Navbar />

      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        setCategoryId={setCategoryId}
      />
      <div className="bg-[#111211]">
        <PropertiesBody properties={properties} />
      </div>
    </div>
  );
};

export default Properties;
