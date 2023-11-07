import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Mobile");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem "
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Times"
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();
          aoCriarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cor"
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
