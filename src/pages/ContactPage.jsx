import { useState } from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";

const WHATSAPP_NUMBER = "918790796753"; // your number with country code, no +

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const text = `*New Enquiry - PlotMithra*\n\n👤 *Name:* ${form.name}\n📧 *Email:* ${form.email}\n📞 *Phone:* ${form.phone || "Not provided"}\n💬 *Message:* ${form.message}`;
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    setSubmitted(true);
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="contact-page">

        {/* Banner */}
        <div className="contact-banner">
          <div className="contact-banner-overlay" />
          <div className="contact-banner-content">
            <p className="contact-eyebrow">GET IN TOUCH</p>
            <h1>Contact Us</h1>
            <p className="contact-banner-sub">We'd love to hear from you. Send us a message and we'll respond via WhatsApp.</p>
          </div>
        </div>

        <div className="contact-body">

          {/* Info cards */}
          <div className="contact-info">

            <div className="info-card">
              <div className="info-icon-wrap"><FaPhone /></div>
              <div>
                <h4>Call Us</h4>
                <p>+91 87907 96753</p>
                <span>Mon–Sat, 9am – 7pm</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap"><FaEnvelope /></div>
              <div>
                <h4>Email Us</h4>
                <p>support@plotmithra.com</p>
                <span>We reply within 24 hours</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-wrap"><FaMapMarkerAlt /></div>
              <div>
                <h4>Visit Us</h4>
                <p>Hyderabad, Telangana</p>
                <span>India – 500081</span>
              </div>
            </div>

            <div className="info-card whatsapp-card">
              <div className="info-icon-wrap wa-icon"><FaWhatsapp /></div>
              <div>
                <h4>WhatsApp</h4>
                <p>+91 87907 96753</p>
                <span>Quick replies on chat</span>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="contact-form-wrap">

            <div className="form-header">
              <h2>Send Us a Message</h2>
              <p>Fill in the form and your message will open directly in WhatsApp.</p>
            </div>

            {submitted ? (
              <div className="success-box">
                <div className="success-icon">✅</div>
                <h3>WhatsApp Opened!</h3>
                <p>Your message was prepared. Complete sending it in WhatsApp.</p>
                <button className="reset-btn" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>

                <div className="form-field">
                  <FaUser className="form-field-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <FaEnvelope className="form-field-icon" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <FaPhone className="form-field-icon" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (optional)"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field textarea-field">
                  <FaCommentDots className="form-field-icon" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message *"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn">
                  <FaWhatsapp className="btn-wa-icon" />
                  Send via WhatsApp
                </button>

              </form>
            )}

          </div>

        </div>

      </section>

      <Footer />

      <style>{`
        .contact-page {
          min-height: 100vh;
          background: #F8F9FC;
        }

        /* Banner */
        .contact-banner {
          position: relative;
          height: 280px;
          background: url(${heroImage}) center/cover no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .contact-banner-overlay {
          position: absolute;
          inset: 0;
          background: rgba(11, 31, 58, 0.75);
        }

        .contact-banner-content {
          position: relative;
          z-index: 1;
          color: white;
          padding-top: 70px;
        }

        .contact-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #D4AF37;
          margin-bottom: 10px;
        }

        .contact-banner-content h1 {
          font-size: 44px;
          font-weight: 800;
          margin: 0 0 10px;
          color: white;
        }

        .contact-banner-sub {
          font-size: 15px;
          color: rgba(255,255,255,0.75);
          margin: 0;
        }

        /* Body */
        .contact-body {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 8% 80px;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 40px;
          align-items: start;
        }

        /* Info cards */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: white;
          border-radius: 14px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.07);
          transition: transform 0.2s;
        }

        .info-card:hover { transform: translateY(-3px); }

        .info-icon-wrap {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: #EEF2FF;
          color: #2F55D4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .wa-icon {
          background: #E8FFF1;
          color: #25D366;
        }

        .info-card h4 {
          margin: 0 0 4px;
          font-size: 14px;
          font-weight: 700;
          color: #0B1F3A;
        }

        .info-card p {
          margin: 0 0 2px;
          font-size: 14px;
          color: #333;
          font-weight: 600;
        }

        .info-card span {
          font-size: 12px;
          color: #999;
        }

        /* Form */
        .contact-form-wrap {
          background: white;
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .form-header {
          margin-bottom: 28px;
        }

        .form-header h2 {
          color: #0B1F3A;
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 8px;
        }

        .form-header p {
          color: #888;
          font-size: 14px;
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-field {
          display: flex;
          align-items: center;
          gap: 10px;
          border: 1.5px solid #e8e8e8;
          border-radius: 10px;
          padding: 12px 16px;
          background: #fafafa;
          transition: border-color 0.2s;
        }

        .form-field:focus-within {
          border-color: #0B1F3A;
          background: white;
        }

        .textarea-field { align-items: flex-start; padding-top: 14px; }

        .form-field-icon {
          color: #aaa;
          font-size: 15px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .form-field input,
        .form-field textarea {
          border: none;
          outline: none;
          background: transparent;
          font-size: 14px;
          color: #333;
          width: 100%;
          resize: vertical;
          font-family: inherit;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: #bbb;
        }

        .submit-btn {
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

        .submit-btn:hover {
          background: #1ebe5d;
          transform: translateY(-2px);
        }

        .btn-wa-icon { font-size: 18px; }

        /* Success */
        .success-box {
          text-align: center;
          padding: 40px 20px;
        }

        .success-icon { font-size: 52px; margin-bottom: 16px; }

        .success-box h3 {
          color: #0B1F3A;
          font-size: 22px;
          margin-bottom: 8px;
        }

        .success-box p {
          color: #777;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .reset-btn {
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

        .reset-btn:hover { background: #162f55; }

        @media (max-width: 900px) {
          .contact-body { grid-template-columns: 1fr; }
          .contact-info { flex-direction: row; flex-wrap: wrap; }
          .info-card { flex: 1; min-width: 200px; }
        }

        @media (max-width: 600px) {
          .contact-banner-content h1 { font-size: 30px; }
          .contact-form-wrap { padding: 24px 18px; }
          .info-card { min-width: 100%; }
        }
      `}</style>
    </>
  );
}

export default ContactPage;
