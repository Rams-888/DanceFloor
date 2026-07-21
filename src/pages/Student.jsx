import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Student() {

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section className="bg-dark text-white py-5">

                <div className="container text-center">

                    <h1 className="display-3 fw-bold">

                        Student Dashboard

                    </h1>

                    <p className="lead">

                        Welcome back! Here's your learning progress.

                    </p>

                </div>

            </section>

            {/* Student Profile */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <div className="row align-items-center">

                            <div className="col-md-3 text-center">

                                <img

                                    src="https://via.placeholder.com/180"

                                    className="img-fluid rounded-circle"

                                    alt="Student"

                                />

                            </div>

                            <div className="col-md-9">

                                <h2>

                                    Ram

                                </h2>

                                <p>

                                    Student ID : DFA2026001

                                </p>

                                <p>

                                    Course : Hip-Hop Dance

                                </p>

                                <p>

                                    Batch : Evening

                                </p>

                                <p>

                                    Instructor : Alex Johnson

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Dashboard Cards */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h1>📚</h1>

                                <h3>

                                    6

                                </h3>

                                <p>

                                    Courses

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h1>📅</h1>

                                <h3>

                                    92%

                                </h3>

                                <p>

                                    Attendance

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h1>🏆</h1>

                                <h3>

                                    8

                                </h3>

                                <p>

                                    Awards

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h1>🎭</h1>

                                <h3>

                                    15

                                </h3>

                                <p>

                                    Performances

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Weekly Schedule */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Weekly Schedule

                        </h2>

                        <table className="table table-bordered table-hover">

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

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Enrolled Courses

                        </h2>

                        <div className="row">

                            <div className="col-md-4 mb-3">

                                <div className="card border-primary">

                                    <div className="card-body text-center">

                                        <h4>Hip-Hop</h4>

                                        <p>Completed: 75%</p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4 mb-3">

                                <div className="card border-success">

                                    <div className="card-body text-center">

                                        <h4>Freestyle</h4>

                                        <p>Completed: 60%</p>

                                    </div>

                                </div>

                            </div>

                            <div className="col-md-4 mb-3">

                                <div className="card border-warning">

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

                <div className="card shadow">

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

            {/* Announcements */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Latest Announcements

                        </h2>

                        <div className="alert alert-primary">

                            🎉 Annual Dance Festival registration starts
                            next week.

                        </div>

                        <div className="alert alert-success">

                            🏆 State Level Competition on 20 October.

                        </div>

                        <div className="alert alert-warning">

                            📢 Weekend special choreography workshop
                            available.

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact */}

            <section className="container my-5">

                <div className="card shadow">

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

            <Footer />

        </>

    );

}

export default Student;