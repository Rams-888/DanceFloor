import { useEffect, useState } from "react";

function DashboardCards() {

    const [stats, setStats] = useState({

        students: 0,
        applications: 0,
        enquiries: 0,
        courses: 0,
        sessions: 0

    });

    useEffect(() => {

        fetch("http://localhost:5000/api/admin/stats")

            .then((response) => response.json())

            .then((data) => setStats(data))

            .catch((error) => console.log(error));

    }, []);

    const cards = [

        {
            title: "Students",
            value: stats.students,
            icon: "👨‍🎓"
        },

        {
            title: "Applications",
            value: stats.applications,
            icon: "📝"
        },

        {
            title: "Enquiries",
            value: stats.enquiries,
            icon: "📨"
        },

        {
            title: "Courses",
            value: stats.courses,
            icon: "📚"
        },

        {
            title: "Sessions",
            value: stats.sessions,
            icon: "📅"
        }

    ];

    return (

        <div className="row">

            {

                cards.map((card, index) => (

                    <div className="col-md-4 col-lg-2 mb-4" key={index}>

                        <div className="card shadow text-center">

                            <div className="card-body">

                                <h1>{card.icon}</h1>

                                <h5>{card.title}</h5>

                                <h2>{card.value}</h2>

                            </div>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}

export default DashboardCards;