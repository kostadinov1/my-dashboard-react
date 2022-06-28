import { Link } from "react-router-dom"
import { register } from "../../../services/registerService"


export const Register = () => {


    const onRegisterHandler = (e) => {

        e.preventDefault()
        const formData = new FormData(e.currentTarget)

        const email = formData.get('email')
        const password = formData.get('password')
        const repass = formData.get('password')

        if (password !== repass) {
            alert('passwords do not match')
        }
        register(email, password).then(res => {
            console.log(res);
        })
        
    }

    
    return (

<>
<div class="color-line"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="back-link back-backend">
                    <Link to="index.html" class="btn btn-primary">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
            <div class="col-md-6 col-md-6 col-sm-6 col-xs-12">
                <div class="text-center custom-login">
                    <h3>Registration</h3>
                    <p>Admin template with very clean and aesthetic style prepared for your next app. </p>
                </div>
                <div class="hpanel">
                    <div class="panel-body">
                        <form onClick={onRegisterHandler} id="loginForm">
                            <div class="row">
                                <div class="form-group col-lg-12">
                                    <label>Email</label>
                                    <input name="email" type='email' class="form-control"/>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label>Password</label>
                                    <input name="password" type="password" class="form-control"/>
                                </div>
                                <div class="form-group col-lg-6">
                                    <label>Repeat Password</label>
                                    <input name="repass" type="password" class="form-control"/>
                                </div>

                            </div>
                            <div class="text-center">
                                <button class="btn btn-success loginbtn">Register</button>
                                <button class="btn btn-default">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12"></div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <p>Copyright © 2018 <Link to="https://colorlib.com/wp/templates/">Colorlib</Link> All rights reserved.</p>
            </div>
        </div>
    </div>

</>
    )
}