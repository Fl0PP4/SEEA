import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/map" elemtent={<Map />}  />
        </Routes>
    )
}