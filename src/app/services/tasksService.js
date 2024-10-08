'use client'

const TasksService = () => {
    const addNewTask = (title) => {
        const tasks = localStorage.getItem("allTasks");

        if(tasks) {
            const newList = JSON.parse(tasks);
            newList.pending.push({title});
            localStorage.setItem("allTasks", JSON.stringify(newList))

            return JSON.stringify(newList);

        } else {
            const newList = {
                pending: [{title}],
                finished: []
            }

            return JSON.stringify(newList);
        }
    };

    const completeTask = (title) => {
        let list = JSON.parse(localStorage.getItem("allTasks"));
        let indexnmb;

        const task = list.pending.filter((el, index) => {
            if(el.title === title) {
                indexnmb = index
            }
            
            return el.title === title;
        });

        if(indexnmb >= 0) {
            list.pending.splice(indexnmb, 1);
            list.finished.push({title})
        }

        localStorage.setItem("allTasks", JSON.stringify(list))

        return list;
    };

    const pendingTask = (title) => {
        let list = JSON.parse(localStorage.getItem("allTasks"));
        let indexnmb;

        const task = list.finished.filter((el, index) => {
            if(el.title === title) {
                indexnmb = index
            }
            
            return el.title === title;
        });

        if(indexnmb >= 0) {
            list.finished.splice(indexnmb, 1);
            list.pending.push({title})
        }

        localStorage.setItem("allTasks", JSON.stringify(list))

        return list;
    };

    const deleteTask = (title, finished) => {
        let list = JSON.parse(localStorage.getItem("allTasks"));
        let indexnmb;

        if(finished) {
            const task = list.finished.filter((el, index) => {
                if(el.title === title) {
                    indexnmb = index
                }
                
                return el.title === title;
            });
    
            if(indexnmb >= 0) {
                list.finished.splice(indexnmb, 1);
            }
    
            localStorage.setItem("allTasks", JSON.stringify(list))
    
            return list;
        } else {

            const task = list.pending.filter((el, index) => {
                if(el.title === title) {
                    indexnmb = index
                }
                
                return el.title === title;
            });
    
            if(indexnmb >= 0) {
                list.pending.splice(indexnmb, 1);
            }
    
            localStorage.setItem("allTasks", JSON.stringify(list))
    
            return list;

        }
    }

    return {addNewTask, completeTask, pendingTask, deleteTask,}
}

export default TasksService;