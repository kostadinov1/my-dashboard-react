

export default function SideBar() {
    return (
        <div className="left-sidebar-pro">
        <nav id="sidebar" className="">
            <div className="sidebar-header">
                <a href="/"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
                <strong><img src="img/logo/logosn.png" alt="" /></strong>
            </div>
            <div className="nalika-profile">
                <div className="profile-dtl">
                    <a href="/"><img src="img/notification/4.jpg" alt="" /></a>
                    <h2>gencho <span className="min-dtn">Dashboard</span></h2>
                </div>
                <div className="profile-social-dtl">
                    <ul className="dtl-social">
                        <li><a href="/"><i className="icon nalika-facebook"></i></a></li>
                        <li><a href="/"><i className="icon nalika-twitter"></i></a></li>
                        <li><a href="/"><i className="icon nalika-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="left-custom-menu-adp-wrap comment-scrollbar">
                <nav className="sidebar-nav left-sidebar-menu-pro">
                    <ul className="metismenu" id="menu1">
                        <li className="active">
                            <a href="/">
                                   <i className="icon nalika-home icon-wrap"></i>
                                   <span className="mini-click-non">Home</span>
                                </a>
                        </li>

                        <li>
                            <a href="/login" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Login</span></a>

                        </li>
                        <li>
                            <a href="/register" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Register</span></a>

                        </li>  
                        <li>
                            <a href="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Profile</span></a>

                        </li> 
                        <li>
                            <a href="/activities" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Activities</span></a>

                        </li>
                        <li>
                            <a href="/exercises" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Exercises</span></a>

                        </li>
                        <li>
                            <a href="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">News</span></a>

                        </li>
                        <li>
                            <a href="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">ToDo's</span></a>

                        </li><li>
                            <a href="/" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Strava Dashboard</span></a>

                        </li><li>
                            <a href="/calendar" ><i className="icon nalika-mail icon-wrap"></i> <span className="mini-click-non">Calendar</span></a>

                        </li>


                    </ul>
                </nav>
            </div>
        </nav>
    </div>
    )
}