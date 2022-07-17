import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllActivities } from "../../services/activities/getAllActivities"
import { ActivityCard } from "./ActivityCard"





export const Activities = () => {

    const [activities, setActivities] = useState([])

    useEffect(() => {
        getAllActivities().then(res =>{
            console.log(res)
            setActivities(res)
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
                                <Link to="/create-activity">Add Activity</Link>
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
                            {activities.map(act => <ActivityCard key={act.id} activity={act} />)}
                                
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