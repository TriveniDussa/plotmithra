import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">

        <div className="footer-container">

          <div className="footer-box">

            <h2>
              Plot<span>Mithra</span>
            </h2>

            <p>
              Your trusted real estate partner for
              buying, selling and renting premium
              properties across India.
            </p>

            <div className="social-icons">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

            </div>

          </div>

          <div className="footer-box">

            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>Properties</li>
              <li>Buy</li>
              <li>Rent</li>
              <li>Sell</li>
            </ul>

          </div>

          <div className="footer-box">

            <h3>Services</h3>

            <ul>
              <li>Property Sales</li>
              <li>Property Rentals</li>
              <li>Property Management</li>
              <li>Legal Assistance</li>
              <li>Investment Advice</li>
            </ul>

          </div>

          <div className="footer-box">

            <h3>Contact Us</h3>

            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>

            <div className="contact-item">
              <FaEnvelope />
              <span>
                support@plotmithra.com
              </span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>
                Hyderabad, Telangana
              </span>
            </div>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 PlotMithra. All Rights Reserved.
        </div>

      </footer>

      <style>{`
        .footer{
          background:#071427;
          color:white;
          padding-top:70px;
        }

        .footer-container{
          width:90%;
          margin:auto;
          display:grid;
          grid-template-columns:2fr 1fr 1fr 1.5fr;
          gap:40px;
          padding-bottom:50px;
        }

        .footer-box h2{
          font-size:34px;
          margin-bottom:15px;
        }

        .footer-box h2 span{
          color:#D4AF37;
        }

        .footer-box p{
          color:#cbd5e1;
          line-height:1.8;
        }

        .footer-box h3{
          margin-bottom:20px;
          color:#fff;
        }

        .footer-box ul{
          list-style:none;
          padding:0;
        }

        .footer-box ul li{
          margin-bottom:12px;
          color:#cbd5e1;
          cursor:pointer;
          transition:.3s;
        }

        .footer-box ul li:hover{
          color:#D4AF37;
        }

        .social-icons{
          display:flex;
          gap:12px;
          margin-top:20px;
        }

        .social-icons a{
          width:40px;
          height:40px;
          border-radius:50%;
          background:#0B1F3A;
          display:flex;
          align-items:center;
          justify-content:center;
          color:white;
          transition:.3s;
        }

        .social-icons a:hover{
          background:#D4AF37;
          color:#0B1F3A;
        }

        .contact-item{
          display:flex;
          gap:12px;
          margin-bottom:18px;
          color:#cbd5e1;
        }

        .contact-item svg{
          color:#D4AF37;
          margin-top:4px;
        }

        .footer-bottom{
          border-top:1px solid rgba(255,255,255,.1);
          text-align:center;
          padding:20px;
          color:#cbd5e1;
        }

        @media(max-width:992px){

          .footer-container{
            grid-template-columns:repeat(2,1fr);
          }

        }

        @media(max-width:768px){

          .footer-container{
            grid-template-columns:1fr;
          }

          .footer-box{
            text-align:center;
          }

          .social-icons{
            justify-content:center;
          }

          .contact-item{
            justify-content:center;
          }

        }
      `}</style>
    </>
  );
}

export default Footer;