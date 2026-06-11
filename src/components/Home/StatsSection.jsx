import {
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
  FaAward
} from "react-icons/fa";

function StatsSection() {
  const stats = [
    {
      icon: <FaHome />,
      number: "2,500+",
      title: "Properties Listed"
    },
    {
      icon: <FaUsers />,
      number: "15,000+",
      title: "Happy Clients"
    },
    {
      icon: <FaMapMarkedAlt />,
      number: "120+",
      title: "Locations Covered"
    },
    {
      icon: <FaAward />,
      number: "10+",
      title: "Years Experience"
    }
  ];

  return (
    <>
      <section className="stats-section">

        <div className="stats-header">
          <span>WHY CHOOSE PLOTMITHRA</span>

          <h2>
            Trusted Real Estate Partner
            <br />
            Across India
          </h2>

          <p>
            Helping buyers, sellers and investors
            find the perfect property with complete
            transparency and professional support.
          </p>
        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div
              className="stat-card"
              key={index}
            >
              <div className="stat-icon">
                {item.icon}
              </div>

              <h3>{item.number}</h3>

              <p>{item.title}</p>
            </div>
          ))}

        </div>

      </section>

      <style>{`
        .stats-section{
          padding:80px 8%;
          background:#0B1F3A;
          text-align:center;
        }

        .stats-header span{
          color:#D4AF37;
          font-weight:700;
          letter-spacing:2px;
          font-size:13px;
        }

        .stats-header h2{
          color:white;
          font-size:42px;
          margin:15px 0;
        }

        .stats-header p{
          color:#d1d5db;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .stats-grid{
          margin-top:50px;
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:25px;
        }

        .stat-card{
          background:rgba(255,255,255,.08);
          backdrop-filter:blur(10px);
          border-radius:20px;
          padding:35px;
          transition:.3s;
        }

        .stat-card:hover{
          transform:translateY(-10px);
          background:rgba(255,255,255,.12);
        }

        .stat-icon{
          font-size:40px;
          color:#D4AF37;
          margin-bottom:15px;
        }

        .stat-card h3{
          color:white;
          font-size:38px;
          margin:10px 0;
        }

        .stat-card p{
          color:#ddd;
          margin:0;
        }

        @media(max-width:992px){
          .stats-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }

        @media(max-width:768px){

          .stats-section{
            padding:60px 5%;
          }

          .stats-header h2{
            font-size:30px;
          }

          .stats-grid{
            grid-template-columns:1fr;
          }
        }
      `}</style>
    </>
  );
}

export default StatsSection;