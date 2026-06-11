import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import properties from "../data/properties";
import PropertyCard from "../components/Property/PropertyCard";
import { FaSearch, FaMapMarkerAlt, FaSlidersH, FaHome, FaRupeeSign, FaBuilding,FaHouseUser,FaDrawPolygon,FaStore } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";
import about1 from "../assets/images/about1.jpg";

function BuyPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const filtered = properties.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCity = city === "" || p.location.toLowerCase().includes(city.toLowerCase());
    const matchType = type === "" || (p.type || "").toLowerCase() === type.toLowerCase();
    return matchSearch && matchCity && matchType;
  });

  const categories = [
  {
    label: "Apartments",
    icon: <FaBuilding style={{ color: "#2563EB" }} />,
    desc: "Modern Living"
  },
  {
    label: "Villas",
    icon: <FaHouseUser style={{ color: "#16A34A" }} />,
    desc: "Luxury Lifestyle"
  },
  {
    label: "Independent House",
    icon: <FaHome style={{ color: "#F59E0B" }} />,
    desc: "Complete Privacy"
  },
  {
    label: "Plots",
    icon: <FaDrawPolygon style={{ color: "#8B5CF6" }} />,
    desc: "Invest in Land"
  },
  {
    label: "Commercial",
    icon: <FaStore style={{ color: "#EF4444" }} />,
    desc: "Grow Your Business"
  }
];
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bp-hero">
        <div className="bp-hero-overlay" />
        <div className="bp-hero-content">
          <span className="bp-eyebrow">BUY PROPERTY</span>
          <h1>Properties <span className="bp-gold">For Sale</span></h1>
          <p>Browse verified plots, villas, apartments & commercial spaces across India</p>
        </div>
      </section>

      {/* Stats */}
      <div className="bp-stats">
        {[["750+","Premium Properties"],["15,000+","Happy Buyers"],["50+","Cities"],["100%","Verified Listings"]].map(([v,l],i) => (
          <div key={i} className="bp-stat">
            <div className="bp-stat-value">{v}</div>
            <div className="bp-stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <section className="bp-cats">
        {categories.map((c, i) => (
          <div key={i} className="bp-cat" onClick={() => setType(c.label)}>
            <div className="bp-cat-icon">{c.icon}</div>
            <div className="bp-cat-label">{c.label}</div>
            <div className="bp-cat-desc">{c.desc}</div>
          </div>
        ))}
      </section>

      {/* Listings */}
      <section className="bp-section">

        {/* Filter bar */}
        <div className="bp-filter-bar">
          <div className="bp-filter-field">
            <FaSearch className="bp-filter-icon" />
            <input
              type="text"
              placeholder="Search properties..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="bp-filter-field">
            <FaMapMarkerAlt className="bp-filter-icon" />
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">All Cities</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="vijayawada">Vijayawada</option>
            </select>
          </div>

          <div className="bp-filter-field">
            <FaHome className="bp-filter-icon" />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All Types</option>
              <option>Apartments</option>
              <option>Villas</option>
              <option>Independent House</option>
              <option>Plots</option>
              <option>Commercial</option>
            </select>
          </div>

          <div className="bp-filter-field">
            <FaRupeeSign className="bp-filter-icon" />
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">All Budgets</option>
              <option>Under ₹50 L</option>
              <option>₹50 L – ₹1 Cr</option>
              <option>₹1 Cr – ₹3 Cr</option>
              <option>Above ₹3 Cr</option>
            </select>
          </div>

          <button className="bp-clear-btn" onClick={() => { setSearch(""); setCity(""); setType(""); setBudget(""); }}>
            Clear
          </button>
        </div>

        <div className="bp-results-row">
          <p className="bp-results-count">Showing <strong>{filtered.length}</strong> properties for sale</p>
          <select className="bp-sort">
            <option>Sort: Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <div className="bp-grid">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="bp-empty">
            <div>🏠</div>
            <h3>No properties found</h3>
            <p>Try adjusting your search or filters</p>
            <button className="bp-reset-btn" onClick={() => { setSearch(""); setCity(""); setType(""); setBudget(""); }}>
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* CTA */}
      <section className="bp-cta">
        <div className="bp-cta-overlay" />
        <div className="bp-cta-content">
          <h2>Want to Sell Your Property?</h2>
          <p>List for free and reach thousands of verified buyers across India</p>
          <div className="bp-cta-btns">
            <button className="bp-cta-primary" onClick={() => navigate("/sell")}>List Your Property</button>
            <button className="bp-cta-secondary" onClick={() => navigate("/contact")}>Talk to an Expert</button>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .bp-hero {
          position: relative;
          height: 360px;
          background: url(${heroImage}) center/cover no-repeat;
          display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .bp-hero-overlay { position: absolute; inset: 0; background: rgba(11,31,58,0.78); }
        .bp-hero-content { position: relative; z-index: 1; color: white; padding-top: 80px; }
        .bp-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #D4AF37; display: block; margin-bottom: 12px; }
        .bp-hero-content h1 { font-size: 48px; font-weight: 800; margin: 0 0 12px; color: white; }
        .bp-hero-content p { font-size: 16px; color: rgba(255,255,255,0.75); margin: 0; }
        .bp-gold { color: #D4AF37; }

        /* Stats */
        .bp-stats {
          background: #0B1F3A;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 8%;
        }
        .bp-stat { padding: 26px 0; text-align: center; border-right: 1px solid rgba(255,255,255,0.1); }
        .bp-stat:last-child { border-right: none; }
        .bp-stat-value { font-size: 22px; font-weight: 800; color: #D4AF37; }
        .bp-stat-label { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; }

        /* Categories */
        .bp-cats {
          padding: 30px 8%;
          display: flex;
          gap: 16px;
          background: white;
          overflow-x: auto;
        }
        .bp-cat {
          flex: 1;
          min-width: 140px;
          background: #F8F9FC;
          border: 1.5px solid #eee;
          border-radius: 14px;
          padding: 20px 16px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s;
        }
        .bp-cat:hover { border-color: #D4AF37; transform: translateY(-4px); }
        .bp-cat-icon { font-size: 28px; margin-bottom: 8px; }
        .bp-cat-label { font-size: 14px; font-weight: 700; color: #0B1F3A; margin-bottom: 4px; }
        .bp-cat-desc { font-size: 12px; color: #999; }

        /* Section */
        .bp-section { padding: 50px 8% 80px; background: #F8F9FC; }

        .bp-filter-bar {
          display: flex; gap: 12px; align-items: center;
          background: white; border-radius: 14px; padding: 16px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08); margin-bottom: 24px; flex-wrap: wrap;
        }
        .bp-filter-field {
          display: flex; align-items: center; gap: 8px;
          border: 1.5px solid #e8e8e8; border-radius: 10px;
          padding: 10px 14px; background: #fafafa; flex: 1; min-width: 160px;
          transition: border-color 0.2s;
        }
        .bp-filter-field:focus-within { border-color: #0B1F3A; background: white; }
        .bp-filter-icon { color: #aaa; font-size: 13px; flex-shrink: 0; }
        .bp-filter-field input, .bp-filter-field select {
          border: none; outline: none; background: transparent;
          font-size: 14px; color: #333; width: 100%;
        }
        .bp-clear-btn {
          background: #0B1F3A; color: white; border: none;
          border-radius: 10px; padding: 12px 20px; font-size: 14px;
          font-weight: 600; cursor: pointer; white-space: nowrap; transition: background 0.2s;
        }
        .bp-clear-btn:hover { background: #162f55; }

        .bp-results-row {
          display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;
        }
        .bp-results-count { font-size: 14px; color: #666; }
        .bp-results-count strong { color: #0B1F3A; }
        .bp-sort {
          border: 1.5px solid #e8e8e8; border-radius: 8px;
          padding: 8px 12px; font-size: 13px; color: #333;
          outline: none; cursor: pointer;
        }

        .bp-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .bp-empty { text-align: center; padding: 80px 0; color: #999; }
        .bp-empty div { font-size: 52px; margin-bottom: 14px; }
        .bp-empty h3 { color: #0B1F3A; margin-bottom: 6px; }
        .bp-empty p { margin-bottom: 20px; }
        .bp-reset-btn {
          background: #0B1F3A; color: white; border: none;
          padding: 12px 24px; border-radius: 8px; font-size: 14px;
          font-weight: 600; cursor: pointer; transition: background 0.2s;
        }
        .bp-reset-btn:hover { background: #162f55; }

        /* CTA */
        .bp-cta {
          position: relative; height: 260px;
          background: url(${about1}) center/cover no-repeat;
          display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .bp-cta-overlay { position: absolute; inset: 0; background: rgba(11,31,58,0.82); }
        .bp-cta-content { position: relative; z-index: 1; color: white; }
        .bp-cta-content h2 { font-size: 30px; font-weight: 800; margin-bottom: 10px; }
        .bp-cta-content p { color: rgba(255,255,255,0.7); font-size: 15px; margin-bottom: 24px; }
        .bp-cta-btns { display: flex; gap: 14px; justify-content: center; }
        .bp-cta-primary {
          background: #D4AF37; color: white; border: none;
          padding: 13px 28px; border-radius: 10px; font-size: 15px;
          font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .bp-cta-primary:hover { background: #c4a030; }
        .bp-cta-secondary {
          background: transparent; color: white; border: 2px solid white;
          padding: 13px 28px; border-radius: 10px; font-size: 15px;
          font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .bp-cta-secondary:hover { background: rgba(255,255,255,0.1); }

        @media (max-width: 1200px) { .bp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .bp-hero-content h1 { font-size: 32px; }
          .bp-stats { grid-template-columns: repeat(2, 1fr); }
          .bp-grid { grid-template-columns: 1fr; }
          .bp-filter-field { min-width: 100%; }
          .bp-results-row { flex-direction: column; align-items: flex-start; gap: 10px; }
          .bp-cta-btns { flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  );
}

export default BuyPage;
