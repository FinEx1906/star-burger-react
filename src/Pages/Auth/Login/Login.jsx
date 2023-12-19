import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Login = () => {
  return (
    <>
      <div className="loginContainer d-flex align-items-center justify-content-center">
        <div className="login d-flex align-items-center justify-content-center flex-column">
          <div className="login-header">
            <h2 className="text-center">Hisobingizga kiring</h2>
          </div>
          <div className="login-body">
            <section className="input">
              <label className="position-absolute" htmlFor="email">
                <i class="bx bxs-user"></i>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Emailingizni kiriting"
              />
            </section>
            <section className="input">
              <label className="position-absolute" htmlFor="lock">
                <i class="bx bxs-lock"></i>
              </label>
              <input
                type="password"
                id="lock"
                placeholder="Parolingizni kiriting"
              />
            </section>
            <section className="input">
              <label className="position-absolute" htmlFor="checkLock">
                <i class="bx bxs-check-shield"></i>
              </label>
              <input
                type="password"
                id="checkLock"
                placeholder="Parolingizni kiriting"
              />
            </section>
            <section className="d-flex align-items-center justify-content-center">
              <button>Hisobga kirish</button>
            </section>
            <section className="text-center">
              <span>
                Hisobingizni mavjud emasmi? <Link to={"/"}>Yaratish</Link>
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
