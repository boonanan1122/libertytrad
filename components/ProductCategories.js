// components/ProductCategories.js

import React from "react";

export default function ProductCategories() {
  // Demo: กดที่การ์ดแล้ว alert หมวดหมู่
  function handleCategory(category) {
    alert(`แสดงผ้าเบรกประเภท: ${category}\n\nกำลังกรองสินค้า...`);
  }

  return (
    <section className="categories">
      <div className="categories-container">
        <h2 className="section-title">ประเภทผ้าเบรก</h2>
        <div className="categories-grid">
          <div
            className="category-card"
            onClick={() => handleCategory("เกรดพรีเมียม")}
          >
            <div className="category-icon">👑</div>
            <h3 className="category-title">เกรดพรีเมียม</h3>
            <p className="category-description">
              คุณภาพสูงสุด ทนทาน เหมาะสำหรับการใช้งานหนัก
            </p>
          </div>
          <div
            className="category-card"
            onClick={() => handleCategory("เกรดสนามแข่ง")}
          >
            <div className="category-icon">🏁</div>
            <h3 className="category-title">เกรดสนามแข่ง</h3>
            <p className="category-description">
              ประสิทธิภาพสูง ทนความร้อน เบรกแน่นมาก
            </p>
          </div>
          <div
            className="category-card"
            onClick={() => handleCategory("เกรดมาตรฐาน")}
          >
            <div className="category-icon">🚗</div>
            <h3 className="category-title">เกรดมาตรฐาน</h3>
            <p className="category-description">
              คุณภาพดี ราคาประหยัด เหมาะใช้ในเมือง
            </p>
          </div>
          <div
            className="category-card"
            onClick={() => handleCategory("เทคโนโลยีคาร์บอน")}
          >
            <div className="category-icon">💎</div>
            <h3 className="category-title">เทคโนโลยีคาร์บอน</h3>
            <p className="category-description">
              นวัตกรรมล่าสุด เบา แข็งแรง ลดฝุ่น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
