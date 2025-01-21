import { useState } from "react";
import Input from "./input";//agora vai

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

// Função chamada quando o botão é clicado
  const handleClick = (e) => {
    // verificacao dos campos de titulo e descricao
    if (!title.trim() || !description.trim()) {
      alert("Por favor, preencha todos os campos");
      return;
    }
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    onAddTaskSubmit(title, description); // Chama a função passada como prop para adicionar a tarefa
    setTitle(""); // Redefine o campo de título
    setDescription(""); // Redefine o campo de descricao
  };

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input //componente input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button onClick={handleClick} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;