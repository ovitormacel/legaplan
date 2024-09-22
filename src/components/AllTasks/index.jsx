"use client"

import { useEffect, useState } from "react";
import AddNewTask from "../AddNewTask";
import TaskComponent from "../TaskComponent";
import styles from "./AllTasks.module.scss";

import { useContext } from "react";
import TasksContext from "@/contexts/TasksContext";

const AllTasks = () => {

    const list = useContext(TasksContext);

    useEffect(() => {
        const listTasks = JSON.parse(localStorage.getItem("allTasks"));

        if(!listTasks){
            const basicList = {
                pending: [
                    {title: "Lavar as mãos"},
                    {title: "Fazer um bolo"},
                    {title: "Lavar a louça"}
                ],

                finished: [
                    {title: "Levar o lixo para fora"}
                ]
            }

            localStorage.setItem("allTasks", JSON.stringify(basicList));
            list.setTasks(basicList);
        
        } else {
            localStorage.setItem("allTasks", JSON.stringify(listTasks));
            list.setTasks(listTasks);
        }

    }, [])


    return (
        <section className={`${styles.taskSection} container`}>
            <div className={styles.tasksContainer}>
                <p className={styles.taskTitle}>Suas tarefas de hoje</p>
                
                <ul className={styles.taskList}>
                    {list.tasks ? list.tasks.pending.map((el, index) => (
                        <TaskComponent key={index} title={el.title}/>
                    )) : (<p className={styles.noTasks}>Nenhuma tarefa pendente.</p>)}
                </ul>

                <p className={`${styles.taskTitle} ${styles.finishedTitle}`}>Tarefas Finalizadas</p>
                
                <ul className={styles.finishedTasks}>
                    {list.tasks ? list.tasks.finished.map((el, index) => (
                        <TaskComponent key={index} title={el.title} finished={true}/>
                    )) : (<p className={styles.noTasks}>Nenhuma tarefa finalizada.</p>)}
                </ul>
            </div>

            <AddNewTask />
        </section>
    )
}

export default AllTasks;