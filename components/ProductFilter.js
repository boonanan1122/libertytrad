"use client";
import React, { useState } from "react";

export default function ProductFilter() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (brand && model && year) {
      alert(`ค้นหาผ้าเบรกสำหรับ: ${brand} ${model} ปี ${year}`);
    } else {
      alert("กรุณาเลือกข้อมูลให้ครบถ้วน");
    }
  }

  return (
    <section className="product-filter">
      <h2 className="filter-title">ค้นหาผ้าเบรกที่เหมาะกับรถคุณ</h2>
      <form className="filter-form" onSubmit={handleSubmit}>
        <div className="filter-group">
          <label className="filter-label">ยี่ห้อรถ</label>
          <select
            className="filter-select"
            value={brand}
            onChange={e => setBrand(e.target.value)}
          >
            <option value="">เลือกยี่ห้อ</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Nissan">Nissan</option>
            <option value="Mazda">Mazda</option>
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">รุ่นรถ</label>
          <select
            className="filter-select"
            value={model}
            onChange={e => setModel(e.target.value)}
          >
            <option value="">เลือกรุ่น</option>
            <option value="Camry">Camry</option>
            <option value="Civic">Civic</option>
            <option value="Almera">Almera</option>
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">ปี</label>
          <select
            className="filter-select"
            value={year}
            onChange={e => setYear(e.target.value)}
          >
            <option value="">เลือกปี</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="filter-group">
          <button type="submit" className="filter-btn">
            ค้นหา
          </button>
        </div>
      </form>
    </section>
  );
}
