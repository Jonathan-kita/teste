import React from "react";

import { Container } from "./styles";

function AdicionarAula() {
  return (
    <Container>
      <form>
        <input type="text" id="materia" name="materia" placeholder="Matéria" />
        <div>
          <h3>Horário</h3>
          <input type="time" id="horario" name="horario" />
        </div>
        <div>
          <h3>Data</h3>
          <input type="date" id="date" name="date" placeholder="Matéria" />
        </div>
        <button>Adicionar Aula</button>
      </form>
    </Container>
  );
}

export default AdicionarAula;
