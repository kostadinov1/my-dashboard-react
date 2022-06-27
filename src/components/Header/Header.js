

export default function Header() {
    return(
        <>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="logo-pro">
                            <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
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
                                                        <a href="/"><i className="fa fa-search"></i></a>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                                            <div className="header-right-info">
                                                <ul className="nav navbar-nav mai-top-nav header-right-menu">
                                                    <li className="nav-item dropdown">
                                                        <a href="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="icon nalika-mail nalika-chat-pro" aria-hidden="true"></i><span className="indicator-ms"></span></a>
                                                        <div role="menu" className="author-message-top dropdown-menu animated zoomIn">
                                                            <div className="message-single-top">
                                                                <h1>Message</h1>
                                                            </div>
                                                            <ul className="message-menu">
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/1.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Advanda Cro</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/4.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Sulaiman din</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/3.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="message-img">
                                                                            <img src="img/contact/2.jpg" alt=""/>
                                                                        </div>
                                                                        <div className="message-content">
                                                                            <span className="message-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="message-view">
                                                                <a href="/">View All Messages</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item"><a href="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="icon nalika-alarm" aria-hidden="true"></i><span className="indicator-nt"></span></a>
                                                        <div role="menu" className="notification-author dropdown-menu animated zoomIn">
                                                            <div className="notification-single-top">
                                                                <h1>Notifications</h1>
                                                            </div>
                                                            <ul className="notification-menu">
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-tick" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Advanda Cro</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-cloud" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Sulaiman din</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-folder" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/">
                                                                        <div className="notification-icon">
                                                                            <i className="icon nalika-bar-chart" aria-hidden="true"></i>
                                                                        </div>
                                                                        <div className="notification-content">
                                                                            <span className="notification-date">16 Sept</span>
                                                                            <h2>Victor Jara</h2>
                                                                            <p>Please done this project as soon possible.</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="notification-view">
                                                                <a href="/">View All Notification</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle">
                                                                <i className="icon nalika-user nalika-user-rounded header-riht-inf" aria-hidden="true"></i>
                                                                <span className="admin-name">Advanda Cro</span>
                                                                <i className="icon nalika-down-arrow nalika-angle-dw nalika-icon"></i>
                                                            </a>
                                                        <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                                                            <li><a href="register.html"><span className="icon nalika-home author-log-ic"></span> Register</a>
                                                            </li>
                                                            <li><a href="/"><span className="icon nalika-user author-log-ic"></span> My Profile</a>
                                                            </li>
                                                            <li><a href="lock.html"><span className="icon nalika-diamond author-log-ic"></span> Lock</a>
                                                            </li>
                                                            <li><a href="/"><span className="icon nalika-settings author-log-ic"></span> Settings</a>
                                                            </li>
                                                            <li><a href="login.html"><span className="icon nalika-unlocked author-log-ic"></span> Log Out</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="nav-item nav-setting-open"><a href="/" data-toggle="dropdown" role="button"  className="nav-link dropdown-toggle"><i className="icon nalika-menu-task"></i></a>
    
                                                        <div role="menu" className="admintab-wrap menu-setting-wrap menu-setting-wrap-bg dropdown-menu animated zoomIn">
                                                            <ul className="nav nav-tabs custon-set-tab">
                                                                <li className="active"><a data-toggle="tab" href="#Notes">News</a>
                                                                </li>
                                                                <li><a data-toggle="tab" href="#Projects">Activity</a>
                                                                </li>
                                                                <li><a data-toggle="tab" href="#Settings">Settings</a>
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
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/4.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/3.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/4.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/1.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/2.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="notes-list-flow">
                                                                                            <div className="notes-img">
                                                                                                <img src="img/contact/3.jpg" alt="" />
                                                                                            </div>
                                                                                            <div className="notes-content">
                                                                                                <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                                                                                                <span>Yesterday 2:45 pm</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
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
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User Registered</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">1 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">2 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">3 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order Received</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">4 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User Registered</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">5 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">6 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New User</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">7 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="/">
                                                                                        <div className="project-list-flow">
                                                                                            <div className="projects-st-heading">
                                                                                                <h2>New Order</h2>
                                                                                                <p> The point of using Lorem Ipsum is that it has a more or less normal.</p>
                                                                                                <span className="project-st-time">9 hours ago</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </a>
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
                                            <li><a data-toggle="collapse" data-target="#Charts" href="/">Home <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                                <ul className="collapse dropdown-header-top">
                                                    <li><a href="index.html">Dashboard v.1</a></li>
                                                    <li><a href="index-1.html">Dashboard v.2</a></li>
                                                    <li><a href="index-3.html">Dashboard v.3</a></li>
                                                    <li><a href="product-list.html">Product List</a></li>
                                                    <li><a href="product-edit.html">Product Edit</a></li>
                                                    <li><a href="product-detail.html">Product Detail</a></li>
                                                    <li><a href="product-cart.html">Product Cart</a></li>
                                                    <li><a href="product-payment.html">Product Payment</a></li>
                                                    <li><a href="analytics.html">Analytics</a></li>
                                                    <li><a href="widgets.html">Widgets</a></li>
                                                </ul>
                                            </li>
                                            <li><a data-toggle="collapse" data-target="#demo" href="/">Mailbox <span className="admin-project-icon nalika-icon nalika-down-arrow"></span></a>
                                                <ul id="demo" className="collapse dropdown-header-top">
                                                    <li><a href="mailbox.html">Inbox</a>
                                                    </li>
                                                    <li><a href="mailbox-view.html">View Mail</a>
                                                    </li>
                                                    <li><a href="mailbox-compose.html">Compose Mail</a>
                                                    </li>
                                                </ul>
                                            </li>



                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>









                    <div className="breadcome-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="breadcome-list">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                <div className="breadcomb-wp">
                                                    <div className="breadcomb-icon">
                                                        <i className="icon nalika-home"></i>
                                                    </div>
                                                    <div className="breadcomb-ctn">
                                                        <h2>Dashboard Two</h2>
                                                        <p>Welcome to Nalika <span className="bread-ntd">Admin Template</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                                <div className="breadcomb-report">
                                                    <button data-toggle="tooltip" data-placement="left" title="Download Report" className="btn"><i className="icon nalika-download"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-admin container-fluid res-mg-t-15">
                    <div className="row admin text-center">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                    <div className="admin-content analysis-progrebar-ctn">
                                        <h4 className="text-left text-uppercase"><b>Orders</b></h4>
                                        <div className="row vertical-center-box vertical-center-box-tablet">
                                            <div className="col-xs-3 mar-bot-15 text-left">
                                                <label className="label bg-green">30% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                            </div>
                                            <div className="col-xs-9 cus-gh-hd-pro">
                                                <h2 className="text-right no-margin">10,000</h2>
                                            </div>
                                        </div>
                                        <div className="progress progress-mini">
                                            <div style={{width: "78%" }}className="progress-bar bg-green"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12" style={{marginBottom: "1px"}}>
                                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                        <h4 className="text-left text-uppercase"><b>Tax Deduction</b></h4>
                                        <div className="row vertical-center-box vertical-center-box-tablet">
                                            <div className="text-left col-xs-3 mar-bot-15">
                                                <label className="label bg-red">15% <i className="fa fa-level-down" aria-hidden="true"></i></label>
                                            </div>
                                            <div className="col-xs-9 cus-gh-hd-pro">
                                                <h2 className="text-right no-margin">5,000</h2>
                                            </div>
                                        </div>
                                        <div className="progress progress-mini">
                                            <div style={{width: "38%" }} className="progress-bar progress-bar-danger bg-red"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                        <h4 className="text-left text-uppercase"><b>Revenue</b></h4>
                                        <div className="row vertical-center-box vertical-center-box-tablet">
                                            <div className="text-left col-xs-3 mar-bot-15">
                                                <label className="label bg-blue">50% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                            </div>
                                            <div className="col-xs-9 cus-gh-hd-pro">
                                                <h2 className="text-right no-margin">$70,000</h2>
                                            </div>
                                        </div>
                                        <div className="progress progress-mini">
                                            <div style={{width: "60%" }} className="progress-bar bg-blue"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                    <div className="admin-content analysis-progrebar-ctn res-mg-t-30">
                                        <h4 className="text-left text-uppercase"><b>Yearly Sales</b></h4>
                                        <div className="row vertical-center-box vertical-center-box-tablet">
                                            <div className="text-left col-xs-3 mar-bot-15">
                                                <label className="label bg-purple">80% <i className="fa fa-level-up" aria-hidden="true"></i></label>
                                            </div>
                                            <div className="col-xs-9 cus-gh-hd-pro">
                                                <h2 className="text-right no-margin">$100,000</h2>
                                            </div>
                                        </div>
                                        <div className="progress progress-mini">
                                            <div style={{width: "60%" }} className="progress-bar bg-purple"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    )
}