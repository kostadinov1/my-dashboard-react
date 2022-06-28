import { useEffect, useState } from "react"
import { getAllExercises } from "../../services/exercises/getAllExercises"


export const Exercises = () => {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getAllExercises().then(res =>{
            console.log(res)
        })
            
    }, [])
    
    return (
    <div>
    <h2>This is exercises</h2>
    </div>
    )
}