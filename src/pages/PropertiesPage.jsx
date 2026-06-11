import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import PropertyCard from "../components/Property/PropertyCard";
import properties from "../data/properties";
import { FaSearch, FaMapMarkerAlt, FaSlidersH } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";

function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const [search, setSearch]     = useState(searchParams.get("location") || "");
  const [type, setType]         = useState(searchParams.get("type") || "");
  const [mode, setMode]         = useState(searchParams.get("mode") || "");

  // Re-apply params if URL changes (e.g. coming from SearchBar)
  useEffect(() => {
    setSearch(searchParams.get("location") || "");
    setType(searchParams.get("type") || "");
    setMode(searchParams.get("mode") || "");
  }, [searchParams]);

  const filtered = properties.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                        p.location.toLowerCase().includes(search.toLowerCase());
    const matchType   = type === "" || (p.type || "").toLowerCase().includes(type.toLowerCase());
    const matchMode   = mode === "" || (p.tag || "").toLowerCase().includes(mode.toLowerCase());
    return matchSearch && matchType && matchMode;
  });

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="pp-banner">
        <div className="pp-banner-overlay" />
        <div className="pp-banner-content">
          <p className="pp-banner-eyebrow">Explore Listings</p>
          <h1>Find Your Dream Property</h1>
          <p className="pp-banner-sub">Browse verified plots, villas, apartments & commercial spaces across India</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="pp-filter-bar">
        <div className="pp-filter-inner">

          <div className="pp-filter-field">
            <FaSearch className="pp-filter-icon" />
            <input
              type="text"
              placeholder="Search by name or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="pp-filter-field">
            <FaMapMarkerAlt className="pp-filter-icon" />
            <select value={search} onChange={(e) => setSearch(e.target.value)}>
              <option value="">All Locations</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="bangalore">Bangalore</option>
              <option value="vijayawada">Vijayawada</option>
            </select>
          </div>

          <div className="pp-filter-field">
            <FaSlidersH className="pp-filter-icon" />
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">All Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
              <option value="independent house">Independent House</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="pp-filter-field">
            <FaSlidersH className="pp-filter-icon" />
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="">Buy / Rent</option>
              <option value="buy">For Sale</option>
              <option value="rent">For Rent</option>
            </select>
          </div>

          <button className="pp-clear-btn" onClick={() => { setSearch(""); setType(""); setMode(""); }}>
            Clear Filters
          </button>

        </div>
      </div>

      {/* Results */}
      <div className="pp-results-section">
        <p className="pp-results-count">
          Showing <strong>{filtered.length}</strong> properties
          {search && <span> for "<strong>{search}</strong>"</span>}
        </p>

        {filtered.length > 0 ? (
          <div className="pp-properties-grid">
            {filtered.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="pp-no-results">
            <div className="pp-no-results-icon">🏠</div>
            <h2>No Properties Found</h2>
            <p>Try adjusting your search or filters</p>
            <button className="pp-reset-btn" onClick={() => { setSearch(""); setType(""); setMode(""); }}>
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <Footer />

      <style>{`
        .pp-banner {
          position: relative; height: 300px;
          background: url(${heroImage}) center/cover no-repeat;
          display: flex; align-items: center; justify-content: center; text-align: center;
        }
        .pp-banner-overlay { position: absolute; inset: 0; background: rgba(11,31,58,0.72); }
        .pp-banner-content { position: relative; z-index: 1; color: white; padding-top: 80px; }
        .pp-banner-eyebrow { font-size: 13px; font-weight: 700; letter-spacing: 2px; color: #D4AF37; text-transform: uppercase; margin-bottom: 10px; }
        .pp-banner-content h1 { font-size: 44px; font-weight: 800; margin: 0 0 10px; color: white; }
        .pp-banner-sub { font-size: 15px; color: rgba(255,255,255,0.75); margin: 0; }

        .pp-filter-bar {
          background: white;
          box-shadow: 0 8px 30px rgba(0,0,0,0.10);
          padding: 0 8%;
          position: sticky; top: 80px; z-index: 50;
        }
        .pp-filter-inner {
          display: flex; gap: 12px; align-items: center;
          padding: 16px 0; flex-wrap: wrap;
        }
        .pp-filter-field {
          display: flex; align-items: center; gap: 8px;
          border: 1.5px solid #e8e8e8; border-radius: 10px;
          padding: 10px 14px; background: #fafafa; flex: 1; min-width: 160px;
          transition: border-color 0.2s;
        }
        .pp-filter-field:focus-within { border-color: #0B1F3A; background: white; }
        .pp-filter-icon { color: #888; font-size: 14px; flex-shrink: 0; }
        .pp-filter-field input, .pp-filter-field select {
          border: none; outline: none; background: transparent;
          font-size: 14px; color: #333; width: 100%;
        }
        .pp-clear-btn {
          background: #0B1F3A; color: white; border: none;
          border-radius: 10px; padding: 12px 22px; font-size: 14px;
          font-weight: 600; cursor: pointer; white-space: nowrap; transition: background 0.2s;
        }
        .pp-clear-btn:hover { background: #162f55; }

        .pp-results-section { padding: 40px 8% 80px; background: #F8F9FC; }
        .pp-results-count { color: #666; font-size: 14px; margin-bottom: 24px; }
        .pp-results-count strong { color: #0B1F3A; }

        .pp-properties-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .pp-no-results { text-align: center; padding: 80px 0; color: #999; }
        .pp-no-results-icon { font-size: 60px; margin-bottom: 16px; }
        .pp-no-results h2 { color: #0B1F3A; margin-bottom: 8px; }
        .pp-no-results p { font-size: 15px; margin-bottom: 20px; }
        .pp-reset-btn {
          background: #0B1F3A; color: white; border: none;
          padding: 12px 24px; border-radius: 8px; font-size: 14px;
          font-weight: 600; cursor: pointer;
        }

        @media (max-width: 1200px) { .pp-properties-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .pp-banner-content h1 { font-size: 28px; }
          .pp-properties-grid { grid-template-columns: 1fr; }
          .pp-filter-field { min-width: 100%; }
        }
      `}</style>
    </>
  );
}

export default PropertiesPage;
