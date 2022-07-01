import { Link } from "react-router-dom"


export const ExerciseCard = ({exercise}) => {
    return (
        <tr>
        <td><img src="img/new-product/5-small.jpg" alt="" /></td>
        <td>{exercise.name}</td>
        <td>
            <button className="pd-setting">{exercise.type}</button>
        </td>
        <td>{exercise.calories_burned}</td>
        <td>RPEspecific</td>
        <td>
            <Link to="/exercise-details/"><button  data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
            <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>
    </tr>
    )
}