import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Data = [
    {
        id: 1,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/2.jpg',
        name: 'Shailendra',
        date: '14/10/2002',
        role: 'Admin',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 2,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/1.jpg',
        name: 'Shailendra',
        date: '14/10/2002',
        role: 'Admin',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 3,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/3.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 4,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/4.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 5,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/4.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 6,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/4.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 7,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/4.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
    {
        id: 8,
        image: 'https://www.tutorialrepublic.com/examples/images/avatar/4.jpg',
        name: 'Robin Payot',
        role: 'Admin',
        date: '14/10/2002',
        staus: 'Active',
        action: 'yes',
    },
];

const UserData = () => {
    const navigate = useNavigate();

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
                                    class="nav-link align-middle px-0"
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
                    <div class="container-xl">
                        <div class="table-responsive">
                            <div class="table-wrapper">
                                <div class="table-title">
                                    <div class="row d-flex justify-content-between">
                                        <div class="col-sm-5">
                                            <h2>
                                                User <b>Management</b>
                                            </h2>
                                        </div>
                                        {/* <div class="col-sm-7 ">
                            <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE147;</i> <span>Add New User</span></a>
                            <a href="#" class="btn btn-secondary"><i class="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>						
                        </div> */}
                                    </div>
                                </div>
                                <table class="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Date Created</th>
                                            <th>Role</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((link) => {
                                            return (
                                                <tr key={link.id}>
                                                    <td>{link.id}</td>
                                                    <td>
                                                        <p>
                                                            <img
                                                                src={link.image}
                                                                class="avatar rounded-circle"
                                                                alt="Avatar"
                                                            />
                                                            {link.name}
                                                        </p>
                                                    </td>
                                                    <td>{link.date}</td>
                                                    <td>{link.role}</td>
                                                    <td>
                                                        <span class="status text-success">
                                                            &bull;
                                                        </span>{' '}
                                                        {link.staus}
                                                    </td>
                                                    <td>
                                                        <a
                                                            href="#"
                                                            class="settings"
                                                            title="Settings"
                                                            data-toggle="tooltip"
                                                        >
                                                            <i class="material-icons">
                                                                &#9881;
                                                            </i>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            class="delete"
                                                            title="Delete"
                                                            data-toggle="tooltip"
                                                        >
                                                            <i class="material-icons">
                                                                &#xE5C9;
                                                            </i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                                <div class="clearfix mt-2">
                                    <div class="hint-text">
                                        Showing <b>5</b> out of <b>25</b>{' '}
                                        entries
                                    </div>
                                    <ul class="pagination mt-2">
                                        <li class="page-item disabled">
                                            <a href="#">Previous</a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">
                                                1
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">
                                                2
                                            </a>
                                        </li>
                                        <li class="page-item active">
                                            <a href="#" class="page-link">
                                                3
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">
                                                4
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">
                                                5
                                            </a>
                                        </li>
                                        <li class="page-item">
                                            <a href="#" class="page-link">
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserData;
