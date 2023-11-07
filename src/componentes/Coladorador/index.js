import React from "react";
import "./Colaborador.css";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Colaborador({
  nome,
  imagem,
  cargo,
  corDeFundo,
  aoDeletar,
  id
}) {
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        color="#fff"
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
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
