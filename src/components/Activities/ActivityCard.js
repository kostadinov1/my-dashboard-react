import { Link } from "react-router-dom"


export const ActivityCard = ({activity}) => {
    return (
        <tr>
        <td><img src="img/new-product/5-small.jpg" alt="" /></td>
        <td>{activity.name}</td>
        <td>
            <button className="pd-setting">{activity.type}</button>
        </td>
        <td>{activity.calories_burned}</td>
        <td>RPEspecific</td>
        <td>
            <Link to="/exercise-details/"><button  data-toggle="tooltip" title="Edit" className="pd-setting-ed"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button></Link>
            <button data-toggle="tooltip" title="Trash" className="pd-setting-ed"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
        </td>
    </tr>
    )
}