"use client"

import Image from "next/image";
import styles from "./styles/page.module.scss";

//Components
import Header from "@/components/Header";
import AllTasks from "@/components/AllTasks";
import tasksService from "@/services/tasksService";
import TasksContext from "@/contexts/TasksContext";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(tasksService.getAllTasks());

  return (
    <>
      <TasksContext.Provider value={{tasks, setTasks}}>
        <Header />
        <AllTasks />
      </TasksContext.Provider>
    </>
  );
}
