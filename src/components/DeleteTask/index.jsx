"use client"

import { useState } from "react";
import styles from "./DeleteTask.module.scss";

const DeleteTask = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <button className={styles.addNewTask} onClick={() => setModalVisible(true)}>Adicionar nova tarefa</button>
        
            <div className={`${styles.deleteTaskModalBackground} ${modalVisible ? styles.visible : ""}`}>
                <div className={styles.deleteTaskModal}>
                    <p className={styles.title}>Deletar tarefa</p>

                    <p className={styles.info}>Tem certeza que você deseja deletar essa tarefa?</p>

                    <div className={styles.actions}>
                        <button className={styles.btnAction} onClick={() => setModalVisible(false)}>Cancelar</button>
                        <button className={`${styles.btnAction} ${styles.delete}`}>Deletar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteTask;