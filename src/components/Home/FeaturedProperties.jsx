import { useState } from "react";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMapMarkerAlt,
  FaHeart
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import featch1 from "../../assets/images/featch1.jpg";
import featch2 from "../../assets/images/featch2.jpg";
import featch3 from "../../assets/images/featch3.jpg";
import featch4 from "../../assets/images/featch4.jpg";

function FeaturedProperties() {
  const navigate = useNavigate();
  const properties = [
  {
    id: 1,
    image: featch1,
    tag: "For Sale",
    tagColor: "#0B1F3A",
    title: "Luxury 3 BHK Apartment",
    location: "Gachibowli, Hyderabad",
    price: "₹ 1.25 Cr",
    beds: 3,
    baths: 3,
    area: "1200 Sq.ft",
  },
  {
    id: 2,
    image: featch2,
    tag: "For Rent",
    tagColor: "#E67E22",
    title: "Modern 2 BHK Flat",
    location: "Kondapur, Hyderabad",
    price: "₹ 28,000/mo",
    beds: 2,
    baths: 2,
    area: "1100 Sq.ft",
  },
  {
    id: 3,
    image: featch3,
    tag: "For Sale",
    tagColor: "#0B1F3A",
    title: "Premium Villa",
    location: "Kokapet, Hyderabad",
    price: "₹ 3.50 Cr",
    beds: 4,
    baths: 4,
    area: "3200 Sq.ft",
  },
  {
    id: 4,
    image: featch4,
    tag: "For Sale",
    tagColor: "#0B1F3A",
    title: "Open Plot",
    location: "Shankarpally, Hyderabad",
    price: "₹ 45 L",
    beds: null,
    baths: null,
    area: "2400 Sq.ft",
  },
];

  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <section className="featured">

        <div className="featured-header">
          <div>
            <span className="small-title">FEATURED PROPERTIES</span>
            <h2>Handpicked Properties<br />Just For <span className="highlight">You</span></h2>
          </div>
          <button className="view-btn" onClick={() => navigate("/properties")}>
            View All Properties →
          </button>
        </div>

        <div className="property-grid">
          {properties.map((p) => (
            <div key={p.id} className="property-card">

              <div className="image-box">
                <img src={p.image} alt={p.title} />
                <span className="tag" style={{ background: p.tagColor }}>{p.tag}</span>

                <button
                  className={`heart ${liked[p.id] ? "liked" : ""}`}
                  onClick={() => toggleLike(p.id)}
                  title={liked[p.id] ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <FaHeart />
                </button>

                <div className="img-overlay" />
              </div>

              <div className="property-content">
                <div className="title-row">
                  <h3>{p.title}</h3>
                  <span className="price">{p.price}</span>
                </div>
                <p className="location">
                  <FaMapMarkerAlt className="loc-icon" />
                  {p.location}
                </p>
                <div className="details">
                  {p.beds !== null && <span><FaBed className="det-icon" />{p.beds} Beds</span>}
                  {p.baths !== null && <span><FaBath className="det-icon" />{p.baths} Baths</span>}
                  <span><FaRulerCombined className="det-icon" />{p.area}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      <style>{`
        .featured { padding: 70px 8%; background: #F8F9FC; }

        .featured-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }

        .small-title { color: #2F55D4; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; }

        .featured-header h2 { color: #0B1F3A; font-size: 38px; margin-top: 10px; line-height: 1.3; font-weight: 800; }

        .highlight { color: #D4AF37; }

        .view-btn { border: 2px solid #0B1F3A; background: none; color: #0B1F3A; font-weight: 600; cursor: pointer; font-size: 14px; padding: 10px 20px; border-radius: 8px; white-space: nowrap; transition: 0.2s; }
        .view-btn:hover { background: #0B1F3A; color: white; }

        .property-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

        .property-card { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 18px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; cursor: pointer; }
        .property-card:hover { transform: translateY(-8px); box-shadow: 0 16px 40px rgba(0,0,0,0.14); }

        .image-box { position: relative; height: 210px; overflow: hidden; }
        .image-box img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .property-card:hover .image-box img { transform: scale(1.05); }

        .img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%); }

        .tag { position: absolute; top: 14px; left: 14px; color: white; padding: 5px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; z-index: 1; }

        .heart { position: absolute; right: 14px; top: 14px; width: 36px; height: 36px; border: none; border-radius: 50%; background: white; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #ccc; font-size: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 1; transition: color 0.2s, transform 0.2s; }
        .heart.liked { color: #e74c3c; }
        .heart:not(.liked):hover { color: #ffaaaa; }
        .heart:active { transform: scale(1.3); }

        .property-content { padding: 18px 18px 20px; }

        .title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 10px; }
        .title-row h3 { margin: 0; font-size: 16px; font-weight: 700; color: #0B1F3A; line-height: 1.4; flex: 1; }

        .price { color: #2F55D4; font-weight: 800; font-size: 15px; white-space: nowrap; }

        .location { margin: 0 0 14px; display: flex; align-items: center; gap: 6px; color: #777; font-size: 13px; }
        .loc-icon { color: #2F55D4; flex-shrink: 0; font-size: 12px; }

        .details { display: flex; gap: 14px; border-top: 1px solid #f0f0f0; padding-top: 14px; font-size: 13px; color: #666; }
        .details span { display: flex; align-items: center; gap: 5px; }
        .det-icon { color: #0B1F3A; font-size: 13px; }

        @media (max-width: 1200px) { .property-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 768px) {
          .featured { padding: 50px 5%; }
          .featured-header { flex-direction: column; align-items: flex-start; gap: 15px; }
          .featured-header h2 { font-size: 28px; }
          .property-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default FeaturedProperties;
