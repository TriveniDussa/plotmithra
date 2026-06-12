import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import {
  FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined,
  FaHeart, FaSearch, FaSlidersH, FaWhatsapp
} from "react-icons/fa";
import about1 from "../assets/images/about1.jpg";

import rent1 from "../assets/images/rent1.jpg";
import rent2 from "../assets/images/rent2.jpg";
import rent3 from "../assets/images/rent3.jpg";
import rent4 from "../assets/images/rent4.jpg";
import rent5 from "../assets/images/rent5.jpg";
import rent6 from "../assets/images/rent6.jpg";


const WHATSAPP_NUMBER = "919391275906";

function RentPage() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState({});
  const [search, setSearch] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const toggleLike = (i) => setLiked((p) => ({ ...p, [i]: !p[i] }));

  const rentals = [
    {
      title: "Luxury 3 BHK Apartment",
      location: "Gachibowli, Hyderabad",
      price: "₹ 25,000 / mo",
      beds: 3, baths: 2, area: "1400 Sq.ft",
      image: rent1,
      tag: "Available Now", city: "hyderabad",
    },
    {
      title: "Modern 2 BHK Villa",
      location: "Whitefield, Bangalore",
      price: "₹ 45,000 / mo",
      beds: 2, baths: 2, area: "1800 Sq.ft",
      image: rent2,
      tag: "Premium",city: "bangalore",
    },
    {
      title: "Cozy Family House",
      location: "MG Road, Vijayawada",
      price: "₹ 18,000 / mo",
      beds: 3, baths: 1, area: "1200 Sq.ft",
      image: rent3,
      tag: "Available Now", city: "vijayawada",
    },
    {
      title: "Studio Apartment",
      location: "Banjara Hills, Hyderabad",
      price: "₹ 12,000 / mo",
      beds: 1, baths: 1, area: "650 Sq.ft",
      image: rent4,
      tag: "Budget Pick", city: "hyderabad",
    },
    {
      title: "Spacious 4 BHK Flat",
      location: "Jubilee Hills, Hyderabad",
      price: "₹ 60,000 / mo",
      beds: 4, baths: 3, area: "2600 Sq.ft",
      image: rent5,
      tag: "Premium", city: "hyderabad",
    },
    {
      title: "Independent House",
      location: "Kondapur, Hyderabad",
      price: "₹ 32,000 / mo",
      beds: 3, baths: 2, area: "2000 Sq.ft",
      image: rent6,
      tag: "Available Now", city: "hyderabad",
    },
  ];

  const tagColors = {
    "Available Now": "#25D366",
    "Premium": "#D4AF37",
    "Budget Pick": "#2F55D4",
  };

  const filtered = rentals.filter((r) =>
    r.title.toLowerCase().includes(search.toLowerCase()) &&
    (cityFilter === "" || r.city === cityFilter)
  );

  const handleEnquire = (r) => {
    const text = `Hi! I'm interested in renting: *${r.title}* at ${r.location} for ${r.price}. Please share availability details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="rp-hero">
        <div className="rp-hero-overlay" />
        <div className="rp-hero-content">
          <span className="rp-eyebrow">RENTAL PROPERTIES</span>
          <h1>Find Your Perfect <span className="rp-gold">Rental Home</span></h1>
          <p>Discover verified rental properties at the best prices across top cities in India</p>
        </div>
      </section>

      {/* Stats */}
      <div className="rp-stats">
        {[["500+","Rental Listings"],["50+","Cities Covered"],["4.9★","Tenant Rating"],["24hr","Quick Response"]].map(([v,l],i) => (
          <div key={i} className="rp-stat">
            <div className="rp-stat-value">{v}</div>
            <div className="rp-stat-label">{l}</div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <section className="rp-section">
        <div className="rp-filter-bar">
          <div className="rp-filter-field">
            <FaSearch className="rp-filter-icon" />
            <input
              type="text"
              placeholder="Search by property name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="rp-filter-field">
            <FaMapMarkerAlt className="rp-filter-icon" />
            <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)}>
              <option value="">All Cities</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="vijayawada">Vijayawada</option>
            </select>
          </div>
          <div className="rp-filter-field">
            <FaSlidersH className="rp-filter-icon" />
            <select>
              <option>All Budgets</option>
              <option>Under ₹20,000</option>
              <option>₹20,000 – ₹40,000</option>
              <option>Above ₹40,000</option>
            </select>
          </div>
          <button className="rp-clear-btn" onClick={() => { setSearch(""); setCityFilter(""); }}>
            Clear
          </button>
        </div>

        <div className="rp-results-count">
          Showing <strong>{filtered.length}</strong> rental properties
        </div>

        {filtered.length > 0 ? (
          <div className="rp-grid">
            {filtered.map((r, i) => (
              <div key={i} className="rp-card">

                <div className="rp-img-box">
                  <img src={r.image} alt={r.title} />
                  <span className="rp-tag" style={{ background: tagColors[r.tag] || "#0B1F3A" }}>{r.tag}</span>
                  <button
                    className={`rp-heart ${liked[i] ? "liked" : ""}`}
                    onClick={() => toggleLike(i)}
                  >
                    <FaHeart />
                  </button>
                  <div className="rp-img-overlay" />
                </div>

                <div className="rp-content">
                  <div className="rp-title-row">
                    <h3>{r.title}</h3>
                    <span className="rp-price">{r.price}</span>
                  </div>

                  <p className="rp-location">
                    <FaMapMarkerAlt className="rp-loc-icon" /> {r.location}
                  </p>

                  <div className="rp-details">
                    <span><FaBed className="rp-det-icon" />{r.beds} Beds</span>
                    <span><FaBath className="rp-det-icon" />{r.baths} Baths</span>
                    <span><FaRulerCombined className="rp-det-icon" />{r.area}</span>
                  </div>

                  <div className="rp-card-btns">
                    <button className="rp-view-btn" onClick={() => navigate("/properties")}>
                      View Details
                    </button>
                    <button className="rp-wa-btn" onClick={() => handleEnquire(r)}>
                      <FaWhatsapp />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="rp-empty">
            <div>🏠</div>
            <h3>No properties found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="rp-cta">
        <div className="rp-cta-overlay" />
        <div className="rp-cta-content">
          <h2>Want to List Your Property for Rent?</h2>
          <p>Reach thousands of verified tenants across India — it's free</p>
          <button className="rp-cta-btn" onClick={() => navigate("/sell")}>
            List Your Property
          </button>
        </div>
      </section>

      <Footer />

      <style>{`
        .rp-hero {
          position: relative;
          height: 380px;
          background: url(${about1}) center/cover no-repeat;
          display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .rp-hero-overlay { position: absolute; inset: 0; background: rgba(11,31,58,0.78); }
        .rp-hero-content { position: relative; z-index: 1; color: white; padding-top: 80px; }
        .rp-eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 2px; color: #D4AF37; display: block; margin-bottom: 12px; }
        .rp-hero-content h1 { font-size: 48px; font-weight: 800; margin: 0 0 12px; color: white; }
        .rp-hero-content p { font-size: 16px; color: rgba(255,255,255,0.75); margin: 0; }
        .rp-gold { color: #D4AF37; }

        .rp-stats {
          background: #0B1F3A;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 0 8%;
        }
        .rp-stat {
          padding: 26px 0;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .rp-stat:last-child { border-right: none; }
        .rp-stat-value { font-size: 22px; font-weight: 800; color: #D4AF37; }
        .rp-stat-label { font-size: 12px; color: rgba(255,255,255,0.6); margin-top: 4px; }

        .rp-section { padding: 60px 8% 80px; background: #F8F9FC; }

        .rp-filter-bar {
          display: flex;
          gap: 12px;
          align-items: center;
          background: white;
          border-radius: 14px;
          padding: 16px 20px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .rp-filter-field {
          display: flex; align-items: center; gap: 8px;
          border: 1.5px solid #e8e8e8; border-radius: 10px;
          padding: 10px 14px; background: #fafafa; flex: 1; min-width: 180px;
          transition: border-color 0.2s;
        }
        .rp-filter-field:focus-within { border-color: #0B1F3A; background: white; }
        .rp-filter-icon { color: #aaa; font-size: 13px; flex-shrink: 0; }
        .rp-filter-field input, .rp-filter-field select {
          border: none; outline: none; background: transparent;
          font-size: 14px; color: #333; width: 100%;
        }
        .rp-clear-btn {
          background: #0B1F3A; color: white; border: none;
          border-radius: 10px; padding: 12px 20px; font-size: 14px;
          font-weight: 600; cursor: pointer; white-space: nowrap; transition: background 0.2s;
        }
        .rp-clear-btn:hover { background: #162f55; }

        .rp-results-count { font-size: 14px; color: #666; margin-bottom: 24px; }
        .rp-results-count strong { color: #0B1F3A; }

        .rp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .rp-card {
          background: white; border-radius: 16px; overflow: hidden;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;
        }
        .rp-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.14); }

        .rp-img-box { position: relative; height: 210px; overflow: hidden; }
        .rp-img-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .rp-card:hover .rp-img-box img { transform: scale(1.05); }
        .rp-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 55%); }

        .rp-tag {
          position: absolute; top: 14px; left: 14px;
          color: white; padding: 5px 12px; border-radius: 6px;
          font-size: 12px; font-weight: 600; z-index: 1;
        }
        .rp-heart {
          position: absolute; right: 14px; top: 14px;
          width: 34px; height: 34px; border: none; border-radius: 50%;
          background: white; cursor: pointer; display: flex; align-items: center;
          justify-content: center; color: #ccc; font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1; transition: color 0.2s, transform 0.2s;
        }
        .rp-heart.liked { color: #e74c3c; }
        .rp-heart:not(.liked):hover { color: #ffaaaa; }
        .rp-heart:active { transform: scale(1.3); }

        .rp-content { padding: 16px 18px 18px; }
        .rp-title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 8px; }
        .rp-title-row h3 { margin: 0; font-size: 15px; font-weight: 700; color: #0B1F3A; line-height: 1.4; flex: 1; }
        .rp-price { color: #D4AF37; font-weight: 800; font-size: 14px; white-space: nowrap; }
        .rp-location { display: flex; align-items: center; gap: 5px; color: #777; font-size: 13px; margin: 0 0 12px; }
        .rp-loc-icon { color: #2F55D4; font-size: 11px; flex-shrink: 0; }
        .rp-details { display: flex; gap: 12px; font-size: 12px; color: #666; border-top: 1px solid #f0f0f0; padding-top: 12px; margin-bottom: 14px; }
        .rp-details span { display: flex; align-items: center; gap: 4px; }
        .rp-det-icon { color: #0B1F3A; font-size: 12px; }

        .rp-card-btns { display: flex; gap: 10px; }
        .rp-view-btn {
          flex: 1; background: #0B1F3A; color: white; border: none;
          padding: 11px; border-radius: 8px; font-size: 13px; font-weight: 600;
          cursor: pointer; transition: background 0.2s;
        }
        .rp-view-btn:hover { background: #162f55; }
        .rp-wa-btn {
          width: 40px; height: 40px; background: #25D366; color: white;
          border: none; border-radius: 8px; cursor: pointer; font-size: 18px;
          display: flex; align-items: center; justify-content: center; transition: background 0.2s;
          flex-shrink: 0;
        }
        .rp-wa-btn:hover { background: #1ebe5d; }

        .rp-empty { text-align: center; padding: 80px 0; color: #999; }
        .rp-empty div { font-size: 52px; margin-bottom: 14px; }
        .rp-empty h3 { color: #0B1F3A; margin-bottom: 6px; }

        .rp-cta {
          position: relative; height: 260px;
          background: url(${about1}) center/cover no-repeat;
          display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .rp-cta-overlay { position: absolute; inset: 0; background: rgba(11,31,58,0.82); }
        .rp-cta-content { position: relative; z-index: 1; color: white; }
        .rp-cta-content h2 { font-size: 30px; font-weight: 800; margin-bottom: 10px; }
        .rp-cta-content p { color: rgba(255,255,255,0.7); font-size: 15px; margin-bottom: 24px; }
        .rp-cta-btn {
          background: #D4AF37; color: white; border: none;
          padding: 13px 32px; border-radius: 10px; font-size: 15px;
          font-weight: 700; cursor: pointer; transition: background 0.2s;
        }
        .rp-cta-btn:hover { background: #c4a030; }

        @media (max-width: 1100px) { .rp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .rp-hero-content h1 { font-size: 30px; }
          .rp-stats { grid-template-columns: repeat(2, 1fr); }
          .rp-grid { grid-template-columns: 1fr; }
          .rp-filter-field { min-width: 100%; }
        }
      `}</style>
    </>
  );
}

export default RentPage;
