import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";

const AppRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<Layout showBackground><HomePage/></Layout>} />
            <Route path="auth-callback" element={<AuthCallbackPage/>} />
            <Route path="/search/:district" element={<Layout showBackground={false}><SearchPage/></Layout>}/>
            <Route path="/detail/:restaurantId" element={<Layout showBackground={false}><DetailPage/></Layout>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="user-profile" element={<Layout> <UserProfilePage/></Layout>} />
                <Route path="restaurant-management" element={<Layout><ManageRestaurantPage/></Layout>}/>
            </Route>
            <Route path="register" element={<span>USER Register PAGE</span>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;