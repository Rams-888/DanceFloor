function UpcomingEvents() {

    const events = [

        {
            date: "15 August",
            event: "Independence Day Dance Show",
            venue: "Main Auditorium"
        },

        {
            date: "05 September",
            event: "Hip-Hop Workshop",
            venue: "Studio Hall"
        },

        {
            date: "20 October",
            event: "Annual Dance Festival",
            venue: "Open Stage"
        }

    ];

    return (

        <section className="container my-5">

            <div className="card shadow-lg">

                <div className="card-body">

                    <h2 className="text-center mb-4">

                        Upcoming Events

                    </h2>

                    <div className="table-responsive">

                        <table className="table table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Date</th>

                                    <th>Event</th>

                                    <th>Venue</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    events.map((event, index) => (

                                        <tr key={index}>

                                            <td>{event.date}</td>

                                            <td>{event.event}</td>

                                            <td>{event.venue}</td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default UpcomingEvents;