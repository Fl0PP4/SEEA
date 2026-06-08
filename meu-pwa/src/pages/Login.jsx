import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      senha,
    });

    navigate("/home");
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handleLogin}>
        <h2>Entrar</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}