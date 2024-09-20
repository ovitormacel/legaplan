import AddNewTask from "../AddNewTask";
import DeleteTask from "../DeleteTask";
import TaskComponent from "../TaskComponent";
import styles from "./AllTasks.module.scss";

const AllTasks = () => {
    return (
        <section className={styles.taskSection}>
            <div className={styles.tasksContainer}>
                <p className={styles.taskTitle}>Suas tarefas de hoje</p>
                
                <ul className={styles.taskList}>
                    <TaskComponent />
                    <TaskComponent />
                </ul>

                <p className={`${styles.taskTitle} ${styles.finishedTitle}`}>Tarefas Finalizadas</p>
                
                <ul className={styles.finishedTasks}>
                    <TaskComponent finished={true} />
                </ul>
            </div>

            <AddNewTask />
            <DeleteTask />
        </section>
    )
}

export default AllTasks;