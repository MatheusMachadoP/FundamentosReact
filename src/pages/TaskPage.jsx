import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon} from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate(); // useNavigate é um hook que retorna uma função para navegar entre as rotas
  const [searchParams] = useSearchParams(); // useSearchParams é um hook que retorna um objeto com os parâmetros da URL
  const title = searchParams.get("title"); // get é um método que retorna o valor de um parâmetro da URL
  const description = searchParams.get("description"); // get é um método que retorna o valor de um parâmetro da URL

//   function onBackClick(){
//     navigate(-1); //navega para a rota anterior
//   }
// onClick={(onBackClick)} 

return (
    <div className="h-screen p-6 bg-slate-800 w-screen">
      <div className="w-[500px] space-y-4 mx-auto">
    
    <div className="flex justify-center relative mb-6">
        <button 
        onClick={() => navigate(-1)} // ou podemos a funcao que esta nos comentarios
        className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon />
        </button>
     <Title>
          Detalhes da Tarefa
        </Title>
    </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;