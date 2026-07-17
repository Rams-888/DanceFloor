function Topbar() {

    const admin = JSON.parse(localStorage.getItem("admin"));

    return (

        <div className="d-flex justify-content-between align-items-center p-4 bg-white shadow-sm">

            <h2>

                Dashboard

            </h2>

            <h5>

                Welcome,

                <span className="text-primary">

                    {" "}

                    {admin?.name}

                </span>

            </h5>

        </div>

    );

}

export default Topbar;