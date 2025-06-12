import "./App.css";
import Header from "./components/Header/Header";
import RecommendedProducts from "./components/RecommendedProducts/RecommendedProducts";
import BrowseCategories from "./components/BrowseCategories/BrowseCategories";
import DiscriptionBlock from "./components/DiscriptionBlock/DiscriptionBlock";
import { useState } from "react";

import BurgerMenu from "./components/Burger/Burger";

function App() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <Header open={open} setOpen={setOpen} />
      <BurgerMenu open={open} setOpen={setOpen} />
      <RecommendedProducts />
      <BrowseCategories />
      <DiscriptionBlock />
    </>
  );
}

export default App;
