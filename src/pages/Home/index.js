import React from "react";
import { HiPencil, HiPlus, HiOutlineTrash } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { Container } from "./styles";
import history from "../../services/history";

function Dashboard() {
  return (
    <Container>
      <ul>
        <li onClick={() => history.push("/Adicionar")}>
          <HiPlus size={25} color="#7159c1" />
          <strong>Adicionar Aula</strong>
        </li>
        <li>
          <HiPencil size={25} color="#7159c1" />
          <strong>Editar Aula</strong>
        </li>
        <li>
          <FiInfo size={25} color="#7159c1" />
          <strong>Ver Aulas </strong>
        </li>
        <li>
          <HiOutlineTrash size={25} color="#7159c1" />
          <strong>Excluir Aula</strong>
        </li>
      </ul>
    </Container>
  );
}

export default Dashboard;
