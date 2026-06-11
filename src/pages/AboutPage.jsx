import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import WhatsAppButton from "../components/Common/WhatsAppButton";
import { FaCheckCircle, FaHandshake, FaShieldAlt, FaStar, FaHome, FaUsers, FaTrophy, FaArrowRight, FaRocket, FaBullseye, } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";


function AboutPage() {
  const navigate = useNavigate();

  const stats = [
    { icon: <FaUsers />, value: "15,000+", label: "Happy Clients" },
    { icon: <FaHome />,  value: "750+",    label: "Premium Properties" },
    { icon: <FaTrophy />,value: "12+",     label: "Years Experience" },
    { icon: <FaStar />,  value: "4.9★",    label: "Average Rating" },
  ];

  const values = [
  {
    icon: <FaBullseye style={{ color: "#2563EB" }} />,
    title: "Our Mission",
    desc: "To provide a transparent and reliable platform where users can discover and invest in quality real estate with complete confidence."
  },

  {
    icon: <FaRocket style={{ color: "#F59E0B" }} />,
    title: "Our Vision",
    desc: "To become India's most trusted real estate marketplace — connecting buyers, sellers and investors seamlessly."
  },

  {
    icon: <FaHandshake style={{ color: "#10B981" }} />,
    title: "Our Values",
    desc: "Trust, Integrity, Customer Satisfaction and Innovation drive everything we do at PlotMithra."
  }
];

  const reasons = [
    { icon: <FaCheckCircle />, title: "Verified Listings", desc: "Every property undergoes a thorough verification process before it appears on our platform." },
    { icon: <FaShieldAlt />,   title: "Secure Transactions", desc: "End-to-end support and legal guidance to ensure safe and transparent property deals." },
    { icon: <FaHandshake />,   title: "Expert Guidance", desc: "Our dedicated team of real estate professionals is with you from enquiry to possession." },
    { icon: <FaStar />,        title: "Best Market Prices", desc: "We work hard to bring you the most competitive pricing and premium investment opportunities." },
    { icon: <FaHome />,        title: "Wide Inventory", desc: "Plots, villas, apartments and commercial spaces — all in one place across India." },
    { icon: <FaUsers />,       title: "15,000+ Happy Clients", desc: "A growing community of satisfied buyers and sellers who trust PlotMithra." },
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="ab-hero">
        <div className="ab-hero-overlay" />
        <div className="ab-hero-content">
          <span className="ab-eyebrow">WHO WE ARE</span>
          <h1>About <span className="ab-gold">PlotMithra</span></h1>
          <p>Your trusted partner in finding the perfect property across India</p>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="ab-stats-bar">
        {stats.map((s, i) => (
          <div key={i} className="ab-stat">
            <div className="ab-stat-icon">{s.icon}</div>
            <div>
              <div className="ab-stat-value">{s.value}</div>
              <div className="ab-stat-label">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Who We Are ── */}
      <section className="ab-about">
        <div className="ab-about-text">
          <span className="ab-section-eyebrow">OUR STORY</span>
          <h2>Building Trust in <span className="ab-gold">Real Estate</span></h2>
          <p>PlotMithra is a modern real estate platform dedicated to helping buyers, sellers, and investors find the perfect property. We provide verified listings, premium plots, villas, apartments, and commercial spaces across India.</p>
          <p>Our mission is to simplify property transactions with transparency, trust, and technology-driven solutions — making the dream of owning a home a reality for thousands of families.</p>
          <ul className="ab-checklist">
            <li><FaCheckCircle className="ab-check-icon" /> 100% verified property listings</li>
            <li><FaCheckCircle className="ab-check-icon" /> Dedicated relationship managers</li>
            <li><FaCheckCircle className="ab-check-icon" /> Legal & documentation support</li>
            <li><FaCheckCircle className="ab-check-icon" /> Post-purchase assistance</li>
          </ul>
          <button className="ab-cta-btn" onClick={() => navigate("/contact")}>
            Get in Touch <FaArrowRight className="ab-btn-icon" />
          </button>
        </div>

        <div className="ab-about-img-wrap">
          <img src={about1} alt="About PlotMithra" />
          <div className="ab-img-badge">
            <div className="ab-img-badge-num">12+</div>
            <div className="ab-img-badge-text">Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ── */}
      <section className="ab-values">
        <div className="ab-values-header">
          <span className="ab-section-eyebrow">WHAT DRIVES US</span>
          <h2>Our Mission, Vision & Values</h2>
        </div>
        <div className="ab-values-grid">
          {values.map((v, i) => (
            <div key={i} className="ab-value-card">
              <div className="ab-value-emoji">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="ab-why">
        <div className="ab-why-header">
          <span className="ab-section-eyebrow">WHY PLOTMITHRA</span>
          <h2>Why Thousands Choose <span className="ab-gold">Us</span></h2>
        </div>
        <div className="ab-why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="ab-why-card">
              <div className="ab-why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="ab-cta-banner">
        <div className="ab-cta-overlay" />
        <div className="ab-cta-content">
          <h2>Ready to Find Your Dream Property?</h2>
          <p>Browse thousands of verified listings across India</p>
          <div className="ab-cta-btns">
            <button className="ab-cta-primary" onClick={() => navigate("/properties")}>Explore Properties</button>
            <button className="ab-cta-secondary" onClick={() => navigate("/contact")}>Contact Us</button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style>{`
        /* ── Hero ── */
        .ab-hero {
          position: relative;
          height: 420px;
          background: url(${about2}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .ab-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.75);
        }
        .ab-hero-content {
          position: relative;
          z-index: 1;
          color: white;
          padding-top: 80px;
        }
        .ab-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #D4AF37;
          display: block;
          margin-bottom: 14px;
        }
        .ab-hero-content h1 {
          font-size: 54px;
          font-weight: 800;
          margin: 0 0 14px;
          color: white;
        }
        .ab-hero-content p {
          font-size: 17px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .ab-gold { color: #D4AF37; }

        /* ── Stats bar ── */
        .ab-stats-bar {
          background: #0B1F3A;
          padding: 0 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .ab-stat {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 28px 0;
          border-right: 1px solid rgba(255,255,255,0.1);
          justify-content: center;
        }
        .ab-stat:last-child { border-right: none; }
        .ab-stat-icon {
          font-size: 28px;
          color: #D4AF37;
        }
        .ab-stat-value {
          font-size: 24px;
          font-weight: 800;
          color: white;
          line-height: 1;
        }
        .ab-stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin-top: 4px;
        }

        /* ── About ── */
        .ab-about {
          padding: 90px 8%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          background: white;
        }
        .ab-section-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #2F55D4;
          display: block;
          margin-bottom: 12px;
        }
        .ab-about-text h2 {
          font-size: 38px;
          font-weight: 800;
          color: #0B1F3A;
          margin: 0 0 20px;
          line-height: 1.2;
        }
        .ab-about-text p {
          color: #555;
          line-height: 1.9;
          font-size: 15px;
          margin-bottom: 16px;
        }
        .ab-checklist {
          list-style: none;
          padding: 0;
          margin: 20px 0 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ab-checklist li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #0B1F3A;
        }
        .ab-check-icon { color: #25D366; font-size: 16px; flex-shrink: 0; }
        .ab-cta-btn {
          background: #0B1F3A;
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: background 0.2s, transform 0.2s;
        }
        .ab-cta-btn:hover { background: #162f55; transform: translateY(-2px); }
        .ab-btn-icon { font-size: 13px; }
        .ab-about-img-wrap {
          position: relative;
        }
        .ab-about-img-wrap img {
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.15);
        }
        .ab-img-badge {
          position: absolute;
          bottom: -20px;
          left: -20px;
          background: #D4AF37;
          color: white;
          padding: 18px 24px;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(212,175,55,0.4);
        }
        .ab-img-badge-num {
          font-size: 28px;
          font-weight: 800;
          line-height: 1;
        }
        .ab-img-badge-text { font-size: 12px; font-weight: 600; margin-top: 4px; }

        /* ── Values ── */
        .ab-values {
          padding: 90px 8%;
          background: #F8F9FC;
        }
        .ab-values-header, .ab-why-header, .ab-team-header {
          text-align: center;
          margin-bottom: 50px;
        }
        .ab-values-header h2, .ab-why-header h2, .ab-team-header h2 {
          font-size: 36px;
          font-weight: 800;
          color: #0B1F3A;
          margin: 10px 0 0;
        }
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ab-value-card {
          background: white;
          padding: 36px 28px;
          border-radius: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .ab-value-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.12); }
        .ab-value-emoji { font-size: 40px; margin-bottom: 16px; }
        .ab-value-card h3 { color: #0B1F3A; font-size: 18px; font-weight: 700; margin-bottom: 12px; }
        .ab-value-card p { color: #666; font-size: 14px; line-height: 1.8; margin: 0; }

        /* ── Why ── */
        .ab-why {
          padding: 90px 8%;
          background: white;
        }
        .ab-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .ab-why-card {
          background: #F8F9FC;
          border-radius: 16px;
          padding: 28px 24px;
          border: 1.5px solid #eee;
          transition: border-color 0.2s, transform 0.2s;
        }
        .ab-why-card:hover { border-color: #D4AF37; transform: translateY(-5px); }
        .ab-why-icon {
          font-size: 26px;
          color: #D4AF37;
          margin-bottom: 14px;
        }
        .ab-why-card h3 { color: #0B1F3A; font-size: 16px; font-weight: 700; margin-bottom: 8px; }
        .ab-why-card p { color: #666; font-size: 14px; line-height: 1.7; margin: 0; }

        /* ── CTA Banner ── */
        .ab-cta-banner {
          position: relative;
          height: 300px;
          background: url(${about1}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .ab-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.82);
        }
        .ab-cta-content {
          position: relative;
          z-index: 1;
          color: white;
        }
        .ab-cta-content h2 { font-size: 34px; font-weight: 800; margin-bottom: 10px; }
        .ab-cta-content p { color: rgba(255,255,255,0.7); font-size: 15px; margin-bottom: 28px; }
        .ab-cta-btns { display: flex; gap: 16px; justify-content: center; }
        .ab-cta-primary {
          background: #D4AF37;
          color: white;
          border: none;
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ab-cta-primary:hover { background: #c4a030; }
        .ab-cta-secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .ab-cta-secondary:hover { background: rgba(255,255,255,0.1); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ab-why-grid, .ab-values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .ab-about { grid-template-columns: 1fr; }
          .ab-img-badge { left: 0; bottom: -10px; }
          .ab-stats-bar { grid-template-columns: repeat(2, 1fr); }
          .ab-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        @media (max-width: 768px) {
          .ab-hero-content h1 { font-size: 34px; }
          .ab-values-grid, .ab-why-grid, .ab-team-grid { grid-template-columns: 1fr; }
          .ab-cta-btns { flex-direction: column; align-items: center; }
          .ab-about { padding: 60px 5%; }
        }
      `}</style>
    </>
  );
}

export default AboutPage;
