import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

function SearchBar() {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [buyRent, setBuyRent] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location)     params.set("location", location);
    if (propertyType) params.set("type", propertyType);
    if (buyRent)      params.set("mode", buyRent);
    if (minPrice)     params.set("minPrice", minPrice);
    if (maxPrice)     params.set("maxPrice", maxPrice);

    navigate(`/properties?${params.toString()}`);
  };

  return (
    <>
      <section className="search-wrapper">
        <div className="search-box">

          <div className="field">
            <FaMapMarkerAlt className="field-icon" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          <div className="field">
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="plot">Plot</option>
              <option value="independent house">Independent House</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div className="field">
            <select value={buyRent} onChange={(e) => setBuyRent(e.target.value)}>
              <option value="">Buy / Rent</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div className="field">
            <FaRupeeSign className="field-icon" />
            <input
              type="text"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          <div className="field">
            <FaRupeeSign className="field-icon" />
            <input
              type="text"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>

          <button className="search-btn" onClick={handleSearch}>
            <FaSearch className="btn-icon" />
            Search Properties
          </button>

        </div>
      </section>

      <style>{`
        .search-wrapper {
          margin-top: -35px;
          padding: 0 8%;
          position: relative;
          z-index: 10;
        }

        .search-box {
          background: white;
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.12);
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr 1fr 1.3fr;
          gap: 12px;
          align-items: center;
        }

        .field {
          border: 1.5px solid #e8e8e8;
          border-radius: 10px;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fafafa;
          transition: border-color 0.2s;
        }

        .field:focus-within {
          border-color: #0B1F3A;
          background: #fff;
        }

        .field-icon { color: #888; font-size: 14px; flex-shrink: 0; }

        .field input,
        .field select {
          width: 100%;
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          color: #333;
        }

        .field select { cursor: pointer; }
        .field input::placeholder { color: #aaa; }

        .search-btn {
          background: #0B1F3A;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 13px 18px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.2s, transform 0.2s;
          white-space: nowrap;
          height: 100%;
        }

        .search-btn:hover { background: #162f55; transform: translateY(-2px); }
        .btn-icon { font-size: 14px; }

        @media (max-width: 1200px) {
          .search-box { grid-template-columns: repeat(3, 1fr); }
          .search-btn { grid-column: span 3; }
        }

        @media (max-width: 768px) {
          .search-wrapper { padding: 0 5%; margin-top: 20px; }
          .search-box { grid-template-columns: 1fr 1fr; gap: 10px; }
          .search-btn { grid-column: span 2; padding: 14px; }
        }

        @media (max-width: 480px) {
          .search-box { grid-template-columns: 1fr; }
          .search-btn { grid-column: span 1; }
        }
      `}</style>
    </>
  );
}

export default SearchBar;
