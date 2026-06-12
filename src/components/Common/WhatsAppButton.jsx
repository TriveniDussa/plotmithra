import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919391275906";

  return (
    <>
      <a
        href={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>

      <style>{`
        .whatsapp-float{
          position:fixed;
          width:60px;
          height:60px;
          bottom:25px;
          right:25px;
          background:#25D366;
          color:white;
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:32px;
          text-decoration:none;
          box-shadow:0 5px 20px rgba(0,0,0,.3);
          z-index:9999;
          transition:.3s;
          animation:pulse 2s infinite;
        }

        .whatsapp-float:hover{
          transform:scale(1.1);
        }

        @keyframes pulse{
          0%{
            box-shadow:0 0 0 0 rgba(37,211,102,.7);
          }

          70%{
            box-shadow:0 0 0 15px rgba(37,211,102,0);
          }

          100%{
            box-shadow:0 0 0 0 rgba(37,211,102,0);
          }
        }

        @media(max-width:768px){
          .whatsapp-float{
            width:55px;
            height:55px;
            font-size:28px;
            right:15px;
            bottom:15px;
          }
        }
      `}</style>
    </>
  );
}

export default WhatsAppButton;