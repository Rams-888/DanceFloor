import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function ManageCourses() {

    const [courses, setCourses] = useState([]);

    const [course, setCourse] = useState({
        title: "",
        description: "",
        duration: "",
        fees: ""
    });

    const fetchCourses = async () => {

        const response = await fetch("http://localhost:5000/api/courses");

        const data = await response.json();

        setCourses(data);

    };

    useEffect(() => {

        fetchCourses();

    }, []);

    const handleChange = (e) => {

        setCourse({

            ...course,

            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        await fetch("http://localhost:5000/api/courses", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(course)

        });

        setCourse({

            title: "",
            description: "",
            duration: "",
            fees: ""

        });

        fetchCourses();

    };

    const deleteCourse = async (id) => {

        await fetch(`http://localhost:5000/api/courses/${id}`, {

            method: "DELETE"

        });

        fetchCourses();

    };

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">

                    <Sidebar/>

                </div>

                <div className="col-md-10">

                    <Topbar/>

                    <div className="container mt-4">

                        <h2>Manage Courses</h2>

                        <form onSubmit={handleSubmit} className="mb-4">

                            <input
                                className="form-control mb-2"
                                placeholder="Course Title"
                                name="title"
                                value={course.title}
                                onChange={handleChange}
                                required
                            />

                            <textarea
                                className="form-control mb-2"
                                placeholder="Description"
                                name="description"
                                value={course.description}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-2"
                                placeholder="Duration"
                                name="duration"
                                value={course.duration}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-2"
                                placeholder="Fees"
                                name="fees"
                                type="number"
                                value={course.fees}
                                onChange={handleChange}
                                required
                            />

                            <button className="btn btn-success">

                                Add Course

                            </button>

                        </form>

                        <table className="table table-bordered">

                            <thead className="table-dark">

                                <tr>

                                    <th>Title</th>

                                    <th>Duration</th>

                                    <th>Fees</th>

                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    courses.map((item)=>(

                                        <tr key={item._id}>

                                            <td>{item.title}</td>

                                            <td>{item.duration}</td>

                                            <td>₹ {item.fees}</td>

                                            <td>

                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={()=>deleteCourse(item._id)}
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

export default ManageCourses;