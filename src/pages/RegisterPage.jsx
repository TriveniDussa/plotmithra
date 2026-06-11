import Navbar from "../components/Common/Navbar";

function RegisterPage() {
  return (
    <>
      <Navbar />

      <section className="auth">

        <form className="auth-form">

          <h1>Register</h1>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Register
          </button>

        </form>

      </section>

      <style>{`
        .auth{
          min-height:80vh;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .auth-form{
          width:400px;
          display:flex;
          flex-direction:column;
          gap:20px;
          padding:30px;
          box-shadow:0 5px 20px rgba(0,0,0,.1);
          border-radius:12px;
        }

        .auth-form input{
          padding:15px;
        }

        .auth-form button{
          padding:15px;
          border:none;
          background:#D4AF37;
          color:white;
          border-radius:8px;
        }
      `}</style>
    </>
  );
}

export default RegisterPage;