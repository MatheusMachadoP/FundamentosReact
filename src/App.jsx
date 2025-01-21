import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from 'react';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [] // pega as tarefas do local storage
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)); // salva as tarefas no local storage, assim quando eu dar reload ainda vai aparecer minhas informacoes
  }, [tasks]);

  useEffect(() => {
    // const fetchTasks = async () => {
    //   // CHAMAR A API
    //   const response = await fetch( // posso ter feito com axios tbm mas aqui usamos o fetch
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     }
    //   );
  
    //   // PEGAR OS DADOS QUE ELA RETORNA
    //   const data = await response.json();
    //   console.log(data); // VAI RETORNAR UM ARRAY DE OBJETOS
  
    //   // ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
    //   setTasks(data);
    // };
    // SE QUISER, PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
     //fetchTasks();
  }, []); // essa funcao so sera executada na primeira vez que o usuario acessar a aplicação




// Atualiza o estado da tarefa quando clicada
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {

      //PRECISO ATUALIZAR ESSA TAREFA

      if(task.id === taskId){
        return {
          ...task,
          isCompleted: !task.isCompleted
        };
      } else {
        // NÃO PRECISO ATUALIZAR ESSA TAREFA
        return task;
      }
    });
    setTasks(newTasks);
  }

// Remove a tarefa da lista
  function onTaskDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title,description){
    const newtask = {
      id: v4(), // deixando os id de forma aleatoria com a blibioteca uuid
      title,
      description,
      isCompleted: false
    };
    setTasks([...tasks, newtask]); //adiciona a nova tarefa no array de tarefas, resumindo sao as tarefas que ja estao com as novas
  }

// Renderiza a interface
  return (
    <div className="w-screen h-screen bg-slate-800 justify-center p-6">
      <div className="w=[500px] space-y-4">
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit = {onAddTaskSubmit}/>
        <Tasks tasks={tasks} 
        onTaskClick={onTaskClick}
        onTaskDelete={onTaskDelete}
        />
      </div>
      
    </div>
  );
}

export default App;
