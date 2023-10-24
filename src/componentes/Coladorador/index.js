import React from "react";
import "./Colaborador.css";

export default function Colaborador({ nome, imagem, cargo, corDeFundo, corSecudaria}) {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  );
}
