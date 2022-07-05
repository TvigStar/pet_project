import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { NavBar } from "./components";
import { Team, Shop, Main, Register, Cart ,Login} from "./pages";
import {Api} from "./api";
import {useDispatch, useSelector} from "react-redux";
import {SIGN_IN_SUCCESS} from "./redux/actions/actionType";
import {useEffect, useState} from "react";
import {Rings} from "react-loader-spinner";


const ProtectedRoute = ({ children }) => {
    const {
        loggedIn
    } = useSelector(({ auth }) => auth);

    if (!loggedIn) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

function App() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const checkIfLogged = async () => {
        try{  const refreshToken = localStorage.getItem('refresh_token')
            if(refreshToken) {
                const {data} = await Api.auth.refreshToken(refreshToken)

                localStorage.setItem('access_token', data.access_token)
                localStorage.setItem('refresh_token', data.refresh_token)
                dispatch({type: SIGN_IN_SUCCESS})

            }} catch (err){
            console.log(err)
        }
        setLoading(false)
    }

    useEffect( () => {
            checkIfLogged()
        }
    ,[])

    if (loading) {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Rings color="#00BFFF" height={80} width={80}/>
            </div>
        )
    }

    return (
        <>
            <div className='container-fluid'>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={
                     <Main/>}/>
                    <Route path="/shop" element={
                        <ProtectedRoute>
                            <Shop/>
                        </ProtectedRoute>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={
                        <ProtectedRoute>
                        <Cart/>
                        </ProtectedRoute>}/>
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
            </div>
        </>
    );
}

export default App;
