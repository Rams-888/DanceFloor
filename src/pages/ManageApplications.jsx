import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageApplications() {

    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {

        try {

            const response = await fetch("${API_URL}/api/applications");

            const data = await response.json();

            setApplications(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchApplications();

    }, []);

    const deleteApplication = async (id) => {

        const confirmDelete = window.confirm("Delete this application?");

        if (!confirmDelete) return;

        await fetch(`${API_URL}/api/applications/${id}`, {

            method: "DELETE"

        });

        fetchApplications();

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

                        <h2 className="mb-4">

                            Student Applications

                        </h2>

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Dance Style</th>
                                    <th>Batch</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    applications.map((application) => (

                                        <tr key={application._id}>

                                            <td>

                                                {application.firstName} {application.lastName}

                                            </td>

                                            <td>{application.email}</td>

                                            <td>{application.phone}</td>

                                            <td>{application.danceStyle}</td>

                                            <td>{application.batch}</td>

                                            <td>

                                                <button

                                                    className="btn btn-danger btn-sm"

                                                    onClick={() => deleteApplication(application._id)}

                                                >

                                                    Delete

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ManageApplications;