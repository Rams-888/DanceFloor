import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

function RecentApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {

        fetch(`${API_URL}/api/applications`)
            .then((response) => response.json())
            .then((data) => {

                setApplications(data);

            })
            .catch((error) => {

                console.error("Error fetching applications:", error);

            });

    }, []);

    return (

        <div className="card shadow-sm border-0 rounded-4 mt-4">

            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h4 className="fw-bold mb-0">

                        Recent Applications

                    </h4>

                    <Link
                        to="/admin/applications"
                        className="btn btn-warning"
                    >

                        View All

                    </Link>

                </div>

                <div className="table-responsive">

                    <table className="table table-hover align-middle">

                        <thead className="table-dark">

                            <tr>

                                <th>Student</th>

                                <th>Dance Style</th>

                                <th>Phone</th>

                                <th>Status</th>

                                <th>Applied On</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                applications.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="5"
                                            className="text-center py-4 text-muted"
                                        >

                                            No recent applications found.

                                        </td>

                                    </tr>

                                ) : (

                                    applications
                                        .slice(0, 5)
                                        .map((application) => (

                                            <tr key={application._id}>

                                                <td>

                                                    {application.firstName} {application.lastName}

                                                </td>

                                                <td>

                                                    {application.danceStyle}

                                                </td>

                                                <td>

                                                    {application.phone}

                                                </td>

                                                <td>

                                                    <span
                                                        className={`badge ${
                                                            application.status === "Approved"
                                                                ? "bg-success"
                                                                : application.status === "Rejected"
                                                                ? "bg-danger"
                                                                : "bg-warning text-dark"
                                                        }`}
                                                    >

                                                        {application.status}

                                                    </span>

                                                </td>

                                                <td>

                                                    {new Date(application.createdAt).toLocaleDateString()}

                                                </td>

                                            </tr>

                                        ))

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default RecentApplications;