import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageSessions() {

    const [sessions, setSessions] = useState([]);

    const [session, setSession] = useState({

        sessionName: "",
        courseName: "",
        trainer: "",
        startDate: "",
        endDate: "",
        timing: "",
        seats: ""

    });

    const fetchSessions = async () => {

        const response = await fetch("http://localhost:5000/api/sessions");

        const data = await response.json();

        setSessions(data);

    };

    useEffect(() => {

        fetchSessions();

    }, []);

    const handleChange = (e) => {

        setSession({

            ...session,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await fetch("http://localhost:5000/api/sessions", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(session)

        });

        setSession({

            sessionName: "",
            courseName: "",
            trainer: "",
            startDate: "",
            endDate: "",
            timing: "",
            seats: ""

        });

        fetchSessions();

    };

    const deleteSession = async (id) => {

        await fetch(`http://localhost:5000/api/sessions/${id}`, {

            method: "DELETE"

        });

        fetchSessions();

    };

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">

                    <Sidebar />

                </div>

                <div className="col-md-10">

                    <Topbar />

                    <div className="container mt-4">

                        <h2>Manage Sessions</h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-2"
                                placeholder="Session Name"
                                name="sessionName"
                                value={session.sessionName}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-2"
                                placeholder="Course Name"
                                name="courseName"
                                value={session.courseName}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-2"
                                placeholder="Trainer"
                                name="trainer"
                                value={session.trainer}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="date"
                                className="form-control mb-2"
                                name="startDate"
                                value={session.startDate}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="date"
                                className="form-control mb-2"
                                name="endDate"
                                value={session.endDate}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-2"
                                placeholder="Timing"
                                name="timing"
                                value={session.timing}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Available Seats"
                                name="seats"
                                value={session.seats}
                                onChange={handleChange}
                                required
                            />

                            <button className="btn btn-success">
                                Add Session
                            </button>

                        </form>

                        <table className="table table-bordered mt-4">

                            <thead className="table-dark">

                                <tr>

                                    <th>Session</th>
                                    <th>Course</th>
                                    <th>Trainer</th>
                                    <th>Timing</th>
                                    <th>Seats</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {sessions.map((item) => (

                                    <tr key={item._id}>

                                        <td>{item.sessionName}</td>
                                        <td>{item.courseName}</td>
                                        <td>{item.trainer}</td>
                                        <td>{item.timing}</td>
                                        <td>{item.seats}</td>

                                        <td>

                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => deleteSession(item._id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ManageSessions;