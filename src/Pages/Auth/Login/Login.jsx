import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password || !confirmPassword) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Iltimos, to'g'ri email manzilini kiriting!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Parollar mos kelmaydi!");
      return;
    }

    toast.success("Hisobga kirish muvaffaqiyatli!");
  };

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
                <i className="bx bxs-envelope"></i>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Emailingizni kiriting"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </section>
            <section className="input">
              <label className="position-absolute" htmlFor="lock">
                <i className="bx bxs-lock"></i>
              </label>
              <input
                type="password"
                id="lock"
                placeholder="Parolingizni kiriting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </section>
            <section className="input">
              <label className="position-absolute" htmlFor="checkLock">
                <i className="bx bxs-check-shield"></i>
              </label>
              <input
                type="password"
                id="checkLock"
                placeholder="Parolingizni tasdiqlang"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </section>
            <section className="d-flex align-items-center justify-content-center">
              <button onClick={handleLogin}>Hisobga kirish</button>
            </section>
            <section className="text-center">
              <span>
                Hisobingiz mavjud emasmi? <Link to={"/register"}>Yaratish</Link>
              </span>
            </section>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
