import React from "react";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <>
      <div className="loginContainer d-flex align-items-center justify-content-center">
        <div className="login d-flex align-items-center justify-content-center flex-column">
          <div className="login-header">
            <h2 className="text-center">MAnzilingizni kiriting</h2>
          </div>
          <div className="login-body">
            <section className="input">
              <label className="position-absolute" htmlFor="checkLock">
                <i className="bx bxs-home"></i>
              </label>
              <input
                type="password"
                id="checkLock"
                placeholder="Mahalla va ko'cha nomi"
              />
            </section>
            <section className="d-flex align-items-center justify-content-center">
              <button>Hisobga kirish</button>
            </section>
            <section className="text-center">
              <span>
                Bu orqali biz, manzilingizga <br />
                buyurtmangizni yetkazishimiz mumkin!
              </span>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
