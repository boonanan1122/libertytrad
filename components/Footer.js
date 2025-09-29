import React from 'react';

const Footer = ({ subscribeNewsletter }) => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* ... (เนื้อหาส่วน Footer ทั้งหมด) ... */}
                    <div className="footer-section">
                        <h3>บริษัท</h3>
                        <ul>
                            <li><a href="#about">เกี่ยวกับเรา</a></li>
                            <li><a href="#contact">ติดต่อเรา</a></li>
                            <li><a href="#careers">ร่วมงานกับเรา</a></li>
                            <li><a href="#news">ข่าวสาร</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>ช่วยเหลือ</h3>
                        <ul>
                            <li><a href="#support">ศูนย์ช่วยเหลือ</a></li>
                            <li><a href="#warranty">การรับประกัน</a></li>
                            <li><a href="#return">การคืนสินค้า</a></li>
                            <li><a href="#faq">คำถามที่พบบ่อย</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>บัญชีของฉัน</h3>
                        <ul>
                            <li><a href="#login">เข้าสู่ระบบ</a></li>
                            <li><a href="#register">สมัครสมาชิก</a></li>
                            <li><a href="#orders">คำสั่งซื้อ</a></li>
                            <li><a href="#wishlist">รายการโปรด</a></li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h3>รับข่าวสาร</h3>
                        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>รับข้อมูลสินค้าใหม่และโปรโมชั่นพิเศษ</p>
                        <div className="newsletter">
                            <input type="email" className="newsletter-input" placeholder="อีเมลของคุณ" />
                            <button className="newsletter-btn" onClick={subscribeNewsletter}>สมัคร</button>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <p>&copy; 2024 LIBERTY TRADE. สงวนลิขสิทธิ์ทั้งหมด.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;