import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";

function RouterLink() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} /> */}
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default RouterLink;
