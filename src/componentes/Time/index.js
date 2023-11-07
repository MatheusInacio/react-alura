import React from "react";
import "./Time.css";
import hexToRgba from "hex-to-rgba";
import Colaborador from "../Coladorador";

export default function index(props) {
  return props.colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.corSecundaria, '0.6')}}>
      <div className="input-cor">
        <input
          onChange={(evento) => props.mudarCorPrimaria(evento.target.value, props.id)}
          value={props.corPrimaria}
          type="color"
          className="input-cor-primaria"
        />
        <input
          onChange={(evento) => props.mudarCorSecundaria(evento.target.value, props.id)}
          value={props.corSecundaria}
          type="color"
          className="input-cor-secundaria"
        />
      </div>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador, index) => (
          <Colaborador
            corSecudaria={props.corSecundaria}
            corDeFundo={props.corPrimaria}
            key={colaborador.id}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            aoDeletar={props.aoDeletar}
            id={colaborador.id}
            favorito={colaborador.favorito}
            aoFavoritar={props.aoFavoritar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
}
