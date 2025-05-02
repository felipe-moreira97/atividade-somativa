import { BrowserRouter, Route, Routes } from "react-router";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SingUp from "../pages/SingUp";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SingUp />} />
            </Routes>
        </BrowserRouter>
    )
}