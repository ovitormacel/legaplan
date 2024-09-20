"use client"

import { useState } from "react";
import styles from "./AddNewTask.module.scss";

const AddNewTask = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button className={styles.addNewTask} onClick={() => setModalVisible(true)}>Adicionar nova tarefa</button>
        
            <div className={`${styles.addTaskModalBackground} ${modalVisible ? styles.visible : ""}`}>
                <div className={styles.addTaskModal}>
                    <p className={styles.title}>Nova tarefa</p>

                    <div className={styles.inputBox}>
                        <label htmlFor="taskTitle">Título</label>
                        <input type="text" name="taskTitle" className={styles.newTaskInput} placeholder="Digite"/>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.btnAction} onClick={() => setModalVisible(false)}>Cancelar</button>
                        <button className={`${styles.btnAction} ${styles.add}`}>Adicionar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewTask;