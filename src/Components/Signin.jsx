import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const navigate = useNavigate();

    function makeid(length) {
        let result = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
            counter += 1;
        }
        return result;
    }

    const session_id = makeid(9);
    console.log(session_id);

    const useOauth = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://192.168.137.226:8000/getAuthToken/',
                body: `session_id=${session_id}`,
                // timeout: 1000 * 60 * 60,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            const res = await response.json();
            console.log(res);
        } catch (error) {
            // Timeouts if the request takes
            // longer than 6 seconds
            console.log(error.name === 'AbortError');
        }
    };

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

                                <a
                                    onClick={useOauth}
                                    class="btn btn-primary"
                                    href={`http://192.168.137.226:8000/connect?client_id=ZM9fmY4CTt&req_scopes=AC0123&session_id=${session_id}`}
                                    target={'_blank'}
                                    role="button"
                                >
                                    Continue With OAuth3
                                </a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Signin;
