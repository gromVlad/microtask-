import React, {useState} from 'react';
import './App.css';
import {Todolist,TaskType} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type ТodolistsType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};


export type Тodotask = {
  [key: string]: TaskType[]
};


function App() {

    let todolistID1=v1();
    let todolistID2=v1();

    let [todolists, setTodolists] = useState<Array<ТodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<Тodotask>({
      [todolistID1]: [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Rest API", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
      ],
      [todolistID2]: [
        { id: v1(), title: "HTML&CSS2", isDone: true },
        { id: v1(), title: "JS2", isDone: true },
        { id: v1(), title: "ReactJS2", isDone: false },
        { id: v1(), title: "Rest API2", isDone: false },
        { id: v1(), title: "GraphQL2", isDone: false },
      ],
    });



    function removeTask(id: string, idTodo:string) {
      setTasks({...tasks,[idTodo]:tasks[idTodo].filter(el => el.id !== id)})
    }

    function addTask(title: string,idTodo:string) {
      const newtask = { id: v1(), title, isDone: false }
      setTasks({...tasks,[idTodo]:[...tasks[idTodo],newtask]})
    }

    function changeStatus(taskId: string, isDone: boolean, idTodo: string) {
      setTasks({...tasks,[idTodo]:tasks[idTodo].map(el => el.id === taskId ? {...el,isDone}: el)})
    }

    function changeFilter(value: FilterValuesType, idTodo: string) {
      setTodolists(
        todolists.map((el) =>
          el.id === idTodo ? { ...el, filter: value } : el
        )
      );
    }


    return (
      <div className="App">
        {todolists.map(el => {
          let tasksForTodolist = tasks[el.id];

          if (el.filter === "active") {
            tasksForTodolist = tasks[el.id].filter((t) => t.isDone === false);
          }
          if (el.filter === "completed") {
            tasksForTodolist = tasks[el.id].filter((t) => t.isDone === true);
          }


          return (
            <Todolist
              key={el.id}
              id={el.id}
              title={el.title}
              tasks={tasksForTodolist}
              removeTask={removeTask}
              changeFilter={changeFilter}
              addTask={addTask}
              changeTaskStatus={changeStatus}
              filter={el.filter}
            />
          );
        })}
      </div>
    );
}

export default App;
