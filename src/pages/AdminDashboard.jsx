import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardCards from "../components/DashboardCards";
import RecentApplications from "../components/RecentApplications";


function AdminDashboard() {
    

    return (

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-2 p-0">

                    <Sidebar />

                </div>

                <div
    className="col-md-10 min-vh-100"
    style={{
        background: "#f4f6f9"
    }}
>

                    <Topbar />

                    <DashboardCards />

                    <RecentApplications />

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;