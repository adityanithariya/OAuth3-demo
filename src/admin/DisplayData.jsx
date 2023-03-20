import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const DisplayData = () => {
    useEffect(() => {
        getData();
    }, []);

    const navigate = useNavigate();
    const [userList, setUserList] = useState();
    const db = getFirestore();
    const colRef = collection(db, 'users');

    const getData = async () => {
        await getDocs(colRef)
            .then((snapshot) => {
                let user = [];

                snapshot.docs.forEach((data) => {
                    user.push({ ...data.data(), id: data.id });
                });
                setUserList(user);
                console.log(user);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a
                            href="/"
                            class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
                        >
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul
                            class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                            id="menu"
                        >
                            <li class="nav-item">
                                <span
                                    href="#"
                                    class="nav-link align-middle px-0 cursor-pointer"
                                    onClick={() =>
                                        navigate('/admin-panel/home')
                                    }
                                >
                                    <i class="fs-4 bi-house"></i>{' '}
                                    <span class="ms-1 d-none d-sm-inline">
                                        Home
                                    </span>
                                </span>
                            </li>
                            <li>
                                <span
                                    href="#submenu1"
                                    data-bs-toggle="collapse"
                                    class="nav-link px-0 align-middle"
                                    onClick={() =>
                                        navigate('/admin-panel/dashboard')
                                    }
                                >
                                    <i class="fs-4 bi-speedometer2"></i>{' '}
                                    <span class="ms-1 d-none d-sm-inline">
                                        Dashboard
                                    </span>{' '}
                                </span>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-table"></i>{' '}
                                    <span class="ms-1 d-none d-sm-inline">
                                        Orders
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#submenu3"
                                    data-bs-toggle="collapse"
                                    class="nav-link px-0 align-middle"
                                >
                                    <i class="fs-4 bi-grid"></i>{' '}
                                    <span class="ms-1 d-none d-sm-inline">
                                        Products
                                    </span>{' '}
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0 align-middle">
                                    <i class="fs-4 bi-people"></i>{' '}
                                    <span class="ms-1 d-none d-sm-inline">
                                        Customers
                                    </span>{' '}
                                </a>
                            </li>
                        </ul>
                        <hr />
                        <div class="dropdown pb-4">
                            <a
                                href="#"
                                class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                                id="dropdownUser1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://github.com/mdo.png"
                                    alt="hugenerd"
                                    width="30"
                                    height="30"
                                    class="rounded-circle"
                                />
                                <span class="d-none d-sm-inline mx-1">
                                    Shailendra
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col py-3">
                    <h5>
                        {userList &&
                            userList.map((data) => {
                                return (
                                    <div key={data.uid}>
                                        <h6>UID : {data.id}</h6>
                                        <p>Name : {data.name}</p>
                                    </div>
                                );
                            })}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default DisplayData;
