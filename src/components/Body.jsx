import { Sidebar } from './exportComponent';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div className='flex flex-1'>
            {/* Sidebar */}
            <Sidebar className='flex-none w-[240px] min-w-[240px]' />

            {/* content */}
            <Outlet />
        </div>
    );
};

export default Body;
