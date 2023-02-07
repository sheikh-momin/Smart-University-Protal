import dashboard from '../../../components/Dashboard/Dashboard';
import { AiOutlineMenu } from "react-icons/ai";

import Dashboardnav from './Dashboardnav';

const DashboardNavbar = () => {
    
    return (
        
        <div>
        <div>
                <div className="navbar bg-gradient-to-r from-cyan-500   to-blue-500">
                <div className="navbar-start">
                <div className='drawer-content'>
                <label htmlFor="my-drawer" className=" drawer-button">
                    <AiOutlineMenu className='md:ml-10 ' size="30px"></AiOutlineMenu>
                </label>
                </div>
                
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-white md:text-xl">Dreamers University - Student Portal</a>
                </div>
                <div className="navbar-end">
                    
                </div>
            </div>





                    



        </div>
        
        
      </div>


      
    </div>

  );
};

export default DashboardNavbar;
