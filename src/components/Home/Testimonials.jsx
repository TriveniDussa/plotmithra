function Testimonials() {
  return (
    <>
      <section className="testimonials">

        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">

          <div className="testimonial-card">
            <p>
              PlotMithra helped me find my dream villa
              in Hyderabad.
            </p>
            <h4>Rahul Kumar</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Professional service and verified
              properties.
            </p>
            <h4>Priya Sharma</h4>
          </div>

          <div className="testimonial-card">
            <p>
              Easy property listing and quick response.
            </p>
            <h4>Arjun Reddy</h4>
          </div>

        </div>

      </section>

      <style>{`
        .testimonials{
          padding:80px 8%;
          background:#f8f9fc;
        }

        .testimonials h2{
          text-align:center;
          margin-bottom:40px;
          color:#0B1F3A;
        }

        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:25px;
        }

        .testimonial-card{
          background:white;
          padding:30px;
          border-radius:15px;
          box-shadow:0 5px 20px rgba(0,0,0,.08);
        }

        .testimonial-card h4{
          margin-top:20px;
          color:#D4AF37;
        }

        @media(max-width:768px){
          .testimonial-grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </>
  );
}

export default Testimonials;