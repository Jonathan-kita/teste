import React, { useState } from "react";
import axios from 'axios';
import { Container } from "./styles";

function AdicionarAula() {
  let Manha = false;
  let Tarde = false;
  let Noite = false;

  const [Materia, setMateria] = useState('')
  const [Descricao, setDescricao] = useState('')
  
   function cadastrar(){
     
    console.log('teste')
     console.log(Materia + Descricao, Manha + Tarde + Noite);
      axios.post('localhost:3333/Subject',
        {
          "id":"",
          "Name": Materia,
            "Desc": Descricao,
            "Periodo": [
              {
                "Manha": Manha
              },
              {
                "Tarde": Tarde
              },
              {
                "Noite": Noite
              }
            ]
        }
      )
   }

  return (
    <Container>
      <form method="POST" onSubmit={cadastrar} >
        <input type="text" id="materia" name="materia"  placeholder="Matéria" value={Materia} onChange={event =>{setMateria(event.target.value)}}/>
        <textarea id="desc" name="Desc" placeholder="Descreva sua Matéria" value={Descricao} onChange={event =>{setDescricao(event.target.value)}} />
        <h2>Periodo</h2>
        <div className="divcheckbox">
          <div>
            <h3>Manhã</h3>
            <input
              type="checkbox"
              id="Manha"
              name="Manha"
              className="checkbox"
              onChange={(event) => {
                Manha = event.target.checked;
              }}
            />
          </div>
          <div>
            <h3>Tarde</h3>
            <input
              type="checkbox"
              id="Tarde"
              name="Tarde"
              className="checkbox"
              onChange={(event) => {
                Tarde = event.target.checked;
              }}
            />
          </div>
          <div>
            <h3>Noite</h3>
            <input
              type="checkbox"
              id="Noite"
              name="Noite"
              className="checkbox"
              onChange={(event) => {
                Noite = event.target.checked;
              }}
            />
          </div>
        </div>

        <button  type="Submit">Adicionar Aula</button>
      </form>
    </Container>
  );
}

export default AdicionarAula;
