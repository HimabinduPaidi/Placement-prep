import React, { useState } from "react";

const LiveSearchFilter = () => {
  const [searchItem, setSearchItem] = useState("");
  const items = [
    "Watch",
    "WaterBottle",
    "Wallet",
    "Tea",
    "Coffee",
    "Pen",
    "Laptop",
    "Pan",
    "Bag",
    "Light",
  ];
  const filteredList = items.filter((item) => {
    return item.toLowerCase().startsWith(searchItem.toLowerCase());
  });
  return (
    <div>
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
        className="border p-2 rounded"
        type="text"
        placeholder="Search"
      />
      {searchItem &&
        (filteredList.length === 0 ? (
          <h3>No results found</h3>
        ) : (
          filteredList.map((item) => {
             return <h3 key={item}>{item}</h3>;
          })
        ))}
    </div>
  );
};

export default LiveSearchFilter;
