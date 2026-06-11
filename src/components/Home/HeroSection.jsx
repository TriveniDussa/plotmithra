import {
  FaCheckCircle,
  FaHome,
  FaHandshake,
  FaShieldAlt
} from "react-icons/fa";
import heroImage from "../../assets/images/hero.jpg";

function HeroSection() {
  return (
    <>
      <section className="hero">

        {/* Full-bleed background image */}
        <div className="hero-bg" />
        <div
          className="hero-bg"
          style={{
            background: `url(${heroImage}) center/cover no-repeat`,
          }}
        />

        {/* Dark overlay only on left side */}
        <div className="hero-overlay" />

        <div className="hero-content">

          <div className="trust-badge">
            ⭐ Trusted by 15,000+ Happy Clients
          </div>

          <h1>
            Find Your
            <br />
            <span>Perfect Property</span>
          </h1>

          <p>
            Discover premium plots, villas, apartments and
            commercial properties with verified listings
            across India. Buy, sell and rent properties
            confidently with PlotMithra.
          </p>

          <div className="features">

            <div className="feature">
              <div className="feature-icon-wrap">
                <FaHome className="feature-icon" />
              </div>
              <div>
                <div className="feature-title">Verified Properties</div>
                <div className="feature-sub">100% Verified Listings</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-wrap">
                <FaCheckCircle className="feature-icon" />
              </div>
              <div>
                <div className="feature-title">Best Price</div>
                <div className="feature-sub">At Most Competitive Prices</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-wrap">
                <FaHandshake className="feature-icon" />
              </div>
              <div>
                <div className="feature-title">Expert Guidance</div>
                <div className="feature-sub">We're Here to Help You</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon-wrap">
                <FaShieldAlt className="feature-icon" />
              </div>
              <div>
                <div className="feature-title">Secure Deals</div>
                <div className="feature-sub">Safe & Transparent Transactions</div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 8% 60px;
          overflow: hidden;
        }

        /* Full-bleed background image covering entire hero */
        .hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
        /* Gradient overlay: dark on left fading to transparent on right */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(11, 31, 58, 0.92) 0%,
            rgba(11, 31, 58, 0.80) 35%,
            rgba(11, 31, 58, 0.30) 65%,
            rgba(11, 31, 58, 0.05) 100%
          );
          z-index: 1;
        }

        /* Content sits above overlay */
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 580px;
        }

        .trust-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 10px 20px;
          border-radius: 30px;
          margin-bottom: 25px;
          font-weight: 600;
          color: #fff;
          font-size: 14px;
        }

        .hero-content h1 {
          font-size: 72px;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 20px;
          font-weight: 800;
        }

        .hero-content span {
          color: #D4AF37;
        }

        .hero-content p {
          font-size: 17px;
          color: rgba(255, 255, 255, 0.80);
          line-height: 1.8;
          margin-bottom: 35px;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .feature {
          background: rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          padding: 16px 18px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 14px;
          transition: 0.3s;
          cursor: pointer;
        }

        .feature:hover {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .feature-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #0B1F3A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-icon {
          font-size: 20px;
          color: #D4AF37;
        }

        .feature-title {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }

        .feature-sub {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.65);
          margin-top: 2px;
          line-height: 1.4;
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .hero-content h1 { font-size: 60px; }
        }

        @media (max-width: 992px) {
          .hero {
            padding-top: 130px;
            justify-content: center;
            text-align: center;
          }
          .hero-content { max-width: 100%; }
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(11, 31, 58, 0.88) 0%,
              rgba(11, 31, 58, 0.60) 60%,
              rgba(11, 31, 58, 0.40) 100%
            );
          }
          .feature { justify-content: flex-start; }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 120px 5% 50px;
            min-height: 100svh;
          }
          .hero-content h1 { font-size: 42px; }
          .hero-content p { font-size: 15px; }
          .features { grid-template-columns: 1fr; }
          .feature { justify-content: flex-start; }
        }

        @media (max-width: 480px) {
          .hero-content h1 { font-size: 34px; }
          .trust-badge { font-size: 12px; }
        }
      `}</style>
    </>
  );
}

export default HeroSection;
