import React from "react";
import { HiPencil, HiOutlineTrash } from "react-icons/hi";
import { Container } from "./styles";
import { Link, useHistory } from "react-router-dom";

function ListarAula() {
  
  const history = useHistory();

  return (
    <Container>
      <ul>
        <li>
          <div>
            <strong>
              Matéria: ECO - Ética Profissional e Cidadania Organizacional
            </strong>
            <div>
              <time>15:30</time>
              <p>30/11/2020</p>
            </div>
          </div>
          <nav>
            <button
              onClick={() => {
                 history.push("/editarAula");
              }}
            >
              <HiPencil size={20} color="#81b214" />
            </button>
            <button>
              <HiOutlineTrash size={20} color="#ec5858" />
            </button>
          </nav>
        </li>
        <li>
          <div>
            <strong>Matéria: LTT - Linguagem, Trabalho e Tecnologia</strong>
            <div>
              <time>17:30</time>
              <p>30/11/2020</p>
            </div>
          </div>
          <nav>
            <button
              onClick={() => {
                return history.push("/editarAula");
              }}
            >
              <HiPencil size={20} color="#81b214" />
            </button>
            <button>
              <HiOutlineTrash size={20} color="#ec5858" />
            </button>
          </nav>
        </li>
      </ul>
    </Container>
  );
}

export default ListarAula;
