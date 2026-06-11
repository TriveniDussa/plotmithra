import { useState } from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import {
  FaHome, FaMapMarkerAlt, FaRupeeSign, FaBuilding,
  FaFileAlt, FaPhoneAlt, FaWhatsapp, FaCheckCircle
} from "react-icons/fa";
import about1 from "../assets/images/about1.jpg";

const WHATSAPP_NUMBER = "918790796753";

function SellPage() {
  const [form, setForm] = useState({
    title: "", location: "", price: "", type: "",
    bedrooms: "", area: "", phone: "", description: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.location || !form.price || !form.type) return;

    const text =
`*🏠 New Property Listing - PlotMithra*

📌 *Title:* ${form.title}
🏷️ *Type:* ${form.type}
📍 *Location:* ${form.location}
💰 *Price:* ${form.price}
🛏️ *Bedrooms:* ${form.bedrooms || "N/A"}
📐 *Area:* ${form.area || "N/A"}
📞 *Contact:* ${form.phone || "Not provided"}
📝 *Description:* ${form.description || "N/A"}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  const steps = [
    { icon: <FaFileAlt />, title: "Fill the Form", desc: "Provide your property details accurately" },
    { icon: <FaWhatsapp />, title: "Send via WhatsApp", desc: "Details go directly to our team" },
    { icon: <FaCheckCircle />, title: "Get Listed", desc: "We verify and publish your listing" },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="sell-hero">
        <div className="sell-hero-overlay" />
        <div className="sell-hero-content">
          <span className="sell-eyebrow">SELL / RENT YOUR PROPERTY</span>
          <h1>List Your Property <span className="sell-gold">For Free</span></h1>
          <p>Reach thousands of genuine buyers across India</p>
        </div>
      </section>

      {/* How it works */}
      <div className="sell-steps">
        {steps.map((s, i) => (
          <div key={i} className="sell-step">
            <div className="sell-step-icon">{s.icon}</div>
            <div className="sell-step-num">Step {i + 1}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <section className="sell-body">

        <div className="sell-info">
          <h2>Why List with <span className="sell-gold">PlotMithra?</span></h2>
          <ul className="sell-benefits">
            {[
              "Free property listing",
              "Reach 15,000+ verified buyers",
              "Dedicated relationship manager",
              "Fast & transparent process",
              "Legal & documentation support",
              "WhatsApp-based quick connect",
            ].map((b, i) => (
              <li key={i}><FaCheckCircle className="sell-check" /> {b}</li>
            ))}
          </ul>

          <div className="sell-contact-card">
            <FaPhoneAlt className="sell-contact-icon" />
            <div>
              <div className="sell-contact-label">Need help listing?</div>
              <div className="sell-contact-num">+91 87907 96753</div>
            </div>
          </div>
        </div>

        <div className="sell-form-wrap">
          <div className="sell-form-header">
            <h2>Property Details</h2>
            <p>Fill in the details and we'll connect with you on WhatsApp</p>
          </div>

          {submitted ? (
            <div className="sell-success">
              <div className="sell-success-icon">✅</div>
              <h3>Submitted Successfully!</h3>
              <p>Your property details were sent to our team via WhatsApp. We'll get back to you shortly.</p>
              <button className="sell-reset-btn" onClick={() => { setSubmitted(false); setForm({ title:"", location:"", price:"", type:"", bedrooms:"", area:"", phone:"", description:"" }); }}>
                List Another Property
              </button>
            </div>
          ) : (
            <form className="sell-form" onSubmit={handleSubmit}>

              <div className="sell-row">
                <div className="sell-field">
                  <FaHome className="sell-field-icon" />
                  <input name="title" type="text" placeholder="Property Title *" value={form.title} onChange={handleChange} required />
                </div>
                <div className="sell-field">
                  <FaBuilding className="sell-field-icon" />
                  <select name="type" value={form.type} onChange={handleChange} required>
                    <option value="">Property Type *</option>
                    <option>Plot</option>
                    <option>Villa</option>
                    <option>Apartment</option>
                    <option>Independent House</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>

              <div className="sell-field full">
                <FaMapMarkerAlt className="sell-field-icon" />
                <input name="location" type="text" placeholder="Location / Area *" value={form.location} onChange={handleChange} required />
              </div>

              <div className="sell-row">
                <div className="sell-field">
                  <FaRupeeSign className="sell-field-icon" />
                  <input name="price" type="text" placeholder="Expected Price *" value={form.price} onChange={handleChange} required />
                </div>
                <div className="sell-field">
                  <FaHome className="sell-field-icon" />
                  <input name="area" type="text" placeholder="Area (Sq.ft)" value={form.area} onChange={handleChange} />
                </div>
              </div>

              <div className="sell-row">
                <div className="sell-field">
                  <FaHome className="sell-field-icon" />
                  <select name="bedrooms" value={form.bedrooms} onChange={handleChange}>
                    <option value="">Bedrooms</option>
                    <option>1 BHK</option>
                    <option>2 BHK</option>
                    <option>3 BHK</option>
                    <option>4+ BHK</option>
                    <option>N/A (Plot/Commercial)</option>
                  </select>
                </div>
                <div className="sell-field">
                  <FaPhoneAlt className="sell-field-icon" />
                  <input name="phone" type="tel" placeholder="Your Phone Number" value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="sell-field full textarea-field">
                <FaFileAlt className="sell-field-icon" />
                <textarea name="description" rows="4" placeholder="Property Description (optional)" value={form.description} onChange={handleChange} />
              </div>

              <button type="submit" className="sell-submit-btn">
                <FaWhatsapp className="sell-btn-icon" />
                Submit via WhatsApp
              </button>

            </form>
          )}
        </div>

      </section>

      <Footer />

      <style>{`
        .sell-hero {
          position: relative;
          height: 340px;
          background: url(${about1}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .sell-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11,31,58,0.78);
        }
        .sell-hero-content {
          position: relative;
          z-index: 1;
          color: white;
          padding-top: 70px;
        }
        .sell-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #D4AF37;
          display: block;
          margin-bottom: 12px;
        }
        .sell-hero-content h1 {
          font-size: 46px;
          font-weight: 800;
          margin: 0 0 12px;
          color: white;
        }
        .sell-hero-content p {
          font-size: 16px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }
        .sell-gold { color: #D4AF37; }

        /* Steps */
        .sell-steps {
          background: #0B1F3A;
          padding: 0 8%;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
        .sell-step {
          padding: 32px 24px;
          text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
          color: white;
        }
        .sell-step:last-child { border-right: none; }
        .sell-step-icon {
          font-size: 28px;
          color: #D4AF37;
          margin-bottom: 10px;
        }
        .sell-step-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 6px;
          text-transform: uppercase;
        }
        .sell-step h4 { font-size: 15px; font-weight: 700; margin: 0 0 6px; }
        .sell-step p { font-size: 13px; color: rgba(255,255,255,0.6); margin: 0; }

        /* Body */
        .sell-body {
          padding: 70px 8%;
          display: grid;
          grid-template-columns: 1fr 1.8fr;
          gap: 50px;
          align-items: start;
          background: #F8F9FC;
        }

        /* Info */
        .sell-info h2 {
          font-size: 26px;
          font-weight: 800;
          color: #0B1F3A;
          margin-bottom: 24px;
          line-height: 1.3;
        }
        .sell-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sell-benefits li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #333;
        }
        .sell-check { color: #25D366; font-size: 15px; flex-shrink: 0; }
        .sell-contact-card {
          background: #0B1F3A;
          color: white;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .sell-contact-icon { font-size: 24px; color: #D4AF37; flex-shrink: 0; }
        .sell-contact-label { font-size: 12px; color: rgba(255,255,255,0.6); margin-bottom: 4px; }
        .sell-contact-num { font-size: 17px; font-weight: 700; }

        /* Form */
        .sell-form-wrap {
          background: white;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        .sell-form-header { margin-bottom: 28px; }
        .sell-form-header h2 { font-size: 22px; font-weight: 800; color: #0B1F3A; margin: 0 0 6px; }
        .sell-form-header p { font-size: 13px; color: #888; margin: 0; }

        .sell-form { display: flex; flex-direction: column; gap: 14px; }

        .sell-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

        .sell-field {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid #e8e8e8;
          border-radius: 10px;
          padding: 12px 14px;
          background: #fafafa;
          transition: border-color 0.2s;
        }
        .sell-field.full { width: 100%; }
        .sell-field.textarea-field { align-items: flex-start; padding-top: 14px; }
        .sell-field:focus-within { border-color: #0B1F3A; background: white; }

        .sell-field-icon { color: #aaa; font-size: 14px; flex-shrink: 0; }

        .sell-field input,
        .sell-field select,
        .sell-field textarea {
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          color: #333;
          width: 100%;
          font-family: inherit;
          resize: vertical;
        }
        .sell-field input::placeholder,
        .sell-field textarea::placeholder { color: #bbb; }

        .sell-submit-btn {
          background: #25D366;
          color: white;
          border: none;
          padding: 15px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s, transform 0.2s;
          margin-top: 4px;
        }
        .sell-submit-btn:hover { background: #1ebe5d; transform: translateY(-2px); }
        .sell-btn-icon { font-size: 18px; }

        /* Success */
        .sell-success {
          text-align: center;
          padding: 50px 20px;
        }
        .sell-success-icon { font-size: 52px; margin-bottom: 16px; }
        .sell-success h3 { color: #0B1F3A; font-size: 22px; margin-bottom: 8px; }
        .sell-success p { color: #777; font-size: 14px; margin-bottom: 24px; line-height: 1.7; }
        .sell-reset-btn {
          background: #0B1F3A;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .sell-reset-btn:hover { background: #162f55; }

        @media (max-width: 900px) {
          .sell-body { grid-template-columns: 1fr; }
          .sell-steps { grid-template-columns: 1fr; }
          .sell-step { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        @media (max-width: 600px) {
          .sell-hero-content h1 { font-size: 30px; }
          .sell-form-wrap { padding: 24px 16px; }
          .sell-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}

export default SellPage;
