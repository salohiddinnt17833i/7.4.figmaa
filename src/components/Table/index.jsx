import React from "react";

function Table() {
  return (
    <div className="w-[1080px] mx-auto mb-4">
      <div className="heading w-full flex items-center justify-between text-white pr-28 pl-2 py-[10px] rounded-lg mx-auto bg-[#1A2038]">
        <div className="brand w-[250px]"><span>Brand</span></div>
        <div className="brand"><span>Category</span></div>
        <div className="brand"><span>Price</span></div>
        <div className="brand"><span>Status</span></div>
        <div className="brand"><span>Action</span></div>
      </div>
    </div>
  );
}

export default Table;
