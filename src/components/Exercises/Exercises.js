import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

        <div className="product-status mg-b-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-status-wrap">
                            <h4>Exercise List</h4>
                            <div className="add-product">
                                <Link to="product-edit.html">Add Exercise</Link>
                            </div>
                            <table>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Calories</th>
                                    <th>RPE</th>
                                    <th>Setting</th>
                                </tr>
                            {exercises.map(ex => <ExerciseCard key={ex.id} exercise={ex} />)}
                                
                            </table>
                            <div className="custom-pagination">
                                <ul className="pagination">
                                    <li className="page-item"><Link className="page-link" to="/">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/">1</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/">3</Link></li>
                                    <li className="page-item"><Link className="page-link" to="/">Next</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}