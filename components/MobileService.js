// components/MobileService.js

import React from "react";

export default function MobileService() {
  return (
    <section className="mobile-service" id="service">
      <div className="container">
        <h2 className="section-title">บริการเปลี่ยนผ้าเบรกนอกสถานที่</h2>
        <div className="service-steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon">📱</div>
            <h3 className="step-title">จองคิวออนไลน์</h3>
            <p className="step-description">
              เลือกวันเวลาที่สะดวก กรอกข้อมูลรถและที่อยู่ รอการยืนยันจากทีมงาน
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon">🚐</div>
            <h3 className="step-title">ช่างมาถึงที่</h3>
            <p className="step-description">
              ช่างผู้เชี่ยวชาญพร้อมอุปกรณ์ครบครัน เดินทางมาถึงสถานที่ตรงเวลา
            </p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon">✅</div>
            <h3 className="step-title">ติดตั้งเสร็จสิ้น</h3>
            <p className="step-description">
              ติดตั้งและตรวจสอบคุณภาพ ทดสอบการทำงาน พร้อมใช้งานใน 30-45 นาที
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
