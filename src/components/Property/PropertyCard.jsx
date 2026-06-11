import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";

function PropertyCard({ property }) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <div className="prop-card">

        <div className="prop-image-box">
          <img src={property.image} alt={property.title} />

          {property.tag && (
            <span
              className="prop-tag"
              style={{ background: property.tag === "For Rent" ? "#E67E22" : "#0B1F3A" }}
            >
              {property.tag}
            </span>
          )}

          <button
            className={`prop-heart ${liked ? "liked" : ""}`}
            onClick={() => setLiked(!liked)}
          >
            <FaHeart />
          </button>

          <div className="prop-img-overlay" />
        </div>

        <div className="prop-content">

          <div className="prop-title-row">
            <h3>{property.title}</h3>
            <span className="prop-price">{property.price}</span>
          </div>

          <p className="prop-location">
            <FaMapMarkerAlt className="prop-loc-icon" />
            {property.location}
          </p>

          {(property.beds || property.area) && (
            <div className="prop-details">
              {property.beds && <span><FaBed className="prop-det-icon" />{property.beds} Beds</span>}
              {property.baths && <span><FaBath className="prop-det-icon" />{property.baths} Baths</span>}
              {property.area && <span><FaRulerCombined className="prop-det-icon" />{property.area}</span>}
            </div>
          )}

          <Link to={`/property/${property.id}`} className="prop-btn">
            View Details
          </Link>

        </div>
      </div>

      <style>{`
        .prop-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          cursor: pointer;
        }

        .prop-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.14);
        }

        .prop-image-box {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .prop-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s;
        }

        .prop-card:hover .prop-image-box img { transform: scale(1.05); }

        .prop-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 55%);
        }

        .prop-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          color: white;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          z-index: 1;
        }

        .prop-heart {
          position: absolute;
          right: 14px;
          top: 14px;
          width: 34px;
          height: 34px;
          border: none;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ccc;
          font-size: 14px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 1;
          transition: color 0.2s, transform 0.2s;
        }

        .prop-heart.liked { color: #e74c3c; }
        .prop-heart:not(.liked):hover { color: #ffaaaa; }
        .prop-heart:active { transform: scale(1.3); }

        .prop-content { padding: 16px 18px 20px; }

        .prop-title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 8px;
        }

        .prop-title-row h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #0B1F3A;
          line-height: 1.4;
          flex: 1;
        }

        .prop-price {
          color: #D4AF37;
          font-weight: 800;
          font-size: 15px;
          white-space: nowrap;
        }

        .prop-location {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #777;
          font-size: 13px;
          margin: 0 0 12px;
        }

        .prop-loc-icon { color: #2F55D4; font-size: 11px; flex-shrink: 0; }

        .prop-details {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #f0f0f0;
          padding-top: 12px;
          margin-bottom: 14px;
        }

        .prop-details span { display: flex; align-items: center; gap: 4px; }
        .prop-det-icon { color: #0B1F3A; font-size: 12px; }

        .prop-btn {
          display: block;
          text-align: center;
          background: #0B1F3A;
          color: white;
          padding: 11px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
          margin-top: 4px;
        }

        .prop-btn:hover { background: #162f55; }
      `}</style>
    </>
  );
}

export default PropertyCard;
