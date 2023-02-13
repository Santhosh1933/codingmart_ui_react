import React from "react";

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_upper">
        <div className="footer_upper_content">
          <h5>Contact</h5>
          <div className="coc">
            <tr className="tr">
              <i class="fa-solid fa-phone"></i>+91 91500-48552
            </tr>
            <tr>
              <i class="fa-solid fa-envelope"></i>sales@codingmart.com
            </tr>
          </div>
        </div>
        <div className="footer_upper_content">
          <h5>Our Services</h5>
          <div className="coc">
            <tr>IT Strategy and Consulting</tr>
            <tr>Enterprise platforms,Tools and Automation</tr>
            <tr>Application development</tr>
            <tr>DevOps and IT Infrastructure</tr>
          </div>
        </div>
        <div className="footer_upper_content">
          <h5>Our Menu</h5>
          <div className="coc">
            <tr>About us</tr>
            <tr>trfe@Codingmart</tr>
            <tr>Learning and development</tr>
          </div>
        </div>
        <div className="footer_upper_content">
          <h5>Explore</h5>
          <div className="coc">
            <tr>Careers</tr>
            <tr>Blogs</tr>
            <tr>Case Studies & Testimonials</tr>
          </div>
        </div>
      </div>
      <div className="social_media">
        <div className="social_media_bar">
          Follow us On
          <div className="social_media_icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer_lower">
        <p>© Copyright 2023 Santhosh</p>
      </div>
    </div>
  );
};
