// import { useState } from 'react';
// import AddTask from './components/AddTask';
// import FilterTabs from './components/FilterTabs';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import Stats from './components/Stats';



// const initalTasks=[
//     {
//       id:1,
//       title:"Learn React",
//       completed:false,
//       priority:"High",
//       date:"Today"
//     },
//      {
//     id: 2,
//     title: "Build a project",
//     completed: true,
//     priority: "Medium",
//     date: "Today",
//   },
//   {
//     id: 3,
//     title: "Practice JavaScript",
//     completed: false,
//     priority: "Low",
//     date: "Today",
//   },
//   {
//     id: 4,
//     title: "Read documentation",
//     completed: true,
//     priority: "Medium",
//     date: "Today",
//   },
//   {
//     id: 5,
//     title: "Prepare for interview",
//     completed: false,
//     priority: "High",
//     date: "Today",
//   },
//   ]
 

// function App() {

//   // const[tasks,setTasks] = useState(()=>{
//   //   const savedTasks = localStorage.getItem("tasks");

//   //   return savedTasks?JSON.parse(savedTasks):
//   //   initalTasks;
//   // });

//   const [filter, setFilter] = useState("all");

  

//   return (
//     <>
//     <div className='bg-slate-200'>


//       <Header/>
//     <AddTask/>
//     <SearchBar/>
//     <Stats/>
//     <FilterTabs filter={filter}
//     setFilter={setFilter} />
// {/* 
//     <TaskList/> */}

//     <Footer/>





//     </div>
    
//     </>
//   )
// }

// export default App


import { useEffect, useState } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";
import FilterTabs from "./components/FilterTabs";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";

const initialTasks = [
  {
    id: 1,
    title: "Learn React",
    completed: false,
    priority: "High",
    date: "Today",
  },
  {
    id: 2,
    title: "Build a project",
    completed: true,
    priority: "Medium",
    date: "Today",
  },
  {
    id: 3,
    title: "Practice JavaScript",
    completed: false,
    priority: "Low",
    date: "Today",
  },
  {
    id: 4,
    title: "Read documentation",
    completed: true,
    priority: "Medium",
    date: "Today",
  },
  {
    id: 5,
    title: "Prepare for interview",
    completed: false,
    priority: "High",
    date: "Today",
  },
];

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : initialTasks;
  });

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        title: task,
        completed: false,
        priority: "Medium",
        date: "Today",
      },
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  const editTask = (id, newTitle) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title: newTitle,
            }
          : task
      )
    );
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const remainingTasks =
    totalTasks - completedTasks;

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all"
        ? true
        : filter === "active"
        ? !task.completed
        : task.completed;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-[#f5f8fc] px-4 py-6 text-slate-900 sm:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <Header />

        <main className="p-5 sm:p-8">

          <AddTask onAddTask={addTask} />

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <Stats
            total={totalTasks}
            completed={completedTasks}
            remaining={remainingTasks}
          />

          <FilterTabs
            filter={filter}
            setFilter={setFilter}
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />

        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
