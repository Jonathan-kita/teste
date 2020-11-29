import React from "react";

import { Container } from "./styles";

function ListarAula() {
  return (
    <Container>
      <ul>
        <li>
          <div>
            <strong>Matéria: LTT - Linguagem, Trabalho e Tecnologia</strong>
            <div>
              <time>15:30</time>
              <p>30/11/2020</p>
            </div>
          </div>
          <div></div>
        </li>
      </ul>
    </Container>
  );
}

export default ListarAula;
