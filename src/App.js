import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { NavBar } from "./components";
import { Team, Shop, Main, Register, Cart } from "./pages";
import { Login } from "./pages/Login";


const ProtectedRoute = ({ children }) => {
    const accessToken = localStorage.getItem('access_token')

    if (!accessToken) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

function App() {
    // const checkIfLogged = () => {
    //     const refreshToken = localStorage.getItem('refresh_token')
    //
    //     if(refreshToken) {
    //         const {data} =
    //     }
    // }

    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={
                        <ProtectedRoute>
                            <Main/>
                        </ProtectedRoute>}/>
                    <Route path="/shop" element={
                        <ProtectedRoute>
                            <Shop/>
                        </ProtectedRoute>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
                transition={Flip}
            />
        </>
    );
}

export default App;
