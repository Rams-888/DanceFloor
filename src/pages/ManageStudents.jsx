import { useEffect, useState } from "react";
import { API_URL } from "../config";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageStudents() {

    const [students, setStudents] = useState([]);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [editData, setEditData] = useState({
        name: "",
        mobile: "",
        course: "",
        batch: "",
        instructor: ""
    });

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

    const openEditModal = (student) => {

        setSelectedStudent(student);

        setEditData({

            name: student.name,

            mobile: student.mobile,

            course: student.course || "",

            batch: student.batch || "",

            instructor: student.instructor || ""

        });

    };

    const saveStudentChanges = async () => {

        try {

            const response = await fetch(

                `${API_URL}/api/users/${selectedStudent._id}`,

                {

                    method: "PUT",

                    headers: {

                        "Content-Type": "application/json"

                    },

                    body: JSON.stringify(editData)

                }

            );

            if (response.ok) {

                alert("Student Updated Successfully");

                fetchStudents();

            } else {

                alert("Update Failed");

            }

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <>

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

                                                        className="btn btn-warning btn-sm me-2"

                                                        data-bs-toggle="modal"

                                                        data-bs-target="#editStudentModal"

                                                        onClick={() => openEditModal(student)}

                                                    >

                                                        Edit

                                                    </button>

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
                        {/* Edit Student Modal */}

            <div
                className="modal fade"
                id="editStudentModal"
                tabIndex="-1"
                aria-hidden="true"
            >

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content">

                        <div className="modal-header">

                            <h5 className="modal-title">

                                Edit Student

                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
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

                                    Course

                                </label>

                                <select
                                    className="form-select"
                                    value={editData.course}
                                    onChange={(e) =>
                                        setEditData({
                                            ...editData,
                                            course: e.target.value
                                        })
                                    }
                                >

                                    <option value="">Select Course</option>
                                    <option>Hip-Hop</option>
                                    <option>Freestyle</option>
                                    <option>Bharatanatyam</option>
                                    <option>Classical</option>

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Batch

                                </label>

                                <select
                                    className="form-select"
                                    value={editData.batch}
                                    onChange={(e) =>
                                        setEditData({
                                            ...editData,
                                            batch: e.target.value
                                        })
                                    }
                                >

                                    <option value="">Select Batch</option>
                                    <option>Morning</option>
                                    <option>Evening</option>
                                    <option>Weekend</option>

                                </select>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Instructor

                                </label>

                                <select
                                    className="form-select"
                                    value={editData.instructor}
                                    onChange={(e) =>
                                        setEditData({
                                            ...editData,
                                            instructor: e.target.value
                                        })
                                    }
                                >

                                    <option value="">Select Instructor</option>
                                    <option>Alex Johnson</option>
                                    <option>Priya Sharma</option>
                                    <option>David Kumar</option>

                                </select>

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
                                onClick={saveStudentChanges}
                                data-bs-dismiss="modal"
                            >

                                Save Changes

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </>

    );

}

export default ManageStudents;