import { useEffect, useState } from "react"
import { getAllExercises } from "../../services/exercises/getAllExercises"
import { ExerciseCard } from "./ExerciseCard"




export const Exercises = () => {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        getAllExercises().then(res =>{
            console.log(res)
            setExercises(res)
        })
            
    }, [])
    
    return (
    <div>
        {exercises.map(ex => <ExerciseCard key={ex.id} exercise={ex} />)}
    <h2>This is exercises</h2>
    </div>
    )
}