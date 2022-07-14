import { Link } from "react-router-dom";


export default function SideBar() {
    return (
        <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
            <div className="sidebar-header">
                <Link to="/"><img className="main-logo" src="img/logo/logo.png" alt="" /></Link>
                <strong><img src="img/logo/logosn.png" alt="" /></strong>
            </div>
            <div className="nalika-profile">
                <div className="profile-dtl">
                    <Link to="/"><img src="img/notification/4.jpg" alt="" /></Link>
                    <h2>gencho <span className="min-dtn">Dashboard</span></h2>
                </div>
                <div className="profile-social-dtl">
                    <ul className="dtl-social">
                        <li><Link to="/"><i className="icon nalika-facebook"></i></Link></li>
                        <li><Link to="/"><i className="icon nalika-twitter"></i></Link></li>
                        <li><Link to="/"><i className="icon nalika-linkedin"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="left-custom-menu-adp-wrap comment-scrollbar">
                <nav className="sidebar-nav left-sidebar-menu-pro">
                    <ul className="metismenu" id="menu1">
                        <li className="active">
                            <Link to="/">
                                   <i className="icon nalika-home icon-wrap"></i>
                                   <span className="mini-click-non">Home</span>
                                </Link>
                        </li>

                        <li>
                            <Link to="/login" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Login</span></Link>

                        </li>
                        <li>
                            <Link to="/register" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Register</span></Link>

                        </li>  
                        <li>
                            <Link to="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Profile</span></Link>

                        </li> 
                        <li>
                            <Link to="/periodization" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Periodization</span></Link>

                        </li>
                        <li>
                            <Link to="/activities" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Activities</span></Link>

                        </li>
                        <li>
                            <Link to="/exercises" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Exercises</span></Link>

                        </li>
                        <li>
                            <Link to="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">News</span></Link>

                        </li>
                        <li>
                            <Link to="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">ToDo's</span></Link>

                        </li>
                        <li>
                            <Link to="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Strava Dashboard</span></Link>

                        </li>
                        <li>
                            <Link to="/calendar" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Calendar</span></Link>

                        </li>


                    </ul>
                </nav>
            </div>
        </nav>
    </div>
    )
}