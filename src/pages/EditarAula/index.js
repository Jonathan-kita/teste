import React from "react";

import { Container } from "./styles";

function EditarAula() {
  return (
    <Container>
      <form>
        <input
          type="text"
          id="materia"
          name="materia"
          placeholder="Matéria"
          defaultValue={"LTT - Linguagem, Trabalho e Tecnologia"}
        />
        <div>
          <h3>Horário</h3>
          <input
            type="time"
            id="horario"
            name="horario"
            defaultValue={"23:00"}
          />
        </div>
        <div>
          <h3>Data</h3>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Matéria"
            defaultValue={"2020-11-29"}
            max={"2020-12-31"}
          />
        </div>
        <button>Editar Aula</button>
      </form>
    </Container>
  );
}

export default EditarAula;
