import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import featch1 from "../../assets/images/featch1.jpg";
import pro2 from "../../assets/images/pro2.jpg";
import featch4 from "../../assets/images/featch4.jpg";
import pro4 from "../../assets/images/pro4.jpg";

function PropertyGallery() {
  const images = [
    featch1,
    pro2,
    featch4,
    pro4,
  ];

  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));
  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));

  return (
    <>
      <div className="gallery">

        <div className="gallery-main">
          <img src={images[current]} alt="Property" className="gallery-main-img" />

          <button className="gal-btn gal-left" onClick={prev}><FaChevronLeft /></button>
          <button className="gal-btn gal-right" onClick={next}><FaChevronRight /></button>
          <button className="gal-expand" onClick={() => setLightbox(true)}><FaExpand /></button>

          <div className="gal-counter">{current + 1} / {images.length}</div>
        </div>

        <div className="gallery-thumbs">
          {images.map((img, i) => (
            <div
              key={i}
              className={`thumb-wrap ${i === current ? "active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={img} alt="" />
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)}>
          <button className="lb-close" onClick={() => setLightbox(false)}>✕</button>
          <button className="lb-btn lb-left" onClick={(e) => { e.stopPropagation(); prev(); }}><FaChevronLeft /></button>
          <img src={images[current]} alt="" className="lb-img" onClick={(e) => e.stopPropagation()} />
          <button className="lb-btn lb-right" onClick={(e) => { e.stopPropagation(); next(); }}><FaChevronRight /></button>
        </div>
      )}

      <style>{`
        .gallery { width: 100%; }

        .gallery-main {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          height: 480px;
        }

        .gallery-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.3s;
        }

        .gal-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          color: #0B1F3A;
          transition: background 0.2s;
          z-index: 2;
        }

        .gal-btn:hover { background: white; }
        .gal-left { left: 16px; }
        .gal-right { right: 16px; }

        .gal-expand {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 38px;
          height: 38px;
          border: none;
          border-radius: 8px;
          background: rgba(0,0,0,0.5);
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          z-index: 2;
          transition: background 0.2s;
        }

        .gal-expand:hover { background: rgba(0,0,0,0.75); }

        .gal-counter {
          position: absolute;
          bottom: 16px;
          left: 16px;
          background: rgba(0,0,0,0.5);
          color: white;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          z-index: 2;
        }

        .gallery-thumbs {
          display: flex;
          gap: 10px;
          margin-top: 12px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumb-wrap {
          width: 110px;
          height: 72px;
          flex-shrink: 0;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          opacity: 0.55;
          border: 3px solid transparent;
          transition: opacity 0.2s, border-color 0.2s;
        }

        .thumb-wrap.active {
          opacity: 1;
          border-color: #D4AF37;
        }

        .thumb-wrap:hover { opacity: 0.85; }

        .thumb-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.92);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lb-img {
          max-width: 88vw;
          max-height: 85vh;
          border-radius: 12px;
          object-fit: contain;
        }

        .lb-close {
          position: absolute;
          top: 20px;
          right: 24px;
          background: none;
          border: none;
          color: white;
          font-size: 26px;
          cursor: pointer;
          z-index: 10;
        }

        .lb-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          color: white;
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }

        .lb-btn:hover { background: rgba(255,255,255,0.3); }
        .lb-left { left: 24px; }
        .lb-right { right: 24px; }

        @media (max-width: 768px) {
          .gallery-main { height: 280px; }
          .thumb-wrap { width: 80px; height: 54px; }
        }
      `}</style>
    </>
  );
}

export default PropertyGallery;
