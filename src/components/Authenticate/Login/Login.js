import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { login } from "../../../services/auth/loginService";

export const Login = () => {
    const { onLogin } = useContext(AuthContext)

    const navigate = useNavigate()

    const onLoginHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget)

        const email = formData.get('email');
        const password = formData.get('password')

        login(email, password).then((loginData) => {
            console.log(loginData)
            console.log('loggedIn')
            onLogin(loginData.token)
            navigate('/')

            }).catch((err) => {
                // TODO show notification
                console.log(err)
            
        // onLogin(email)
        })


    }


   return (
<>
    <div className="color-line"></div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="back-link back-backend">
                    <Link to="index.html" className="btn btn-primary">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
            <div className="col-md-4 col-md-4 col-sm-4 col-xs-12">
                <div className="text-center m-b-md custom-login">
                    <h3>PLEASE LOGIN from Here</h3>
                    <p>Human Periodization</p>
                </div>
                <div className="hpanel">
                    <div className="panel-body">

                        <form onClick={onLoginHandler} id="loginForm">
                            <div className="form-group">
                                <label className="control-label" for="username">Email</label>
                                <input type="email"  title="Please enter you Email" name="email" id="username" className="form-control"/>
                                    <span className="help-block small">Your unique username to app</span>
                            </div>
                            <div className="form-group">
                                <label className="control-label" for="password">Password</label>
                                <input type="password" title="Please enter your password"   name="password" id="password" className="form-control"/>
                                <span className="help-block small">Yur strong password</span>
                            </div>
                            <div className="checkbox login-checkbox">
                                <label>
										<input type="checkbox" className="i-checks"/> Remember me </label>
                                <p className="help-block small">(if this is a private computer)</p>
                            </div>
                            <button  className="btn btn-success btn-block loginbtn">Login</button>
                            <Link className="btn btn-default btn-block" to="/register">Register</Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"></div>
        </div>
        <div className="row">
            <div className="col-md-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <p>Copyright ?? 2018 <Link to="https://colorlib.com/wp/templates/">Colorlib</Link> All rights reserved.</p>
            </div>
        </div>
    </div>


</>
    )
}