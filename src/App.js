import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NavBar} from "./components";
import {Team, Shop, Main, Register, Cart} from "./pages";
import {Login} from "./pages/Login";


function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/team" element={<Team/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
