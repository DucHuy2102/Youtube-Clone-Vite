import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Video = () => {
    const isOpenSidebar = useSelector((state) => state.app.open);

    return (
        <div
            className={`${
                isOpenSidebar ? 'w-[400px] h-[300px]' : 'w-[340px] h-[310px]'
            } flex flex-col cursor-pointer rounded-lg overflow-hidden`}
        >
            <img
                src='https://w0.peakpx.com/wallpaper/119/390/HD-wallpaper-goat-cristiano-ronaldo-2021.jpg'
                alt='Cristiano Ronaldo'
                className={`${isOpenSidebar ? 'h-[225px]' : 'h-[210px]'} w-full object-cover`}
            />
            <div className='bg-white flex items-center p-2'>
                <img
                    src='https://w0.peakpx.com/wallpaper/119/390/HD-wallpaper-goat-cristiano-ronaldo-2021.jpg'
                    alt='Avatar'
                    className='w-10 h-10 object-cover rounded-full'
                />
                <div className='flex flex-col ml-3'>
                    <span className='text-black font-semibold'>Cristiano Ronaldo 4k</span>
                    <span className='text-gray-600 text-sm'>dHuy Offical</span>
                    <span className='text-gray-600 text-sm'>70k views - 11 hours ago</span>
                </div>
                <BsThreeDotsVertical size={20} className='ml-auto' />
            </div>
        </div>
    );
};

export default Video;
