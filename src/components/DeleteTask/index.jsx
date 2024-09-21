"use client"

import tasksService from "@/services/tasksService";
import styles from "./DeleteTask.module.scss";

import { useContext } from "react";
import TasksContext from "@/contexts/TasksContext";

const DeleteTask = ({taskTitle, finished, modalVisible, close}) => {
    
    const list = useContext(TasksContext);

    const deleteTask = () => {
        const newList = tasksService.deleteTask(taskTitle, finished);
        
        list.setTasks(newList);

        close();
    }

    return (
        <>
            <div className={`${styles.deleteTaskModalBackground} ${modalVisible ? styles.visible : ""}`}>
                <div className={styles.deleteTaskModal}>
                    <p className={styles.title}>Deletar tarefa</p>

                    <p className={styles.info}>Tem certeza que você deseja deletar essa tarefa?</p>

                    <div className={styles.actions}>
                        <button className={styles.btnAction} onClick={() => {close()}}>Cancelar</button>
                        <button className={`${styles.btnAction} ${styles.delete}`} onClick={() => {deleteTask()}}>Deletar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteTask;