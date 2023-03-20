import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    return (
        <div>
            <section class="vh-100 bg-dark">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="img-fluid"
                                alt="Phone image"
                            />
                        </div>
                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form>
                                <div class="form-outline mb-4">
                                    <input
                                        type="email"
                                        id="form1Example13"
                                        class="form-control form-control-lg text-black"
                                    />
                                    <label
                                        class="form-label text-white"
                                        for="form1Example13"
                                    >
                                        Email address
                                    </label>
                                </div>

                                <div class="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example23"
                                        class="form-control form-control-lg"
                                    />
                                    <label
                                        class="form-label text-white"
                                        for="form1Example23"
                                    >
                                        Password
                                    </label>
                                </div>

                                <div class="d-flex justify-content-around align-items-center mb-4">
                                    <div class="form-check">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="form1Example3"
                                            checked
                                        />
                                        <label
                                            class="form-check-label text-white"
                                            for="form1Example3 "
                                        >
                                            Remember me{' '}
                                        </label>
                                    </div>
                                    <a href="#!" className=" text-white">
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    class="btn btn-primary btn-lg btn-block  text-white"
                                >
                                    Sign in
                                </button>

                                <div class="divider d-flex align-items-center my-4">
                                    <p class="text-center fw-bold mx-3 mb-0 text-muted   text-white">
                                        OR
                                    </p>
                                </div>

                                <p
                                    to="/admin-panel"
                                    class="btn btn-primary btn-lg btn-block mb-2"
                                    href="#!"
                                    role="button"
                                    onClick={() =>
                                        navigate('/admin-panel/home')
                                    }
                                >
                                    <i class="fab fa-facebook-f me-2"></i>
                                    Continue with OAuth3
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signin;
