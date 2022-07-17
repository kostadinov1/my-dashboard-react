import { Link } from "react-router-dom";
import { createExercise } from "../../services/exercises/createExercise";




export const CreateExercise = () => {


    const onCreate = (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const name = formData.get('name')
        const type = formData.get('type')
        const description = formData.get('description')
        const cues = formData.get('cues')
        const calories = formData.get('calories')

        const sets = formData.get('sets')
        const reps = formData.get('reps')
        const  weights = formData.get('weights')
        const tempo = formData.get('tempo')
        const breaks = formData.get('breaks')
        const image = formData.get('image')


        const exerciseInfo = {
                            name: name,
                            description: description,
                            // image: image,
                            cues: cues,
                            calories_burned: calories,
                            reps: reps,
                            sets: sets,
                            weights_in_kg:    weights,
                            tempo:  tempo,
                            break_in_seconds:   breaks,
                            type: type,

        }

        const userToken = localStorage.userToken
        console.log(userToken, exerciseInfo)
        createExercise(exerciseInfo)


    
    }


    return (
        <div className="single-product-tab-area mg-b-30">
            <div className="single-pro-review-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="review-tab-pro-inner">
                                <ul id="myTab3" className="tab-review-design">
                                    <li className="active"><Link to="#description"><i className="icon nalika-edit" aria-hidden="true"></i>Create Exercise</Link></li>
                                    {/* <li><Link to="#reviews"><i className="icon nalika-picture" aria-hidden="true"></i> Pictures</Link></li>
                                    <li><Link to="#INFORMATION"><i className="icon nalika-chat" aria-hidden="true"></i> Review</Link></li> */}
                                </ul>
                                <div id="myTabContent" className="tab-content custom-product-edit">
                                    <div className="product-tab-list tab-pane fade active in" id="description">

                                         <form onSubmit={onCreate} method="post" encType="multipart/form-data">
                                            <div className="row">

                                            
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true"></i></span>
                                                            <input name="name" type="text" className="form-control" placeholder="Name"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-edit" aria-hidden="true"></i></span>
                                                            <input name="type" type="text" className="form-control" placeholder="Type"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-new-file" aria-hidden="true"></i></span>
                                                            <input name="description" type="text" className="form-control" placeholder="Description"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></span>
                                                            <input name="cues" type="text" className="form-control" placeholder="Cues"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-favorites" aria-hidden="true"></i></span>
                                                            <input name="calories" type="text" className="form-control" placeholder="Calories Burned"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-favorites" aria-hidden="true"></i></span>
                                                            <input name="image" type="file" className="form-control" placeholder="Image"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div className="review-content-section">
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true"></i></span>
                                                            <input name="sets" type="text" className="form-control" placeholder="Sets"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-favorites-button" aria-hidden="true"></i></span>
                                                            <input name="reps" type="text" className="form-control" placeholder="Repetitions"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="fa fa-usd" aria-hidden="true"></i></span>
                                                            <input name="weights" type="text" className="form-control" placeholder="Weights"/>
                                                        </div>
                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-like" aria-hidden="true"></i></span>
                                                            <input name="tempo" type="text" className="form-control" placeholder="Tempo"/>
                                                        </div>

                                                        <div className="input-group mg-b-pro-edt">
                                                            <span className="input-group-addon"><i className="icon nalika-like" aria-hidden="true"></i></span>
                                                            <input name="breaks" type="text" className="form-control" placeholder="Breaks in Seconds"/>
                                                        </div>
                                                        

                                                        {/* <select name="select" className="form-control pro-edt-select form-control-primary">
                                                                <option value="opt1">Select One Value Only</option>
                                                                <option value="opt2"></option>
                                                                <option value="opt3">3</option>
                                                                <option value="opt4">4</option>
                                                                <option value="opt5">5</option>
                                                                <option value="opt6">6</option>
                                                            </select> */}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <div className="text-center custom-pro-edt-ds">
                                                        <button  className="btn btn-ctl-bt waves-effect waves-light m-r-10">Create
                                                            </button>
                                                        <button type="button" className="btn btn-ctl-bt waves-effect waves-light">Reset
                                                            </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>





                                    <div className="product-tab-list tab-pane fade" id="reviews">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="review-content-section">
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="pro-edt-img">
                                                                <img src="img/new-product/5-small.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="product-edt-pix-wrap">
                                                                        <div className="input-group">
                                                                            <span className="input-group-addon">TT</span>
                                                                            <input type="text" className="form-control" placeholder="Label Name"/>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <div className="form-radio">
                                                                                    <form>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Largest Image
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Medium Image
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Small Image
																								</label>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="product-edt-remove">
                                                                                    <button type="button" className="btn btn-ctl-bt waves-effect waves-light">Remove
																							<i className="fa fa-times" aria-hidden="true"></i>
																						</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="pro-edt-img">
                                                                <img src="img/new-product/6-small.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="product-edt-pix-wrap">
                                                                        <div className="input-group">
                                                                            <span className="input-group-addon">TT</span>
                                                                            <input type="text" className="form-control" placeholder="Label Name"/>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <div className="form-radio">
                                                                                    <form>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Largest Imag/e
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Medium Imag/e
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Small Imag/e
																								</label>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="product-edt-remove">
                                                                                    <button type="button" className="btn btn-ctl-bt waves-effect waves-light">Remove
																							<i className="fa fa-times" aria-hidden="true"></i>
																						</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <div className="pro-edt-img mg-b-0">
                                                                <img src="img/new-product/7-small.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <div className="product-edt-pix-wrap">
                                                                        <div className="input-group">
                                                                            <span className="input-group-addon">TT</span>
                                                                            <input type="text" className="form-control" placeholder="Label Name"/>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <div className="form-radio">
                                                                                    <form>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Largest Imag/e
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Medium Imag/e
																								</label>
                                                                                        </div>
                                                                                        <div className="radio radiofill">
                                                                                            <label>
																									<input type="radio" name="radio"/><i className="helper"></i>Small Imag/e
																								</label>
                                                                                        </div>
                                                                                    </form>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <div className="product-edt-remove">
                                                                                    <button type="button" className="btn btn-ctl-bt waves-effect waves-light">Remove
																							<i className="fa fa-times" aria-hidden="true"></i>
																						</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-tab-list tab-pane fade" id="INFORMATION">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div className="review-content-section">
                                                    <div className="card-block">
                                                        <div className="text-muted f-w-400">
                                                            <p>No reviews yet.</p>
                                                        </div>
                                                        <div className="m-t-10">
                                                            <div className="txt-primary f-18 f-w-600">
                                                                <p>Your Rating</p>
                                                            </div>
                                                            <div className="stars stars-example-css detail-stars">
                                                                <div className="review-rating">
                                                                    <fieldset className="rating">
                                                                        <input type="radio" id="star5" name="rating" value="5"/>
                                                                        <label className="full" for="star5"></label>
                                                                        <input type="radio" id="star4half" name="rating" value="4 and a half"/>
                                                                        <label className="half" for="star4half"></label>
                                                                        <input type="radio" id="star4" name="rating" value="4"/>
                                                                        <label className="full" for="star4"></label>
                                                                        <input type="radio" id="star3half" name="rating" value="3 and a half"/>
                                                                        <label className="half" for="star3half"></label>
                                                                        <input type="radio" id="star3" name="rating" value="3"/>
                                                                        <label className="full" for="star3"></label>
                                                                        <input type="radio" id="star2half" name="rating" value="2 and a half"/>
                                                                        <label className="half" for="star2half"></label>
                                                                        <input type="radio" id="star2" name="rating" value="2"/>
                                                                        <label className="full" for="star2"></label>
                                                                        <input type="radio" id="star1half" name="rating" value="1 and a half"/>
                                                                        <label className="half" for="star1half"></label>
                                                                        <input type="radio" id="star1" name="rating" value="1"/>
                                                                        <label className="full" for="star1"></label>
                                                                        <input type="radio" id="starhalf" name="rating" value="half"/>
                                                                        <label className="half" for="starhalf"></label>
                                                                    </fieldset>
                                                                </div>
                                                                <div className="clear"></div>
                                                            </div>
                                                        </div>
                                                        <div className="input-group mg-b-15 mg-t-15">
                                                            <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true"></i></span>
                                                            <input type="text" className="form-control" placeholder="User Name"/>
                                                        </div>
                                                        <div className="input-group mg-b-15">
                                                            <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true"></i></span>
                                                            <input type="text" className="form-control" placeholder="Last Name"/>
                                                        </div>
                                                        <div className="input-group mg-b-15">
                                                            <span className="input-group-addon"><i className="icon nalika-mail" aria-hidden="true"></i></span>
                                                            <input type="text" className="form-control" placeholder="Email"/>
                                                        </div>
                                                        <div className="form-group review-pro-edt mg-b-0-pt">
                                                            <button type="submit" className="btn btn-ctl-bt waves-effect waves-light">Submit
																</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}