import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageEnquiries() {

    const [enquiries, setEnquiries] = useState([]);

    const fetchEnquiries = async () => {

        const response = await fetch("${API_URL}/api/enquiries");

        const data = await response.json();

        setEnquiries(data);

    };

    useEffect(() => {

        fetchEnquiries();

    }, []);

    const deleteEnquiry = async (id) => {

        if (!window.confirm("Delete this enquiry?")) return;

        await fetch(`${API_URL}/api/enquiries/${id}`, {

            method: "DELETE"

        });

        fetchEnquiries();

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

                        <h2>Manage Enquiries</h2>

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Mobile</th>

                                    <th>Subject</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    enquiries.map((item) => (

                                        <tr key={item._id}>

                                            <td>{item.name}</td>

                                            <td>{item.email}</td>

                                            <td>{item.mobile}</td>

                                            <td>{item.subject}</td>

                                            <td>

                                                <button

                                                    className="btn btn-danger btn-sm"

                                                    onClick={() => deleteEnquiry(item._id)}

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

export default ManageEnquiries;