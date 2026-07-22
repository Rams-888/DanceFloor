import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutBg from "../assets/images/about-bg.png";
import studentAvatar from "../assets/images/student-avatar.png";

function Student() {

    const loggedInUser = JSON.parse(localStorage.getItem("user"));

    const [user, setUser] = useState(null);

    const [editData, setEditData] = useState({

        name: "",
        mobile: ""

    });

    useEffect(() => {

        const fetchStudent = async () => {

            try {

                const res = await axios.get(

                    `http://localhost:5000/api/users/${loggedInUser._id}`

                );

                setUser(res.data);

            }

            catch (error) {

                console.error(error);

            }

        };

        if (loggedInUser?._id) {

            fetchStudent();

        }

    }, [loggedInUser]);

    const updateProfile = async () => {

        try {

            const res = await axios.put(

                `http://localhost:5000/api/users/${user._id}`,

                {

                    name: editData.name,

                    mobile: editData.mobile

                }

            );

            setUser(res.data.user);

            localStorage.setItem(

                "user",

                JSON.stringify(res.data.user)

            );

            alert("Profile Updated Successfully");

            window.location.reload();

        }

        catch (err) {

            console.log(err);

            alert("Update Failed");

        }

    };

    if (!user) {

        return (

            <div className="text-center mt-5">

                <h3>Loading...</h3>

            </div>

        );

    }

    return (

    <>

        <Navbar />

        {/* Hero Section */}

        <section
            className="text-white d-flex align-items-center justify-content-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url(${aboutBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "55vh"
            }}
        >

            <div className="text-center">

                <h1 className="display-2 fw-bold">

                    Student Dashboard

                </h1>

                <p className="lead mt-3">

                    Welcome back! Here's your learning progress.

                </p>

            </div>

        </section>

        {/* Student Profile */}

        <section className="container my-5">

            <div className="card shadow-lg border-0 rounded-4">

                <div className="card-body p-4">

                    <div className="row align-items-center">

                        {/* Left */}

                        <div className="col-md-3 text-center">

                            <img

                                src={studentAvatar}

                                alt="Student"

                                className="rounded-circle shadow"

                                style={{

                                    width: "130px",

                                    height: "130px",

                                    objectFit: "cover",

                                    border: "4px solid #ffc107"

                                }}

                            />

                            <h4 className="fw-bold mt-3">

                                {user.name}

                            </h4>

                        </div>

                        {/* Right */}

                        <div className="col-md-9">

                            <div className="d-flex justify-content-between align-items-center mb-4">

                                <h2 className="fw-bold mb-0">

                                    Student Information

                                </h2>

                                <button

                                    className="btn btn-warning"

                                    data-bs-toggle="modal"

                                    data-bs-target="#editProfileModal"

                                    onClick={() =>

                                        setEditData({

                                            name: user.name,

                                            mobile: user.mobile

                                        })

                                    }

                                >

                                    Edit Profile

                                </button>

                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-3">

                                    <strong>Email</strong>

                                    <p className="mb-0">

                                        {user.email}

                                    </p>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <strong>Mobile</strong>

                                    <p className="mb-0">

                                        {user.mobile}

                                    </p>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <strong>Course</strong>

                                    <p className="mb-0">

                                        {user.course || "Not Assigned"}

                                    </p>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <strong>Batch</strong>

                                    <p className="mb-0">

                                        {user.batch || "Not Assigned"}

                                    </p>

                                </div>

                                <div className="col-md-6">

                                    <strong>Instructor</strong>

                                    <p className="mb-0">

                                        {user.instructor || "Not Assigned"}

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Dashboard Cards */}

            <section className="container my-5">

                <div className="row g-4">

                    <div className="col-md-3">

                        <div className="card shadow border-0 rounded-4 text-center p-4">

                            <div className="display-4 mb-3">🎓</div>

                            <h5>Courses</h5>

                            <h2 className="fw-bold">6</h2>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 rounded-4 text-center p-4">

                            <div className="display-4 mb-3">📅</div>

                            <h5>Attendance</h5>

                            <h2 className="fw-bold">88%</h2>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 rounded-4 text-center p-4">

                            <div className="display-4 mb-3">🏆</div>

                            <h5>Achievements</h5>

                            <h2 className="fw-bold">8</h2>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="card shadow border-0 rounded-4 text-center p-4">

                            <div className="display-4 mb-3">🎭</div>

                            <h5>Events</h5>

                            <h2 className="fw-bold">15</h2>

                        </div>

                    </div>

                </div>

            </section>

            {/* Weekly Schedule */}

            <section className="container my-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Weekly Schedule

                        </h2>

                        <table className="table table-bordered table-hover align-middle">

                            <thead className="table-dark">

                                <tr>

                                    <th>Day</th>

                                    <th>Course</th>

                                    <th>Time</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Monday</td>

                                    <td>Hip-Hop</td>

                                    <td>5:00 PM - 6:30 PM</td>

                                </tr>

                                <tr>

                                    <td>Wednesday</td>

                                    <td>Freestyle</td>

                                    <td>5:00 PM - 6:30 PM</td>

                                </tr>

                                <tr>

                                    <td>Friday</td>

                                    <td>Performance Practice</td>

                                    <td>5:00 PM - 7:00 PM</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

            {/* Enrolled Courses */}

            <section className="container my-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Enrolled Courses

                        </h2>

                        <div className="row">

                            <div className="col-md-4 mb-3">

                                <div className="card border-primary h-100">

                                    <div className="card-body text-center">

                                        <h4>Hip-Hop</h4>

                                        <p>Completed: 75%</p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4 mb-3">

                                <div className="card border-success h-100">

                                    <div className="card-body text-center">

                                        <h4>Freestyle</h4>

                                        <p>Completed: 60%</p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4 mb-3">

                                <div className="card border-warning h-100">

                                    <div className="card-body text-center">

                                        <h4>Stage Performance</h4>

                                        <p>Completed: 90%</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
                        {/* Recent Achievements */}

            <section className="container my-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Recent Achievements

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                🏆 First Prize - Hip-Hop Competition

                            </li>

                            <li className="list-group-item">

                                🎭 Best Stage Performance Award

                            </li>

                            <li className="list-group-item">

                                ⭐ 100 Days Attendance Certificate

                            </li>

                            <li className="list-group-item">

                                🎓 Advanced Hip-Hop Certification

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Latest Announcements */}

            <section className="container my-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Latest Announcements

                        </h2>

                        <div className="alert alert-primary">

                            🎉 Annual Dance Festival registration starts next week.

                        </div>

                        <div className="alert alert-success">

                            🏆 State Level Competition on 20 October.

                        </div>

                        <div className="alert alert-warning">

                            📢 Weekend special choreography workshop available.

                        </div>

                    </div>

                </div>

            </section>

            {/* Student Support */}

            <section className="container my-5">

                <div className="card shadow border-0 rounded-4">

                    <div className="card-body text-center">

                        <h2>

                            Student Support

                        </h2>

                        <p>

                            📞 +91 9876543210

                        </p>

                        <p>

                            ✉ support@danceflooracademy.com

                        </p>

                        <p>

                            📍 Anna Nagar, Chennai

                        </p>

                    </div>

                </div>

            </section>
            {/* Edit Profile Modal */}

