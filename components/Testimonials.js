"use client";
import React from "react";

export default function Testimonials() {
  return (
    <section className="testimonials section">   {/* ✅ ใส่ section utility */}
      <div className="container testimonials-container">
        <h2 className="section-title">เสียงจากลูกค้า</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <div className="testimonial-text">
              “บริการดีมาก ส่งไวและแนะนำสินค้าเหมาะกับรถเราจริง ๆ ประทับใจ!”
            </div>
            <div className="testimonial-author">- คุณธีรเดช (กรุงเทพฯ)</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <div className="testimonial-text">
              “ติดตั้งถึงบ้าน เปลี่ยนผ้าเบรกจบใน 30 นาที รถเบรกดีขึ้นเยอะมาก”
            </div>
            <div className="testimonial-author">- คุณณัฐวุฒิ (ชลบุรี)</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
            <div className="testimonial-text">
              “ราคาดี ของแท้มีรับประกัน ทีมงานมืออาชีพ ดูแลดีมากค่ะ”
            </div>
            <div className="testimonial-author">- คุณสุนิสา (ขอนแก่น)</div>
          </div>
        </div>
      </div>
    </section>
  );
}
