import { useEffect, useState } from "react";
import { API_URL } from "../config";

function DashboardCards() {

    const [stats, setStats] = useState({
        students: 0,
        applications: 0,
        enquiries: 0,
        courses: 0,
        sessions: 0
    });

    useEffect(() => {

        fetch(`${API_URL}/api/admin/stats`)
            .then((response) => response.json())
            .then((data) => setStats(data))
            .catch((error) => console.log(error));

    }, []);

    const cards = [

    {
        title: "Students",
        value: stats.students,
        icon: "👨‍🎓",
        color: "#0d6efd"
    },

    {
        title: "Applications",
        value: stats.applications,
        icon: "📝",
        color: "#fd7e14"
    },

    {
        title: "Enquiries",
        value: stats.enquiries,
        icon: "📨",
        color: "#6f42c1"
    },

    {
        title: "Courses",
        value: stats.courses,
        icon: "📚",
        color: "#198754"
    },

    {
        title: "Sessions",
        value: stats.sessions,
        icon: "📅",
        color: "#dc3545"
    }

];

    return (

        <div className="container-fluid py-4">

            <div className="row g-4">

                {

                    cards.map((card, index) => (

                        <div
                            className="col-sm-6 col-lg-4 col-xl"
                            key={index}
                        >

                            <div
    className="card dashboard-card text-center border-0"
    style={{
        borderTop: `6px solid ${card.color}`
    }}
>

                                <div className="card-body">

                                    <div className="dashboard-icon">

                                        {card.icon}

                                    </div>

                                    <h5 className="mt-3 fw-semibold">

                                        {card.title}

                                    </h5>

                                    <h1 className="dashboard-count">

                                        {card.value}

                                    </h1>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default DashboardCards;