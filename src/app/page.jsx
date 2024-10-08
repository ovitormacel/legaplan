"use client"

import Image from "next/image";
import styles from "./styles/page.module.scss";

//Components
import Header from "@/components/Header";
import AllTasks from "@/components/AllTasks";

import TasksContext from "@/contexts/TasksContext";
import { useEffect, useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState();

  useEffect(() => {
    if(typeof localStorage !== 'undefined') {
      setTasks(JSON.parse(localStorage.getItem("allTasks")));
    }
  }, [])

  return (
    <>
      <TasksContext.Provider value={{tasks, setTasks}}>
        <Header />
        <AllTasks />
      </TasksContext.Provider>
    </>
  );
}
