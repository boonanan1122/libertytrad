"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            หยุดทุกความกังวล<br />เริ่มต้นทุกเส้นทาง
          </h1>
          <p className="hero-subtitle">
            ผ้าเบรกคุณภาพสูงพร้อมบริการติดตั้งถึงที่ เพื่อความปลอดภัยสูงสุดในทุกการเดินทาง
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn-primary">
              เลือกซื้อผ้าเบรก
            </a>
            <a href="#service" className="btn-secondary">
              จองคิวบริการนอกสถานที่
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
