import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Application from "./pages/Application";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import Student from "./pages/Student";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SessionDetails from "./pages/SessionDetails";
import Enquiry from "./pages/Enquiry";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageStudents from "./pages/ManageStudents";
import ManageApplications from "./pages/ManageApplications";
import ManageEnquiries from "./pages/ManageEnquiries";
import ManageCourses from "./pages/ManageCourses";
import ManageSessions from "./pages/ManageSessions";
import ScrollToTop from "./components/ScrollToTop";
function App() {

    return (

        <BrowserRouter>
            <ScrollToTop />

            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/application" element={<Application />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route
    path="/student"
    element={
        <ProtectedRoute allowedRole="student">
            <Student />
        </ProtectedRoute>
    }
/>
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/session-details" element={<SessionDetails />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
    path="/admin/dashboard"
    element={
        <ProtectedRoute allowedRole="admin">
            <AdminDashboard />
        </ProtectedRoute>
    }
/>
                <Route path="/admin/students" element={<ManageStudents />} />
                <Route path="/admin/applications" element={<ManageApplications />} />
                <Route path="/admin/enquiries" element={<ManageEnquiries />} />
                <Route path="/admin/courses" element={<ManageCourses />} />
                <Route path="/admin/sessions" element={<ManageSessions />} />

            </Routes>

        </BrowserRouter>

    );

}

export default App;