<div
    className="modal fade"
    id="editProfileModal"
    tabIndex="-1"
    aria-labelledby="editProfileModalLabel"
    aria-hidden="true"
>

    <div className="modal-dialog modal-dialog-centered">

        <div className="modal-content">

            <div className="modal-header">

                <h5
                    className="modal-title"
                    id="editProfileModalLabel"
                >

                    Edit Profile

                </h5>

                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>

            </div>

            <div className="modal-body">

                <div className="mb-3">

                    <label className="form-label">

                        Name

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={editData.name}
                        onChange={(e) =>
                            setEditData({
                                ...editData,
                                name: e.target.value
                            })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Mobile

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={editData.mobile}
                        onChange={(e) =>
                            setEditData({
                                ...editData,
                                mobile: e.target.value
                            })
                        }
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Email

                    </label>

                    <input
                        type="email"
                        className="form-control"
                        value={user.email}
                        disabled
                    />

                    <small className="text-muted">

                        Email cannot be changed.

                    </small>

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Course

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={user.course || "Not Assigned"}
                        disabled
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Batch

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={user.batch || "Not Assigned"}
                        disabled
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Instructor

                    </label>

                    <input
                        type="text"
                        className="form-control"
                        value={user.instructor || "Not Assigned"}
                        disabled
                    />

                </div>

            </div>

            <div className="modal-footer">

                <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                >

                    Cancel

                </button>

                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={updateProfile}
                >

                    Save Changes

                </button>

            </div>

        </div>

    </div>

</div>

<Footer />

</>

);

}

export default Student;
