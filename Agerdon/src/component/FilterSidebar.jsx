// src/components/FilterSidebar.jsx

import React, { useState } from "react";

const FilterSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
    {children}
  </div>
);

const RadioOption = ({ name, value, label, checked, onChange }) => (
  <label className="flex items-center space-x-2 text-gray-600 cursor-pointer">
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="accent-blue-600"
    />
    <span>{label}</span>
  </label>
);

export default function FilterSidebar() {
  const [filters, setFilters] = useState({
    gender: "동성만",
    age: "20-30대",
    passengers: "1명",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <aside className="w-64 bg-white p-6 rounded-xl shadow-sm flex-shrink-0">
      <FilterSection title="성별">
        <RadioOption
          name="gender"
          value="전체"
          label="전체"
          checked={filters.gender === "전체"}
          onChange={handleChange}
        />
        <RadioOption
          name="gender"
          value="동성만"
          label="동성만"
          checked={filters.gender === "동성만"}
          onChange={handleChange}
        />
      </FilterSection>

      <FilterSection title="연령대">
        <RadioOption
          name="age"
          value="10대"
          label="10대"
          checked={filters.age === "10대"}
          onChange={handleChange}
        />
        <RadioOption
          name="age"
          value="20-30대"
          label="20-30대"
          checked={filters.age === "20-30대"}
          onChange={handleChange}
        />
        <RadioOption
          name="age"
          value="40대 이상"
          label="40대 이상"
          checked={filters.age === "40대 이상"}
          onChange={handleChange}
        />
      </FilterSection>

      <FilterSection title="동승자 수">
        <RadioOption
          name="passengers"
          value="1명"
          label="1명"
          checked={filters.passengers === "1명"}
          onChange={handleChange}
        />
        <RadioOption
          name="passengers"
          value="2명"
          label="2명"
          checked={filters.passengers === "2명"}
          onChange={handleChange}
        />
      </FilterSection>

      <button className="w-full bg-slate-700 text-white font-bold py-3 rounded-lg hover:bg-slate-800 transition-colors">
        결제하기
      </button>
    </aside>
  );
}
