import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import ProductImage from "./ProductImage";
import Range from "./Range";


const Home = () => {
  return (
    <div>
      
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products/>
      <ProductImage/>
      <Range/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
