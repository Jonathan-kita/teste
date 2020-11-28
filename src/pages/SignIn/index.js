import React from "react";
import { Link } from "react-router-dom";
import history from "../../services/history";
import logo from "../../assets/logo-semfundo.png";

function SignIn() {
  return (
    <>
      <img src={logo} />
      <form>
        <input type="email" id="email" name="email" placeholder="Email" />
        <input type="password" id="senha" name="senha" placeholder="Senha" />
        <button onClick={() => history.push("/home")}>Acessar</button>
        <Link to="/register">Criar Conta</Link>
      </form>
    </>
  );
}

export default SignIn;
