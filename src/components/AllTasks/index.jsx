"use client"

import { useEffect, useState } from "react";
import AddNewTask from "../AddNewTask";
import TaskComponent from "../TaskComponent";
import styles from "./AllTasks.module.scss";
import tasksService from "@/services/tasksService";

import { useContext } from "react";
import TasksContext from "@/contexts/TasksContext";

const AllTasks = () => {

    const list = useContext(TasksContext);

    return (
        <section className={styles.taskSection}>
            <div className={styles.tasksContainer}>
                <p className={styles.taskTitle}>Suas tarefas de hoje</p>
                
                <ul className={styles.taskList}>
                    {list.tasks ? list.tasks.pending.map((el) => (
                        <TaskComponent title={el.title}/>
                    )) : (<p>Nenhuma tarefa encontrada.</p>)}
                </ul>

                <p className={`${styles.taskTitle} ${styles.finishedTitle}`}>Tarefas Finalizadas</p>
                
                <ul className={styles.finishedTasks}>
                    {list.tasks ? list.tasks.finished.map((el) => (
                        <TaskComponent title={el.title} finished={true}/>
                    )) : (<p>Nenhuma tarefa encontrada.</p>)}
                </ul>
            </div>

            <AddNewTask />
        </section>
    )
}

export default AllTasks;