import React from "react";

function useStorageListener(syncUpTasks){
        const [storageChange, setStorageChange] = React.useState(false)

        window.addEventListener('storage', (change) => {
            if (change.key === 'TASKS_V1.0') {
                console.log(change)
                setStorageChange(true)
            }
        });

        const toggleShow = ()=>{
            syncUpTasks()
            setStorageChange(false)
        }

        return {toggleShow, storageChange};
}
export default useStorageListener