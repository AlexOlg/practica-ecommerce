import React from "react";
import {useNavigate} from 'react-router-dom'

const Entrada = () => {
  const navigate = useNavigate()
  return (
    <div
      style={{
        backgroundColor:'white',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop:200,
        padding: 20,
        width: 400,
        border: "1px solid black",
        borderRadius: 5,
        
      }}
    >
      <h1>Bienvenido</h1>
      <img src="./productos/logo1.png" alt="logo" style={{ maxWidth: 200 }} />
      <button onClick={() => navigate("/Productos")} style={{ width: 200, marginTop: 10, borderRadius:8 }}>
        Ir a productos
      </button>
    </div>
  );
};

export default Entrada;
