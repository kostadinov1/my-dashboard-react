import { Link } from "react-router-dom";


export const ActivityDetails = () => {
    return (<>
        <div className="single-product-tab-area mg-t-0 mg-b-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
						<div className="single-product-pr">
							<div className="row">
								<div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
									<div id="myTabContent1" className="tab-content">
										<div className="product-tab-list tab-pane fade active in" id="single-tab1">
											<img src="img/product/bg-1.jpg" alt="" />
										</div>
										<div className="product-tab-list tab-pane fade" id="single-tab2">
											<img src="img/product/bg-2.jpg" alt="" />
										</div>
										<div className="product-tab-list tab-pane fade" id="single-tab3">
											<img src="img/product/bg-3.jpg" alt="" />
										</div>
										<div className="product-tab-list tab-pane fade" id="single-tab4">
											<img src="img/product/bg-1.jpg" alt="" />
										</div>
										<div className="product-tab-list tab-pane fade" id="single-tab5">
											<img src="img/product/bg-2.jpg" alt="" />
										</div>
									</div>
									<ul id="single-product-tab">
										<li className="active">
											<Link to="#single-tab1"><img src="img/product/1.jpg" alt="" /></Link>
										</li>
										<li>
											<Link to="#single-tab2"><img src="img/product/2.jpg" alt="" /></Link>
										</li>
										<li>
											<Link to="#single-tab3"><img src="img/product/3.jpg" alt="" /></Link>
										</li>
										<li>
											<Link to="#single-tab4"><img src="img/product/1.jpg" alt="" /></Link>
										</li>
									</ul>
								</div>
								<div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
									<div className="single-product-details res-pro-tb">
										<h1>Product ITEM TITLE</h1>
										<span className="single-pro-star">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</span>
										<div className="single-pro-price">
											<span className="single-regular">$150.00</span><span className="single-old"><del>$20.00</del></span>
										</div>
										<div className="single-pro-size">
											<h6>Size</h6>
											<span>S</span> <span>M</span> <span>L</span> <span>XL</span> <span>XXL</span>
										</div>
										<div className="color-quality-pro">
											<div className="color-quality-details">
												<h5>Color</h5>
												<span className="red"></span> <span className="green"></span> <span className="yellow"></span> <span className="black"></span> <span className="white"></span>
											</div>
											<div className="color-quality">
												<h4>Quality</h4>
												<div className="quantity">
													<div className="pro-quantity-changer">
														<input type="text" value="1" />
													</div>
												</div>
											</div>
											<div className="clear"></div>
											<div className="single-pro-button">
												<div className="pro-button">
													<Link to="#">ADD TO Cart</Link>
												</div>
												<div className="pro-viwer">
													<Link to="#"><i className="fa fa-heart"></i></Link>
													<Link to="#"><i className="fa fa-eye"></i></Link>
												</div>
											</div>
											<div className="clear"></div>
											<div className="single-social-area">
												<h3>share this on</h3>
												<Link to="#"><i className="fa fa-facebook"></i></Link>
												<Link to="#"><i className="fa fa-google-plus"></i></Link>
												<Link to="#"><i className="fa fa-feed"></i></Link>
												<Link to="#"><i className="fa fa-twitter"></i></Link>
												<Link to="#"><i className="fa fa-linkedin"></i></Link>
											</div>
										</div>
										<div className="single-pro-cn">
											<h3>OVERVIEW</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
												consequat. Duis aute irure dolor in reprehenderit in voluptate </p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
                </div>
            </div>
        </div>
        <div className="single-pro-review-area mt-t-30 mg-b-30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                    	<div className="single-tb-pr">
                    		<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<ul id="myTab" className="tab-review-design">
										<li className="active"><Link to="#description">description</Link></li>
										<li><Link to="#reviews"><span><i className="fa fa-star"></i><i className="fa fa-star"></i></span> reviews (1) <span><i className="fa fa-star"></i><i className="fa fa-star"></i></span></Link></li>
										<li><Link to="#INFORMATION">INFORMATION</Link></li>
									</ul>
									<div id="myTabContent" className="tab-content">
										<div className="product-tab-list product-details-ect tab-pane fade active in" id="description">
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<div className="review-content-section">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
															ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
															mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
															beatae vitae dicta sunt explicabo.</p>
														<p className="pro-b-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo nisi ut aliquip ex
															ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad , quis nostrud exercitation ullamco
															laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
													</div>
												</div>
											</div>
										</div>
										<div className="product-tab-list tab-pane fade" id="reviews">
											<div className="row">
												<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
													<div className="review-content-section">
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
																	<span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
																	<input type="text" className="form-control" placeholder="User Name"/>
																</div>
																<div className="input-group mg-b-15">
																	<span className="input-group-addon"><i className="fa fa-user" aria-hidden="true"></i></span>
																	<input type="text" className="form-control" placeholder="Last Name"/>
																</div>
																<div className="input-group mg-b-15">
																	<span className="input-group-addon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
																	<input type="text" className="form-control" placeholder="Email"/>
																</div>
																<div className="form-group review-pro-edt mg-b-0-pr">
																	<button type="submit" className="btn btn-primary waves-effect waves-light">Submit
																		</button>
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
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
															ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
															mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
															beatae vitae dicta sunt explicabo.</p>
														<p className="pro-b-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labo nisi ut aliquip ex
															ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ut labore et dolore magna aliqua. Ut enim ad , quis nostrud exercitation ullamco
															laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
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
        </>
    );
}