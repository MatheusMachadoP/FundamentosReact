import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
const navigate = useNavigate();

//função que vai ser chamada quando o botão de ver detalhes for clicado
  function onSeeDetailsClick(task){ 
    const query = new URLSearchParams(); //cria um objeto de query string
    query.set('title', task.title); //adiciona o título da tarefa na query
    query.set('description', task.description);  
    navigate(`/task?${query.toString()}`); //navega para a rota /task com os parâmetros da tarefa
  }
   // query é um objeto que contém os parâmetros da URL
   // set é um método que adiciona um parâmetro à URL

return (
  <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow"> 
    {props.tasks.map((task) => (
      <li key={task.id} className="flex gap-2">
        <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 flex-1 text-left text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
            {task.title}             
                 {/* pega o id da tarefa, o props eh um objeto que contém todas as propriedades passadas para o componente quando ele é utilizado ----- task.iscompleted -> nessa logica quando tarefa completa ela vai adicionar um risco na frase */}
                                                                                                                            {/* '&&' se o valor da esquerda for verdadeiro ele executa o valor da direita */}
        </button>
        <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
        </Button>

        <Button onClick={() => props.onTaskDelete(task.id)}
         >
            <TrashIcon />
        </Button>
      </li>
    ))}
  </ul>
);
}

// key={task.id} cada item da lista recebe uma chave unica
export default Tasks;
