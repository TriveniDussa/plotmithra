import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import WhatsAppButton from "../components/Common/WhatsAppButton";
import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMoneyBillWave,
  FaKey,
  FaUniversity,
  FaBalanceScale,
  FaChartLine
} from "react-icons/fa";
import about1 from "../assets/images/about1.jpg";
import pro4 from "../assets/images/pro4.jpg";

function ServicesPage() {
  const navigate = useNavigate();

  const services = [
  {
    icon: <FaHome style={{ color: "#2563EB" }} />,
    title: "Buy Property",
    description:
      "Find verified plots, apartments, villas, and commercial properties curated to match your budget and lifestyle.",
    tags: ["Plots", "Apartments", "Villas"],
  },

  {
    icon: <FaMoneyBillWave style={{ color: "#16A34A" }} />,
    title: "Sell Property",
    description:
      "List your property and connect with thousands of genuine buyers. We handle marketing, viewings, and negotiations.",
    tags: ["Free Listing", "Fast Sale", "Best Price"],
  },

  {
    icon: <FaKey style={{ color: "#F59E0B" }} />,
    title: "Rent Property",
    description:
      "Explore rental homes, apartments, and office spaces with verified landlords across prime locations.",
    tags: ["Residential", "Commercial", "Short-term"],
  },

  {
    icon: <FaUniversity style={{ color: "#8B5CF6" }} />,
    title: "Home Loans",
    description:
      "Get expert assistance with home loans from trusted banking partners at competitive interest rates.",
    tags: ["Quick Approval", "Low EMI", "All Banks"],
  },

  {
    icon: <FaBalanceScale style={{ color: "#EF4444" }} />,
    title: "Legal Support",
    description:
      "Property verification, title checks, registration assistance, and complete legal guidance.",
    tags: ["Title Check", "Registration", "Agreement"],
  },

  {
    icon: <FaChartLine style={{ color: "#06B6D4" }} />,
    title: "Property Valuation",
    description:
      "Know the true market value of any property before you invest with expert valuation services.",
    tags: ["Free Report", "Market Data", "Certified"],
  },
];

  

  const steps = [
    "Browse Listings",
    "Connect with Experts",
    "Legal & Documentation",
    "Close the Deal",
  ];

  const stats = [
    { value: "15,000+", label: "Happy Clients" },
    { value: "750+",    label: "Premium Listings" },
    { value: "12+",     label: "Years Experience" },
    { value: "4.9★",   label: "Average Rating" },
  ];

  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="sv-hero">
        <div className="sv-hero-overlay" />
        <div className="sv-hero-content">
          <span className="sv-eyebrow">WHAT WE OFFER</span>
          <h1>Our <span className="sv-gold">Services</span></h1>
          <p>Complete real estate solutions for buyers, sellers, and investors across India</p>
        </div>
      </section>

      {/* ── Process Bar ── */}
      <div className="sv-process">
        {steps.map((step, i) => (
          <div key={i} className="sv-step">
            <div className="sv-step-num">{i + 1}</div>
            <span className="sv-step-label">{step}</span>
          </div>
        ))}
      </div>

      {/* ── Services Grid ── */}
      <section className="sv-main">
        <div className="sv-main-header">
          <span className="sv-eyebrow">OUR SERVICES</span>
          <h2>Everything You Need in <span className="sv-gold">One Place</span></h2>
          <p>From finding your dream home to securing the best deal — we handle it all</p>
        </div>

        <div className="sv-grid">
          {services.map((s, i) => (
            <div key={i} className="sv-card">
              <div className="sv-card-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <div className="sv-tag-row">
                {s.tags.map((tag, j) => (
                  <span key={j} className="sv-tag">{tag}</span>
                ))}
              </div>
              <button
      className="sv-learn-btn"
      onClick={() => navigate("/contact")}
    >
      Learn More →
    </button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why PlotMithra ── */}
      <section className="sv-why">
        <div className="sv-why-inner">
          <div className="sv-why-text">
            <span className="sv-eyebrow">WHY PLOTMITHRA</span>
            <h2>India's Most Trusted Real Estate Platform</h2>
            <p>
              Over 12 years of experience, 750+ premium listings, and a team of dedicated
              experts — we're with you at every step of your property journey.
            </p>
            <button className="sv-why-btn" onClick={() => navigate("/properties")}>
              View All Properties
            </button>
          </div>
          <div className="sv-why-stats">
            {stats.map((s, i) => (
              <div key={i} className="sv-mini-stat">
                <div className="sv-mini-stat-val">{s.value}</div>
                <div className="sv-mini-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="sv-cta-banner">
        <div className="sv-cta-overlay" />
        <div className="sv-cta-content">
          <h2>Ready to Start Your Property Journey?</h2>
          <p>Talk to an expert today — free consultation, zero obligation</p>
          <div className="sv-cta-btns">
            <button className="sv-cta-primary" onClick={() => navigate("/properties")}>
              Explore Properties
            </button>
            <button className="sv-cta-secondary" onClick={() => navigate("/contact")}>
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />

      <style>{`
        /* ── Hero ── */
        .sv-hero {
          position: relative;
          height: 400px;
          background: url(${pro4}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .sv-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.78);
        }
        .sv-hero-content {
          position: relative;
          z-index: 1;
          color: white;
          padding-top: 80px;
        }
        .sv-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          color: #D4AF37;
          display: block;
          margin-bottom: 14px;
        }
        .sv-hero-content h1 {
          font-size: 52px;
          font-weight: 800;
          color: white;
          margin: 0 0 14px;
        }
        .sv-hero-content p {
          font-size: 16px;
          color: rgba(255,255,255,0.72);
          margin: 0;
          max-width: 560px;
        }
        .sv-gold { color: #D4AF37; }

        /* ── Process Bar ── */
        .sv-process {
          background: #0B1F3A;
          padding: 0 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .sv-step {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px 0;
          border-right: 1px solid rgba(255,255,255,0.1);
          justify-content: center;
        }
        .sv-step:last-child { border-right: none; }
        .sv-step-num {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #D4AF37;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .sv-step-label {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        /* ── Services Main ── */
        .sv-main {
          padding: 90px 8%;
          background: #F8F9FC;
        }
        .sv-main-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .sv-main-header .sv-eyebrow { color: #2F55D4; }
        .sv-main-header h2 {
          font-size: 38px;
          font-weight: 800;
          color: #0B1F3A;
          margin: 0 0 12px;
        }
        .sv-main-header p {
          color: #666;
          font-size: 15px;
          max-width: 600px;
          margin: 0 auto;
        }

        /* ── Cards Grid ── */
        .sv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }
        .sv-card {
          background: white;
          border-radius: 20px;
          padding: 36px 28px 28px;
          border: 1.5px solid #eee;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .sv-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: #D4AF37;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .sv-card:hover::before { transform: scaleX(1); }
        .sv-card:hover {
          transform: translateY(-8px);
          border-color: #D4AF37;
          box-shadow: 0 20px 50px rgba(0,0,0,0.10);
        }
        .sv-card-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: #FBF5E0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          font-size: 30px;
        }
        .sv-card h3 {
          color: #0B1F3A;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .sv-card p {
          color: #666;
          font-size: 14px;
          line-height: 1.8;
          margin-bottom: 18px;
        }
        .sv-tag-row {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }
        .sv-tag {
          background: #F0F2F8;
          color: #0B1F3A;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }
        .sv-learn-btn {
          background: none;
          border: 1.5px solid #0B1F3A;
          color: #0B1F3A;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .sv-learn-btn:hover { background: #0B1F3A; color: white; }

        /* ── Why PlotMithra ── */
        .sv-why { padding: 80px 8%; background: white; }
        .sv-why-inner {
          background: #0B1F3A;
          border-radius: 24px;
          padding: 60px 6%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }
        .sv-why-text .sv-eyebrow { color: #D4AF37; }
        .sv-why-text h2 {
          font-size: 34px;
          font-weight: 800;
          color: white;
          margin: 0 0 18px;
          line-height: 1.25;
        }
        .sv-why-text p {
          color: rgba(255,255,255,0.70);
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .sv-why-btn {
          background: #D4AF37;
          color: white;
          border: none;
          padding: 13px 26px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .sv-why-btn:hover { background: #c4a030; }
        .sv-why-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .sv-mini-stat {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 22px 20px;
        }
        .sv-mini-stat-val {
          font-size: 26px;
          font-weight: 800;
          color: #D4AF37;
          line-height: 1;
        }
        .sv-mini-stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          margin-top: 5px;
        }

        /* ── CTA Banner ── */
        .sv-cta-banner {
          position: relative;
          height: 300px;
          background: url(${about1}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .sv-cta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.84);
        }
        .sv-cta-content {
          position: relative;
          z-index: 1;
          color: white;
        }
        .sv-cta-content h2 {
          font-size: 34px;
          font-weight: 800;
          margin-bottom: 10px;
        }
        .sv-cta-content p {
          color: rgba(255,255,255,0.70);
          font-size: 15px;
          margin-bottom: 28px;
        }
        .sv-cta-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .sv-cta-primary {
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
        .sv-cta-primary:hover { background: #c4a030; }
        .sv-cta-secondary {
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
        .sv-cta-secondary:hover { background: rgba(255,255,255,0.10); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sv-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .sv-why-inner { grid-template-columns: 1fr; gap: 30px; }
          .sv-process { grid-template-columns: repeat(2, 1fr); }
          .sv-step { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        @media (max-width: 768px) {
          .sv-hero-content h1 { font-size: 34px; }
          .sv-grid { grid-template-columns: 1fr; }
          .sv-process { grid-template-columns: 1fr; }
          .sv-cta-btns { flex-direction: column; align-items: center; }
          .sv-main { padding: 60px 5%; }
          .sv-why { padding: 60px 5%; }
        }
      `}</style>
    </>
  );
}

export default ServicesPage;
