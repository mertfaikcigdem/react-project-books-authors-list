import React, { useState } from "react";
import "./Navbar.css";
import Popup from "../popup/Popup";
import { Link } from "react-router-dom";
import { BsPersonFill, BsPersonPlusFill } from "react-icons/bs";
import { GiSecretBook } from "react-icons/gi";
import { HiOutlineLogout } from "react-icons/hi";
import userData from "../../userData";

function Navbar() {
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameSurname, setNameSurname] = useState("");
  const [registerUserName, setRegisterUserName] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const Login = (e) => {
    e.preventDefault();

    const findUser = userData.find(
      (user) => user.userName === username && user.password === password
    );
    if (findUser) {
      console.log(findUser);
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("username", username);
      setLoginPopup(false);
      window.location.reload();
    } else {
      alert("Kullanıcı Adı ya da şifre hatalı");
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("username", "");
    }
  };

  const Logout = () => {
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("username", "");
    window.location.reload();
  };

  const Register = (event) => {
    event.preventDefault();

    userData.push({
      nameSurname: nameSurname,
      userName: registerUserName,
      password: registerPassword,
    });

    localStorage.setItem("users", JSON.stringify(userData));

    setSignupPopup(false);
  };

  console.log(userData);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="home-link">
          <button className="home-button">
            <GiSecretBook className="home-icon" />
            Anasayfa
          </button>
        </Link>
        {isLoggedIn ? (
          <div className="user">
            <span className="username">Hoşgeldin</span>
            <span className="username">
              <b>{localStorage.getItem("username")}</b>
            </span>
            <button onClick={Logout} className="logout">
              <HiOutlineLogout className="log-icon" />
              Çıkış Yap
            </button>
          </div>
        ) : (
          <div className="button-bar">
            <button className="log-button" onClick={() => setLoginPopup(true)}>
              <BsPersonFill className="log-icon" />
              Giriş Yap
            </button>
            <Popup
              className="popup-class"
              trigger={loginPopup}
              setTrigger={setLoginPopup}
            >
              <h2>Giriş Yap</h2>
              <form onSubmit={Login}>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Kullanıcı Adı"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="login-input"
                  type="password"
                  placeholder="Şifre"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">
                  Giriş Yap
                </button>
              </form>
            </Popup>
            <button className="log-button" onClick={() => setSignupPopup(true)}>
              <BsPersonPlusFill className="log-icon" />
              Üye Ol
            </button>
            <Popup
              className="popup-class"
              trigger={signupPopup}
              setTrigger={setSignupPopup}
            >
              <h2>Üye Ol</h2>
              <form onSubmit={Register}>
                <input
                  className="login-input"
                  type="text"
                  placeholder="Ad Soyad"
                  onChange={(e) => setNameSurname(e.target.value)}
                />
                <input
                  className="login-input"
                  type="text"
                  placeholder="Kullanıcı Adı"
                  onChange={(e) => setRegisterUserName(e.target.value)}
                />
                <input
                  className="login-input"
                  type="password"
                  placeholder="Şifre"
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button className="login-button" type="submit">
                  Üye Ol
                </button>
              </form>
            </Popup>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
