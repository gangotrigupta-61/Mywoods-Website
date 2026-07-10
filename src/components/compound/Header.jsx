import "../../global.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
 

    function Headerpage(){
      const navigate = useNavigate();


        const handleLogout = () => {
        localStorage.clear();
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

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/woods">Woods</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
                    {localStorage.getItem("token") ? (
                       <li>
                      <Link to="/cms2">CMS</Link>
                      </li>
                    ) : (
                 <li>
              <Link to="/login">Login</Link>
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