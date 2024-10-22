import { Outlet } from "react-router-dom";
import { Footer } from '../Footer/Footer';
import './Layout.css'


export const Layout = () => {
    return (
        <div className="layout-container">
            <div className="main-container">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}