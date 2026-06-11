import Navbar from "../components/Common/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />

      <section className="auth">

        <form className="auth-form">

          <h1>Login</h1>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login
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
          background:#0B1F3A;
          color:white;
          border-radius:8px;
        }
      `}</style>
    </>
  );
}

export default LoginPage;