"use client";
import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(3);

  function toggleCart() {
    alert(`ตะกร้าสินค้า: ${cartCount} รายการ\n\nคลิกเพื่อดูรายละเอียดและชำระเงิน`);
  }

  function handleSearch(e) {
    if (e.key === "Enter") {
      const searchTerm = e.target.value;
      if (searchTerm) {
        alert(`ค้นหา: "${searchTerm}"\n\nกำลังแสดงผลลัพธ์...`);
      }
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <div className="logo-symbol">LT</div>
          <div className="brand-name">LIBERTY TRADE</div>
        </div>
        <div className="header-actions">
          <div className="search-container">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="ค้นหาผ้าเบรกตามยี่ห้อรถ รุ่น หรือปี"
              onKeyDown={handleSearch}
            />
          </div>
          <div className="cart-icon" onClick={toggleCart}>
            🛒
            <span className="cart-badge">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
