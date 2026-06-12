import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""
          }`}
      >
        {/* Logo */}

        <div className="logo-section">
          <img src={logo} alt="PlotMithra" />

          <div className="logo1">
            <h2>
              SmartPlot<span>Mithra</span>
            </h2>

            <p>Your Trusted Property Partner</p>
          </div>
        </div>

        {/* Menu */}

        <ul
          className={`nav-links ${menuOpen ? "active" : ""
            }`}
        >
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "active-link"
                  : ""
              }
            >
              Home
            </Link>
          </li>

          <li>
            <Link to="/properties">
              Properties
            </Link>
          </li>

          <li>
            <Link to="/buy">Buy</Link>
          </li>

          <li>
            <Link to="/rent">Rent</Link>
          </li>

          <li>
            <Link to="/sell">Sell</Link>
          </li>

          <li>
            <Link to="/services">
              Services
            </Link>
          </li>

          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}

        <div className="right-section">
          <div className="phone-box">
            <div className="phone-icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>+91 87907 96753</h4>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <Link to="/sell">
          <button className="property-btn">
            List Your Property
          </button>
          </Link>
        </div>

        {/* Mobile */}

        <div
          className="menu-icon"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </div>
      </nav>

      <style>{`
        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:90px;
          background:white;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:0 5%;
          z-index:1000;
          transition:.3s;
          overflow:visible;
        }

        .navbar-scrolled{
          background:rgba(255,255,255,.97);
          box-shadow:0 5px 25px rgba(0,0,0,.1);
        }

        .logo-section{
          display:flex;
          align-items:center;
          gap:0;
        }

        .logo-section img{
          width:170px;
          height:170px;
          object-fit:contain;
          margin-top:10px;
          flex-shrink:0;
        }

        .logo1{
          margin-left:-55px;
        }

        .logo-section h2{
          margin:0;
          color:#0B1F3A;
          font-size:32px;
          font-weight:700;
          white-space:nowrap;
        }

        .logo-section span{
          color:#D4AF37;
        }

        .logo-section p{
          margin:0;
          color:#666;
          font-size:13px;
        }

        .nav-links{
          display:flex;
          gap:28px;
          list-style:none;
        }

        .nav-links a{
          text-decoration:none;
          color:#111;
          font-weight:500;
          position:relative;
          transition:.3s;
        }

        .nav-links a:hover{
          color:#D4AF37;
        }

        .active-link{
          color:#D4AF37 !important;
        }

        .active-link::after{
          content:"";
          position:absolute;
          bottom:-10px;
          left:0;
          width:100%;
          height:3px;
          background:#D4AF37;
          border-radius:5px;
        }

        .right-section{
          display:flex;
          align-items:center;
          gap:20px;
        }

        .phone-box{
          display:flex;
          align-items:center;
          gap:10px;
        }

        .phone-icon{
          width:50px;
          height:50px;
          border:1px solid #ddd;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#D4AF37;
        }

        .phone-box h4{
          margin:0;
          color:#0B1F3A;
        }

        .phone-box p{
          margin:0;
          font-size:12px;
          color:#666;
        }

        .property-btn{
          background:#0B1F3A;
          color:white;
          border:none;
          padding:14px 24px;
          border-radius:8px;
          cursor:pointer;
          font-weight:600;
          transition:.3s;
        }

        .property-btn:hover{
          background:#D4AF37;
          color:#0B1F3A;
        }

        .menu-icon{
          display:none;
          font-size:28px;
          cursor:pointer;
        }

        /* Large Laptop */

        @media(max-width:1200px){

          .phone-box{
            display:none;
          }

          .nav-links{
            gap:18px;
          }

          .logo-section img{
            width:150px;
            height:150px;
          }

          .logo1{
            margin-left:-45px;
          }

          .logo-section h2{
            font-size:28px;
          }
        }

        /* Tablet */

        @media(max-width:992px){

          .menu-icon{
            display:block;
            z-index:1100;
          }

          .right-section{
            display:none;
          }

          .logo-section img{
            width:140px;
            height:140px;
          }

          .logo1{
            margin-left:-40px;
          }

          .logo-section h2{
            font-size:24px;
          }

          .nav-links{
            position:fixed;
            top:90px;
            right:-100%;
            width:280px;
            height:100vh;
            background:white;
            flex-direction:column;
            gap:25px;
            padding:40px;
            transition:.4s;
            box-shadow:-5px 0 20px rgba(0,0,0,.1);
          }

          .nav-links.active{
            right:0;
          }
        }

        /* Mobile */

        @media(max-width:768px){

          .navbar{
            padding:0 15px;
          }

          .logo-section img{
            width:110px;
            height:110px;
            margin-top:5px;
          }

          .logo1{
            margin-left:-30px;
          }

          .logo-section h2{
            font-size:20px;
          }

          .logo-section p{
            display:none;
          }

          .menu-icon{
            font-size:24px;
          }

          .nav-links{
            width:250px;
            padding:30px;
          }
        }

        /* Small Mobile */

        @media(max-width:480px){

          .navbar{
            padding:0 10px;
          }

          .logo-section img{
            width:95px;
            height:95px;
          }

          .logo1{
            margin-left:-25px;
          }

          .logo-section h2{
            font-size:18px;
          }

          .nav-links{
            width:220px;
          }
        }
        `}</style>
    </>
  );
}

export default Navbar;