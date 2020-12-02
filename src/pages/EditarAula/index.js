import React from "react";

import { Container } from "./styles";

function EditarAula() {
  let Manha = false;
  let Tarde = false;
  let Noite = false;
  return (
    <Container>
       <form>
        <input type="text" id="materia" name="materia" placeholder="Matéria" />
        <textarea id="desc" name="Desc" placeholder="Descreva sua Matéria" />
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

        <button>Editar Aula</button>
      </form>
    </Container>
  );
}

export default EditarAula;
