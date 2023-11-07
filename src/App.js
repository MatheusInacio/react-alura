import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Front-End",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: uuidv4(),
      nome: "Data Sciense",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#D86EBF",
      corSecundaria: "#FAE5F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "GUILHERME LIMA",
      cargo: "Desenvolvedor Python e JavaScript na Alura",
      imagem:
        "	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      nome: "JULIANA AMOASEI",
      cargo: "Desenvolvedora de software e instrutora",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      nome: "DANIEL ARTINE",
      cargo: "Engenheiro de Software na Stone Age",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      nome: "PAULO SILVEIRA",
      cargo: "Hipster e CEO da Alura",
      imagem:
        "https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      nome: "MATHEUS INÁCIO",
      cargo: "Desenvolvedor/Professor",
      imagem: "https://github.com/MatheusInacio.png",
      time: "Front-End",
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  // console.log(colaboradores);

  function deletarColaborador(id) {
    // console.log(id);
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorSecundariaDoTime(cor, id) {
    // console.log(cor,id);
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.corSecundaria = cor;
        }
        return time;
      })
    );
  }

  function mudarCorPrimariaDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.corPrimaria = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoCriarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />
      {times.map((time) => (
        <Time
          key={time.id}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          mudarCorPrimaria={mudarCorPrimariaDoTime}
          mudarCorSecundaria={mudarCorSecundariaDoTime}
          id={time.id}
        />
      ))}
      <Rodape />  
    </div>
  );
}

export default App;
