import "../../global.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
 

    function Headerpage(){
      const navigate = useNavigate();
      const [menuOpen, setMenuOpen] = useState(false);


        const handleLogout = () => {

          localStorage.clear();

          toast.success("Logged out successfully!");

    setTimeout(() => {
        navigate("/");
        window.location.reload();
    }, 1500);

        
         navigate("/");
         };



  //  const handleLogout = () => {
  //   localStorage.clear()
  //    navigate("/"); 
  //   window.location.reload(true);
    
     // Navigate to Home
  
  // }

        return(
            <>
            <header className="header">
      <div className="logo">
        <Link to="/">🌲 TimberCraft</Link>
      </div>


  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
>
    {menuOpen ? <FaTimes /> : <FaBars />}
</div>

      {/* <nav> */}
      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)} >Home</Link></li>
          <li><Link to="/woods" onClick={() => setMenuOpen(false)} >Woods</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)} >About</Link></li>
          <li><Link to="/contact"  onClick={() => setMenuOpen(false)} >Contact</Link></li>
                    {localStorage.getItem("token") ? (
                       <li>
                      <Link to="/cms2" onClick={() => setMenuOpen(false)}>CMS</Link>
                      </li>
                    ) : (
                 <li>
              <Link to="/login" onClick={() => setMenuOpen(false)} >Login</Link>
              </li>
              )}

          {/* <li><Link to="/cms">CMS</Link></li> */}

           {/* <li><Link to="/cms2">CMS</Link></li> */}

             {/* <li><Link to="/cms3">CMS3</Link></li> */}

             {/* <li><Link to="/login">Login</Link></li> */}

        </ul>
      </nav>

      {localStorage.getItem('token') ? <button  className="logout-btn"
      onClick={() => handleLogout()  } 
         >Logout</button> : ""}

    </header>
            </>
        )
    }


      export default Headerpage;