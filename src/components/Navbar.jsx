import { RxHamburgerMenu } from 'react-icons/rx';
import { FaMicrophone, FaRegBell } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { RiVideoUploadLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/slides/appSlide';

const Navbar = () => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className='fixed top-0 left-0 z-50 w-full bg-white px-[16px] h-[56px] flex items-center justify-between'>
            <div className='h-full w-[170px] flex items-center px-2'>
                <RxHamburgerMenu size={22} className='cursor-pointer' onClick={toggleHandler} />
                <div className='pl-6 flex items-center gap-1'>
                    <img
                        width={90}
                        src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
                        alt='Logo_Youtube'
                    />
                </div>
            </div>

            {/* input search here */}
            <div className='w-[40vw] flex items-center gap-2'>
                <div className='flex flex-grow items-center'>
                    <input
                        type='text'
                        placeholder='Tìm kiếm'
                        className='flex-grow border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:border-blue-500'
                    />
                    <button className='bg-gray-100 border border-gray-300 rounded-r-full px-4 py-2 hover:bg-gray-200'>
                        <CiSearch size={24} />
                    </button>
                </div>
                <FaMicrophone
                    className='text-gray-700 hover:text-gray-900 w-10 h-10 p-2.5 cursor-pointer rounded-full bg-gray-100 border border-gray-300'
                    size={30}
                />
            </div>

            {/* more info */}
            <div className='flex items-center gap-5 px-6'>
                <RiVideoUploadLine className='cursor-pointer text-gray-700 p-1.5' size={35} />
                <FaRegBell className='cursor-pointer text-gray-700 p-1.5' size={35} />
                <img
                    src='https://amazonasatual.com.br/wp-content/uploads/2021/08/Cristiano-Ronaldo-Manchester-United.jpg'
                    alt='User Avatar'
                    className='w-8 h-8 rounded-full object-cover cursor-pointer'
                />
            </div>
        </div>
    );
};

export default Navbar;
