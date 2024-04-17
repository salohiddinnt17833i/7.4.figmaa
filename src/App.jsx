import React from "react";
import logo from "./assets/logo.svg";
import Table from "./components/Table";
import Items from "./components/Items";

function App() {
  return (
   <div className="bg-[#141b2d] pb-2">
    <div className="w-full pt-2 flex items-center justify-center mb-[15px]">
      <span  className="ml-[550px]">
        <img src={logo} alt="logo" />
      </span>
    </div>
    <Table></Table>
    <Items></Items>
  
   </div>
  );
}

export default App;
