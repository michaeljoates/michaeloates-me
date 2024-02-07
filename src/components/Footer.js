import React from 'react';
import '../Styles.css'; // Import your CSS file for styling

import '@fortawesome/fontawesome-free/css/all.min.css';





function Footer() {
    return (
        <footer class="footer">
        <div class="footer-content">
          <div class="footer-section about">
            <h3>About Me</h3>
            <p>Hi There! I’m an experienced IT Specialist and Drafter, currently 
                studying a Bachelor of Computer Science at the University of Queensland.</p>
          </div>
          <div class="footer-section contact">
            <h3>Quick Contact</h3>
            <p>📍 Brisbane, QLD, Australia</p>
            <p>📧 m.j.oates@me.com</p>
            <p>📞 0421 167 438</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Follow Me:</p>
            <a href="https://www.linkedin.com/in/michael-oates-00/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/michaeljoates/" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
