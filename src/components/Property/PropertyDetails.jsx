import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import PropertyGallery from "./PropertyGallery";
import properties from "../../data/properties";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCar, FaWhatsapp, FaPhone } from "react-icons/fa";

const WHATSAPP_NUMBER = "918790796753"; // your number with country code

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((item) => item.id === Number(id));

  const handleWhatsApp = () => {
    const text = `Hi! I'm interested in the property: *${property.title}* located at ${property.location} priced at ${property.price}. Please share more details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  if (!property) {
    return (
      <div style={{ textAlign: "center", padding: "200px 0", color: "#0B1F3A" }}>
        <div style={{ fontSize: 60 }}>🏠</div>
        <h1>Property Not Found</h1>
        <p style={{ color: "#888" }}>The listing you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="prop-details-page">

        <div className="prop-details-inner">

          <PropertyGallery />

          <div className="prop-details-content">

            <div className="prop-details-top">
              <div>
                <span className="prop-details-tag">{property.tag || "For Sale"}</span>
                <h1>{property.title}</h1>
                <p className="prop-details-location">
                  <FaMapMarkerAlt /> {property.location}
                </p>
              </div>
              <div className="prop-details-price">{property.price}</div>
            </div>

            <div className="prop-stats">
              <div className="stat-box">
                <FaBed className="stat-icon" />
                <h3>3</h3>
                <p>Bedrooms</p>
              </div>
              <div className="stat-box">
                <FaBath className="stat-icon" />
                <h3>2</h3>
                <p>Bathrooms</p>
              </div>
              <div className="stat-box">
                <FaRulerCombined className="stat-icon" />
                <h3>2200</h3>
                <p>Sq.ft</p>
              </div>
              <div className="stat-box">
                <FaCar className="stat-icon" />
                <h3>2</h3>
                <p>Parking</p>
              </div>
            </div>

            <div className="prop-section">
              <h2 className="prop-section-title">About This Property</h2>
              <p className="prop-description">
                This premium property is located in a prime area with excellent connectivity,
                schools, hospitals, shopping malls and public transportation nearby.
                Built with the finest materials and modern architecture, it offers
                a luxurious lifestyle in one of the most sought-after localities.
              </p>
            </div>

            <div className="prop-section">
              <h2 className="prop-section-title">Amenities</h2>
              <div className="amenities-grid">
                {["Swimming Pool","24/7 Security","Gym","Power Backup","Park / Garden","CCTV","Club House","Lift"].map((a) => (
                  <div key={a} className="amenity-chip">✓ {a}</div>
                ))}
              </div>
            </div>

            <div className="prop-details-buttons">
              <button className="contact-btn" onClick={() => navigate("/contact")}>
                <FaPhone /> Contact Owner
              </button>
              <button className="whatsapp-btn" onClick={handleWhatsApp}>
                <FaWhatsapp /> WhatsApp
              </button>
            </div>

          </div>
        </div>

      </section>

      <Footer />

      <style>{`
        .prop-details-page {
          padding: 100px 8% 80px;
          background: #F8F9FC;
          min-height: 100vh;
        }

        .prop-details-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .prop-details-content {
          margin-top: 40px;
          background: white;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .prop-details-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 30px;
        }

        .prop-details-tag {
          display: inline-block;
          background: #0B1F3A;
          color: white;
          padding: 5px 14px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .prop-details-top h1 {
          color: #0B1F3A;
          font-size: 28px;
          font-weight: 800;
          margin: 0 0 10px;
        }

        .prop-details-location {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #666;
          font-size: 15px;
          margin: 0;
        }

        .prop-details-price {
          color: #D4AF37;
          font-size: 28px;
          font-weight: 800;
          white-space: nowrap;
        }

        .prop-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-box {
          text-align: center;
          background: #F8F9FC;
          padding: 22px 16px;
          border-radius: 14px;
          border: 1.5px solid #eee;
        }

        .stat-icon {
          font-size: 22px;
          color: #D4AF37;
          margin-bottom: 8px;
        }

        .stat-box h3 { color: #0B1F3A; font-size: 24px; margin: 0 0 4px; }
        .stat-box p { color: #888; font-size: 13px; margin: 0; }

        .prop-section { margin-bottom: 28px; }

        .prop-section-title {
          font-size: 18px;
          font-weight: 700;
          color: #0B1F3A;
          margin-bottom: 14px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f0f0f0;
        }

        .prop-description { color: #555; line-height: 1.9; font-size: 15px; margin: 0; }

        .amenities-grid { display: flex; flex-wrap: wrap; gap: 10px; }

        .amenity-chip {
          background: #F0F4FF;
          color: #2F55D4;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        .prop-details-buttons { display: flex; gap: 16px; margin-top: 8px; }

        .contact-btn {
          background: #0B1F3A;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s;
        }

        .contact-btn:hover { background: #162f55; }

        .whatsapp-btn {
          background: #25D366;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s;
        }

        .whatsapp-btn:hover { background: #1ebe5d; }

        @media (max-width: 768px) {
          .prop-details-top { flex-direction: column; }
          .prop-stats { grid-template-columns: repeat(2, 1fr); }
          .prop-details-buttons { flex-direction: column; }
          .prop-details-content { padding: 24px 18px; }
        }
      `}</style>
    </>
  );
}

export default PropertyDetails;
