import "../../global.css";
import { Link } from "react-router-dom";

    function Footerpage(){
        return(
            <>
             <footer className="footer">

      <div className="footer-container">

        <div>
          <h2>🌲 TimberCraft</h2>
          <p>
            Premium quality woods for furniture,
            construction, and interior design.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            {/* <li>Home</li>
            <li>Woods</li>
            <li>About</li>
            <li>Contact</li> */}
             <li><Link to="/">Home</Link></li>
          <li><Link to="/woods">Woods</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📧 support@timbercraft.com</p>
          <p>📞 +91 9876543210</p>
          <p>📍 Lucknow, India</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 TimberCraft. All Rights Reserved.
      </p>

    </footer>
            </>
        )
    }

      export default Footerpage;