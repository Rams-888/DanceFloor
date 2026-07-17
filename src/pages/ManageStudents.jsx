import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageStudents() {

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {

        try {

            const response = await fetch(`${API_URL}/api/users`);

            const data = await response.json();

            setStudents(data);

        }

        catch (error) {

            console.log(error);

        }

    };

    useEffect(() => {

        fetchStudents();

    }, []);

    const deleteStudent = async (id) => {

        const confirmDelete = window.confirm("Delete this student?");

        if (!confirmDelete) return;

        await fetch(`${API_URL}/api/users/${id}`, {

            method: "DELETE"

        });

        fetchStudents();

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

                            Registered Students

                        </h2>

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Name</th>

                                    <th>Email</th>

                                    <th>Mobile</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    students.map((student) => (

                                        <tr key={student._id}>

                                            <td>{student.name}</td>

                                            <td>{student.email}</td>

                                            <td>{student.mobile}</td>

                                            <td>

                                                <button

                                                    className="btn btn-danger btn-sm"

                                                    onClick={() => deleteStudent(student._id)}

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

export default ManageStudents;