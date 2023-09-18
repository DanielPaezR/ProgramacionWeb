import React, { useState } from "react";
import ButtonLogin from "./ButtonLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../styles/login.css";
import axios from "axios";

const FormularioLogIn = () => {
  const MySwal = withReactContent(Swal);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inicioSesion = async (e) => {
    e.preventDefault();
    console.log(" :", usuario);
    console.log("Password:", password);

    const data = {
      usuario: usuario,
      password: password,
    };

    //Consumo de Servicio Login
    await axios
      .post("http://89.116.25.43:3500/api/login", data)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", resp.data.user.usuario);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400 || err.response.status == 404) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrio un error!", "error");
        }
      });
  };

  return (
    <div>
       <div className="main">
          <div className="cardPrincipal">
            <div className="cardTittle">
                <h1>Paez Bread</h1>
            </div>
            <div className="cardForm">
                    <h2>Usuario</h2>
                    <input className="inputs" type="text" placeholder="Ingresa tu Usuario"
                    onChange={(e)=> {setUsuario (e.target.value)}}/>
                    <h3>Contraseña</h3>
                    
                    <input className="inputs" type="password" placeholder="Ingresa tu contraseña"
                    onChange={(e)=> {setPassword (e.target.value)}}/>
                <ButtonLogin fnInicioSesion={inicioSesion} label="Ingresar" />
            </div>
          </div>
        </div>
      </div>
    
    )
  }
export default FormularioLogIn