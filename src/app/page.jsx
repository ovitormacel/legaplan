"use client"

import Image from "next/image";
import styles from "./styles/page.module.scss";

//Components
import Header from "@/components/Header";
import AllTasks from "@/components/AllTasks";
import TasksService from "./services/tasksService";

import TasksContext from "@/contexts/TasksContext";
import { useState } from "react";

export default function Home() {
  const {getAllTasks} = TasksService();

  const [tasks, setTasks] = useState(getAllTasks());

  return (
    <>
      <TasksContext.Provider value={{tasks, setTasks}}>
        <Header />
        <AllTasks />
      </TasksContext.Provider>
    </>
  );
}
