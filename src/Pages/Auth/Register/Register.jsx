import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const Login = () => {
  const [fio, setFio] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleCreateAccount = () => {
    if (!fio || !phone || !email || !password) {
      toast.error("Iltimos, barcha maydonlarni to'ldiring!");
    } else if (!validateEmail(email)) {
      toast.error("Iltimos, to'g'ri email manzilini kiriting!");
    } else {
      toast.success("Hisob yaratildi!");
    }
    window.location.href = "/location";
  };

  return (
    <>
      <div className="loginContainer d-flex align-items-center justify-content-center">
        <div className="login d-flex align-items-center justify-content-center flex-column">
          <div className="login-header">
            <h2 className="text-center">Yangi hisob yaratish</h2>
          </div>
          <div className="login-body">
            <section className="input">
              <label className="position-absolute" htmlFor="fio">
                <i className="bx bxs-user"></i>
              </label>
              <input
                type="text"
                id="fio"
                placeholder="F.I.O kiriting"
                value={fio}
                onChange={(e) => setFio(e.target.value)}
              />
            </section>
            <section className="input">
              <label className="position-absolute" htmlFor="call">
                <i className="bx bxs-phone"></i>
              </label>
              <InputMask
                type="tel"
                id="call"
                mask="+\9\98 (99) 999-99-99"
                placeholder="Raqamingizni kiriting"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </section>
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
            <section className="d-flex align-items-center justify-content-center">
              <button onClick={handleCreateAccount}>Hisob yaratish</button>
            </section>
            <section className="text-center">
              <span>
                Hisobingiz mavjudmi? <Link to={"/login"}>Kirish</Link>
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
