// src/components/Footer.tsx
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/*Brand */}
        <div className="footer-col">
          <h2 className="footer-logo">MyShop</h2>
          <p>Best products, best prices, fast delivery.</p>
        </div>
{/*Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
{/*Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyShop. All rights reserved.</p>
      </div>

      <style>{`
        .footer {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 40px 20px 20px;
          font-family: sans-serif;
        }
        .footer-container {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-col {
          flex: 1 1 200px;
        }
        .footer-logo {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 12px;
        }
        .footer-col h3 {
          font-size: 16px;
          margin-bottom: 12px;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-col ul li {
          margin-bottom: 8px;
        }
        .footer-col ul li a {
          color: #f9fafb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-col ul li a:hover {
          color: #4f46e5;
        }
        .social-icons {
          display: flex;
          gap: 12px;
          font-size: 20px;
        }
        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
          color: #d1d5db;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            gap: 20px;
          }
          .footer-col {
            flex: 1 1 100%;
          }
          .social-icons {
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
}
