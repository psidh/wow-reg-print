"use client";
import data from "@/data/data";
import { useState } from "react";

export default function Home() {
  const items = data;
  const [filteredData, setFilteredData] = useState<any>([]);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const filtered = items.filter((item) => item.id.toString() === searchInput);
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="flex items-center justify-center px-4 space-x-4">
        <input
          type="text"
          title="name"
          className="py-2 px-6 rounded-lg bg-neutral-900 text-white"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button
          className="py-2 px-4 bg-green-500 rounded-lg"
          onClick={handleSearch}
        >
          Get
        </button>
      </div>

      {filteredData.length > 0 && (
        <ul>
          {filteredData.map((item: any, index: any) => (
            <li key={index} className="my-4 p-4 rounded-lg bg-neutral-900">
              <p>UID: {item.uid}</p>
              <p>Payment UTR: {item.payment_utr}</p>
              <p>Accommodation: {item.accommodation ? "Yes" : "No"}</p>
              <p>T-Shirt Size: {item.tshirt_size}</p>
              <p>Phone Number: {item.phone_number}</p>
              <p>Agenda Domain: {item.agenda_domain.join(", ")}</p>
              <p>ID: {item.id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
