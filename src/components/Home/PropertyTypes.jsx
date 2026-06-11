import {
  FaBuilding,
  FaHome,
  FaMapMarkedAlt,
  FaStore
} from "react-icons/fa";

function PropertyTypes() {
  const types = [
    {
      icon: <FaBuilding />,
      title: "Apartments",
      subtitle: "Modern Living",
      color: "#2F55D4"
    },
    {
      icon: <FaHome />,
      title: "Villas",
      subtitle: "Luxury Lifestyle",
      color: "#D4AF37"
    },
    {
      icon: <FaHome />,
      title: "Independent House",
      subtitle: "Complete Privacy",
      color: "#22C55E"
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Plots",
      subtitle: "Invest in Land",
      color: "#8B5CF6"
    },
    {
      icon: <FaStore />,
      title: "Commercial",
      subtitle: "Grow Your Business",
      color: "#F97316"
    }
  ];

  return (
    <>
      <section className="property-types">

        {types.map((item, index) => (
          <div
            className="type-card"
            key={index}
          >
            <div
              className="icon-box"
              style={{
                color: item.color
              }}
            >
              {item.icon}
            </div>

            <div className="type-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          </div>
        ))}

      </section>

      <style>{`
        .property-types{
          padding:40px 8% 60px;
          display:grid;
          grid-template-columns:repeat(5,1fr);
          gap:20px;
          background:#f8f9fc;
        }

        .type-card{
          background:white;
          border-radius:16px;
          padding:20px;
          display:flex;
          align-items:center;
          gap:15px;
          box-shadow:0 5px 20px rgba(0,0,0,.06);
          cursor:pointer;
          transition:.3s;
        }

        .type-card:hover{
          transform:translateY(-8px);
          box-shadow:0 15px 30px rgba(0,0,0,.12);
        }

        .icon-box{
          width:65px;
          height:65px;
          border-radius:14px;
          background:#f7f7f7;
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }

        .icon-box svg{
          font-size:32px;
        }

        .type-content h3{
          margin:0;
          color:#0B1F3A;
          font-size:18px;
          font-weight:700;
        }

        .type-content p{
          margin-top:6px;
          color:#666;
          font-size:14px;
        }

        @media(max-width:1200px){

          .property-types{
            grid-template-columns:repeat(3,1fr);
          }

        }

        @media(max-width:768px){

          .property-types{
            grid-template-columns:1fr;
            padding:30px 5%;
          }

          .type-card{
            padding:18px;
          }

          .icon-box{
            width:55px;
            height:55px;
          }

          .icon-box svg{
            font-size:28px;
          }

          .type-content h3{
            font-size:16px;
          }

        }
      `}</style>
    </>
  );
}

export default PropertyTypes;