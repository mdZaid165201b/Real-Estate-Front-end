import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import HomeProperties from "../components/HomeProperties";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="">
      <Hero />
      <Category />
      <HomeProperties />
      <Footer />

      </div>
    </>
  );
};

export default Home;
