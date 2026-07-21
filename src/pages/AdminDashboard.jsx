import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";


function AdminDashboard() {
    

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">

                    <Sidebar />

                </div>

                <div className="col-md-10 bg-light min-vh-100">

                    <Topbar />

                    <DashboardCards />

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;