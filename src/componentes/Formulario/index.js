import React, { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = ({ aoCadastrar, times, aoCriarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("Mobile");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");
  const [corSecundariaTime, setCorSecundariaTime] = useState("#ffffff");


  const aoSubmeter = (evento) => {
    evento.preventDefault();
    // console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoSubmeterTime = (evento) => {
    evento.preventDefault();
    // console.log("form enviado", nome, cargo, imagem, time);
    aoCriarTime({ nome: nomeTime, corPrimaria: corTime , corSecundaria: corSecundariaTime});

    setNomeTime("");
    setCorTime("#000000");
    setCorSecundariaTime("#ffffff");
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome "
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo "
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
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
        <Botao>Criar Colaborador</Botao>
      </form>
      <form className="formulario" onSubmit={aoSubmeterTime}>
        <h2>Preencha os dados para criar um novo time.</h2>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio={true}
          label="Cor Primária"
          placeholder="Digite sua cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Campo
          type="color"
          obrigatorio={true}
          label="Cor Secundária"
          placeholder="Digite sua cor"
          valor={corSecundariaTime}
          aoAlterado={(valor) => setCorSecundariaTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
