function Topbar() {

    const admin = JSON.parse(localStorage.getItem("admin"));

    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    return (

        <div
            className="d-flex justify-content-between align-items-center bg-white shadow-sm px-5 py-4 mb-4"
            style={{
                borderRadius: "0 0 15px 15px"
            }}
        >

            <div>

                <h2 className="fw-bold mb-1">

                    Dashboard

                </h2>

                <p className="text-muted mb-0">

                    Admin Dashboard Overview

                </p>

            </div>

            <div className="d-flex align-items-center">

                <div className="text-end me-3">

                    <h5 className="mb-1">

                        Welcome,

                        <span className="text-warning fw-bold">

                            {" "}
                            {admin?.name || "Admin"}

                        </span>

                        👋

                    </h5>

                    <small className="text-muted">

                        {today.toLocaleDateString("en-IN", options)}

                    </small>

                </div>

                <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                        width: "55px",
                        height: "55px",
                        borderRadius: "50%",
                        background: "#ffc107",
                        fontSize: "24px"
                    }}
                >

                    👤

                </div>

            </div>

        </div>

    );

}

export default Topbar;