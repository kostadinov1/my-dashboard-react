import { Link } from "react-router-dom";


export default function Header() {
    return(
        <>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="logo-pro">
                            <Link to="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-advance-area">
                <div className="header-top-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="header-top-wraper">
                                    <div className="row">
                                        <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                                            <div className="menu-switcher-pro">
                                                <button type="button" id="sidebarCollapse" className="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                                                        <i className="icon nalika-menu-task"></i>
                                                    </button>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                            <div className="header-top-menu tabl-d-n">
                                                <div className="breadcome-heading">
                                                    <form role="search" className="">
                                                        <input type="text" placeholder="Search..." className="form-control"/>
                                                        <Link to="/"><i className="fa fa-search"></i></Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                            <div className="header-right-info">
                                                <ul className="nav navbar-nav mai-top-nav header-right-menu">
                                                    <li className="nav-item dropdown">
                                                        <Link to="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="fa fa-comments nalika-chat-pro" aria-hidden="true"></i><span className="indicator-ms"></span></Link>
                                                        <div role="menu" className="author-message-top dropdown-menu animated zoomIn">
                                                            <div className="message-single-top">
                                                                <h1>Message</h1>
                                                            </div>
                                                            <ul className="message-menu">
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/1.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Advanda Cro</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/4.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Sulaiman din</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/3.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/2.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="message-view">
                                                                <Link to="/">View All Messages</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item"><Link to="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="fa fa-bell" aria-hidden="true"></i><span className="indicator-nt"></span></Link>
                                                        <div role="menu" className="notification-author dropdown-menu animated zoomIn">
                                                            <div className="notification-single-top">
                                                                <h1>Notifications</h1>
                                                            </div>
                                                            <ul className="notification-menu">
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-tick" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Advanda Cro</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-cloud" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Sulaiman din</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-folder" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link to="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-bar-chart" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                            <div className="notification-view">
                                                                <Link to="/">View All Notification</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link to="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle">
                                                                <i className="fa fa-user" aria-hidden="true"></i>
                                                                <span className="admin-name">Advanda Cro</span>
                                                                <i className="icon nalika-down-arrow nalika-angle-dw nalika-icon"></i>
                                                            </Link>
                                                        <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                                            <li><Link to="register.html"><span className="icon nalika-home author-log-ic"></span> Register</Link>
                                                            </li>
                                                            <li><Link to="/"><span className="icon nalika-user author-log-ic"></span> My Profile</Link>
                                                            </li>
                                                            <li><Link to="lock.html"><span className="icon nalika-diamond author-log-ic"></span> Lock</Link>
                                                            </li>
                                                            <li><Link to="/"><span className="icon nalika-settings author-log-ic"></span> Settings</Link>
                                                            </li>
                                                            <li><Link to="login.html"><span className="icon nalika-unlocked author-log-ic"></span> Log Out</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item nav-setting-open"><Link to="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="icon nalika-menu-task"></i></Link>
    
                                                        <div role="menu" className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn">
                                                            <ul className="nav nav-tabs custon-set-tab">
                                                                <li className="active"><Link data-toggle="tab" to="#Notes">News</Link>
                                                                </li>
                                                                <li><Link data-toggle="tab" to="#Projects">Activity</Link>
                                                                </li>
                                                                <li><Link data-toggle="tab" to="#Settings">Settings</Link>
                                                                </li>
                                                            </ul>
    
                                                            <div className="tab-content custom-bdr-nt">
                                                                <div id="Notes" className="tab-pane fade in active">
                                                                    <div className="notes-area-wrap">
                                                                        <div className="note-heading-indicate">
                                                                            <h2><i className="icon nalika-chat"></i> Latest News</h2>
                                                                            <p>You have 10 New News.</p>
                                                                        </div>
                                                                        <div className="notes-list-area notes-menu-scrollbar">
                                                                            <ul className="notes-menu-list">
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/4.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/3.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/4.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/3.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="Projects" className="tab-pane fade">
                                                                    <div className="projects-settings-wrap">
                                                                        <div className="note-heading-indicate">
                                                                            <h2><i className="icon nalika-happiness"></i> Recent Activity</h2>
                                                                            <p> You have 20 Recent Activity.</p>
                                                                        </div>
                                                                        <div className="project-st-list-area project-st-menu-scrollbar">
                                                                            <ul className="projects-st-menu-list">
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User Registered</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">1 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">2 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">3 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">4 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User Registered</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">5 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">6 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">7 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                                <li>
                                                                                    <Link to="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">9 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div id="Settings" className="tab-pane fade">
                                                                    <div className="setting-panel-area">
                                                                        <div className="note-heading-indicate">
                                                                            <h2><i className="icon nalika-gear"></i> Settings Panel</h2>
                                                                            <p> You have 20 Settings. 5 not completed.</p>
                                                                        </div>
                                                                        <ul className="setting-panel-list">
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Show notifications</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example"/>
                                                                                                <label className="onoffswitch-label" for="example">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Disable Chat</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example3"/>
                                                                                                <label className="onoffswitch-label" for="example3">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Enable history</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example4"/>
                                                                                                <label className="onoffswitch-label" for="example4">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Show charts</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" className="onoffswitch-checkbox" id="example7"/>
                                                                                                <label className="onoffswitch-label" for="example7">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Update everyday</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" checked="" className="onoffswitch-checkbox" id="example2"/>
                                                                                                <label className="onoffswitch-label" for="example2">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Global search</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" checked="" className="onoffswitch-checkbox" id="example6"/>
                                                                                                <label className="onoffswitch-label" for="example6">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                            <li>
                                                                                <div className="checkbox-setting-pro">
                                                                                    <div className="checkbox-title-pro">
                                                                                        <h2>Offline users</h2>
                                                                                        <div className="ts-custom-check">
                                                                                            <div className="onoffswitch">
                                                                                                <input type="checkbox" name="collapsemenu" checked="" className="onoffswitch-checkbox" id="example5"/>
                                                                                                <label className="onoffswitch-label" for="example5">
                                                                                                        <span className="onoffswitch-inner"></span>
                                                                                                        <span className="onoffswitch-switch"></span>
                                                                                                    </label>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </li>
                                                                        </ul>
    
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="mobile-menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="mobile-menu">
                                    <nav id="dropdown">
                                        <ul className="mobile-menu-nav">
                                            <li><Link data-toggle="collapse" data-target="#Charts" to="/">Home <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                                <ul className="collapse dropdown-header-top">
                                                    <li><Link to="index.html">Dashboard v.1</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/login">Login<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/register">Register<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/profile">Profile<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/activities">Activities<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/exercises">Exercises<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/news">News<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/todos">ToDo's<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/strava-dashboard">StravaDashboard<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                            <li>
                                                <Link data-toggle="collapse" data-target="#demo" to="/calendar">Calendar<span className="admin-project-icon nalika-icon nalika-down-arrow"></span></Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                    
                </div>
            </>
    )
}