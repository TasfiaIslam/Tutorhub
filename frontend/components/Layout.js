import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

const Layout = ({children}) => {
    return ( 
        <div className="relative flex">
            {/* Sidebar */}
            <Sidebar />
            {/* main */}
            <div className="flex-1">
                <Navbar />
                <div className="min-h-screen bg-gray-200 rounded-tl-3xl">
                    <div className="w-11/12 mx-auto">
                    { children }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;