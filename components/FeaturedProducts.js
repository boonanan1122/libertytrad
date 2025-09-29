"use client";
import React from "react";

export default function FeaturedProducts() {
  // กดเพิ่มลงตะกร้า (demo)
  function handleAddToCart(product) {
    alert(`เพิ่ม ${product} ลงตะกร้าเรียบร้อยแล้ว!`);
  }

  return (
    <section className="featured-products" id="products">
      <h2 className="section-title">ผ้าเบรกขายดี</h2>
      <div className="products-grid">
        {/* Product 1 */}
        <div className="product-card">
          <div className="product-image">🔧</div>
          <h3 className="product-name">ผ้าเบรกพรีเมียม Toyota Camry</h3>
          <div className="product-price">฿2,890</div>
          <ul className="product-features">
            <li>✓ เกรดพรีเมียม OEM</li>
            <li>✓ ทนทานสูง ไม่ส่าย</li>
            <li>✓ รับประกัน 1 ปี</li>
          </ul>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart("ผ้าเบรกพรีเมียม Toyota Camry")}
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
        {/* Product 2 */}
        <div className="product-card">
          <div className="product-image">⚡</div>
          <h3 className="product-name">ผ้าเบรกสนามแข่ง Honda Civic</h3>
          <div className="product-price">฿3,590</div>
          <ul className="product-features">
            <li>✓ เกรดสนามแข่ง</li>
            <li>✓ ทนความร้อนสูง</li>
            <li>✓ เบรกแน่น ตอบสนองเร็ว</li>
          </ul>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart("ผ้าเบรกสนามแข่ง Honda Civic")}
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
        {/* Product 3 */}
        <div className="product-card">
          <div className="product-image">🛡️</div>
          <h3 className="product-name">ผ้าเบรกมาตรฐาน Nissan Almera</h3>
          <div className="product-price">฿1,990</div>
          <ul className="product-features">
            <li>✓ คุณภาพมาตรฐาน</li>
            <li>✓ ราคาประหยัด</li>
            <li>✓ เหมาะใช้ในเมือง</li>
          </ul>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart("ผ้าเบรกมาตรฐาน Nissan Almera")}
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
        {/* Product 4 */}
        <div className="product-card">
          <div className="product-image">🏆</div>
          <h3 className="product-name">ผ้าเบรกคาร์บอน Mazda CX-5</h3>
          <div className="product-price">฿4,290</div>
          <ul className="product-features">
            <li>✓ เทคโนโลยีคาร์บอน</li>
            <li>✓ เบาและแข็งแรง</li>
            <li>✓ ลดฝุ่นผ้าเบรก</li>
          </ul>
          <button
            className="add-to-cart"
            onClick={() => handleAddToCart("ผ้าเบรกคาร์บอน Mazda CX-5")}
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </section>
  );
}
