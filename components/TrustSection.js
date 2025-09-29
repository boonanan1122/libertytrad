// components/TrustSection.js
import React from "react";

export default function TrustSection() {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">🛡️</div>
            <h3 className="trust-title">รับประกันคุณภาพ 1 ปี</h3>
            <p className="trust-description">มั่นใจในคุณภาพสินค้า</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🚚</div>
            <h3 className="trust-title">จัดส่งฟรี</h3>
            <p className="trust-description">ส่งฟรีทั่วกรุงเทพฯ</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">👨‍🔧</div>
            <h3 className="trust-title">ช่างผู้เชี่ยวชาญ</h3>
            <p className="trust-description">ประสบการณ์กว่า 10 ปี</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">⏰</div>
            <h3 className="trust-title">บริการ 24/7</h3>
            <p className="trust-description">พร้อมให้คำปรึกษา</p>
          </div>
        </div>
      </div>
    </section>
  );
}
