// Outlet contains the content of its component where it is used (in this case, MainLayout)
// MainLayout will store components that must be accessed by multiple route components
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
export default MainLayout
