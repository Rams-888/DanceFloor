import { NavLink, Link } from "react-router-dom";

function Sidebar() {

    return (

        <div
    className="text-white min-vh-100 p-4"
    style={{
        background: "#1f2329",
        width: "260px"
    }}
>

            <h3 className="text-center mb-4">

                Admin Panel

            </h3>

            <ul className="nav flex-column">

                <NavLink
    to="/admin/dashboard"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    📊 Dashboard
</NavLink>

                <NavLink
    to="/admin/students"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    👨‍🎓 Students
</NavLink>

                <NavLink
    to="/admin/applications"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    📝 Applications
</NavLink>

                <NavLink
    to="/admin/enquiries"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    📨 Enquiries
</NavLink>
                <NavLink
    to="/admin/courses"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    📚 Courses
</NavLink>

                <NavLink
    to="/admin/sessions"
    className={({ isActive }) =>
        `nav-link sidebar-link ${isActive ? "sidebar-active" : "text-white"}`
    }
>
    📅 Sessions
</NavLink>

                

                <li className="nav-item mt-5">
                    <Link className="btn btn-danger w-100" to="/">
                        Logout
                    </Link>
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;