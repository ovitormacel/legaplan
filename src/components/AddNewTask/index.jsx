"use client"

import { useState } from "react";
import styles from "./AddNewTask.module.scss";
import TasksService from "@/app/services/tasksService";

import { useContext } from "react";
import TasksContext from "@/contexts/TasksContext";

const AddNewTask = () => {

    const {addNewTask} = TasksService();

    const list = useContext(TasksContext);

    const [modalVisible, setModalVisible] = useState(false);
    
    const [titleInput, setTitleInput] = useState("");

    const submitANewTask = () => {
        const newList = addNewTask(titleInput);
        list.setTasks(JSON.parse(newList));

        setTitleInput("");
        setModalVisible(false);
    }

    return (
        <>
            <button className={styles.addNewTask} onClick={() => setModalVisible(true)}>Adicionar nova tarefa</button>
        
            <div className={`${styles.addTaskModalBackground} ${modalVisible ? styles.visible : ""}`}>
                <div className={styles.addTaskModal}>
                    <p className={styles.title}>Nova tarefa</p>

                    <div className={styles.inputBox}>
                        <label htmlFor="taskTitle">Título</label>
                        <input onChange={(e) => setTitleInput(e.target.value)} value={titleInput} type="text" name="taskTitle" className={styles.newTaskInput} placeholder="Digite"/>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.btnAction} onClick={() => setModalVisible(false)}>Cancelar</button>
                        <button onClick={() => submitANewTask()} className={`${styles.btnAction} ${styles.add}`}>Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewTask;