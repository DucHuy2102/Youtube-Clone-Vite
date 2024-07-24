import { GoHome } from 'react-icons/go';
import { SiYoutubeshorts, SiYoutubemusic, SiYoutubestudio } from 'react-icons/si';
import {
    MdOutlineSubscriptions,
    MdOutlineWatchLater,
    MdChevronRight,
    MdOutlineWhatshot,
    MdOutlineSettings,
    MdOutlineFlag,
    MdOutlineHelpOutline,
    MdOutlineFeedback,
} from 'react-icons/md';
import { GoHistory } from 'react-icons/go';
import { AiOutlineLike } from 'react-icons/ai';
import { TfiDownload } from 'react-icons/tfi';
import { RxVideo } from 'react-icons/rx';
import { LuListVideo } from 'react-icons/lu';
import { RiFileUserLine } from 'react-icons/ri';
import { IoMusicalNoteOutline, IoGameControllerOutline, IoNewspaperOutline } from 'react-icons/io5';
import { GiTrophyCup } from 'react-icons/gi';
import { TbBrandYoutubeKids } from 'react-icons/tb';
import './sidebar.css';

// defaultSidebar
const defaultSidebar = [
    { icon: <GoHome size={24} />, title: 'Trang chủ' },
    { icon: <SiYoutubeshorts size={24} />, title: 'Shorts' },
    { icon: <MdOutlineSubscriptions size={24} />, title: 'Kênh đăng ký' },
    { icon: <SiYoutubemusic size={24} />, title: 'YouTube Music' },
];

// userSidebar
const userSidebar = [
    { icon: <RiFileUserLine size={24} />, title: 'Kênh của bạn' },
    { icon: <GoHistory size={24} />, title: 'Video đã xem' },
    { icon: <LuListVideo size={24} />, title: 'Danh sách phát' },
    { icon: <RxVideo size={24} />, title: 'Video của bạn' },
    { icon: <MdOutlineWatchLater size={24} />, title: 'Xem sau' },
    { icon: <AiOutlineLike size={24} />, title: 'Video đã thích' },
    { icon: <TfiDownload size={20} />, title: 'Tải xuống' },
];

// discorverSidebar
const discorverSidebar = [
    { icon: <MdOutlineWhatshot size={24} />, title: 'Thịnh hành' },
    { icon: <IoMusicalNoteOutline size={24} />, title: 'Âm nhạc' },
    { icon: <IoGameControllerOutline size={24} />, title: 'Trò chơi' },
    { icon: <IoNewspaperOutline size={24} />, title: 'Tin tức' },
    { icon: <GiTrophyCup size={24} />, title: 'Thể thao' },
];

// moreServiceSidebar
const moreServiceSidebar = [
    { icon: <SiYoutubestudio size={24} />, title: 'Youtube Studio' },
    { icon: <SiYoutubemusic size={24} />, title: 'Youtube Music' },
    { icon: <TbBrandYoutubeKids size={24} />, title: 'Youtube Kids' },
];

// settingSidebar
const settingSidebar = [
    { icon: <MdOutlineSettings size={24} />, title: 'Cài đặt' },
    { icon: <MdOutlineFlag size={24} />, title: 'Nhật ký báo cáo' },
    { icon: <MdOutlineHelpOutline size={24} />, title: 'Trợ giúp' },
    { icon: <MdOutlineFeedback size={24} />, title: 'Ý kiến phản hồi' },
];

const Sidebar = () => {
    return (
        <div className='flex flex-col h-screen w-[240px] bg-white border-r border-gray-200 overflow-y-auto'>
            {/* defaultSidebar */}
            <div className='customOverflow'>
                <div className='border-b border-gray-200 pb-4'>
                    {defaultSidebar.map((item, index) => (
                        <div key={index} className='w-full px-[11px]'>
                            <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='text-xl'>{item.icon}</div>
                                <span className='text-md pl-7 font-medium'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* userSidebar */}
                <div className='border-b border-gray-200 pt-4 pb-4'>
                    <div className='w-full px-[11px]'>
                        <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                            <div className='text-lg font-medium'>Bạn</div>
                            <span className='pl-4'>
                                <MdChevronRight size={20} />
                            </span>
                        </div>
                    </div>
                    {userSidebar.map((item, index) => (
                        <div key={index} className='w-full px-[11px]'>
                            <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='text-xl'>{item.icon}</div>
                                <span className='text-md pl-7 font-medium'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* discorverSidebar */}
                <div className='border-b border-gray-200 pt-4 pb-4'>
                    <div className='w-full px-[11px]'>
                        <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                            <div className='text-lg font-medium'>Khám phá</div>
                        </div>
                    </div>
                    {discorverSidebar.map((item, index) => (
                        <div key={index} className='w-full px-[11px]'>
                            <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='text-xl'>{item.icon}</div>
                                <span className='text-md pl-7 font-medium'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* moreServiceSidebar */}
                <div className='border-b border-gray-200 pt-4 pb-4'>
                    <div className='w-full px-[11px]'>
                        <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                            <div className='text-lg font-medium'>Dịch vụ khác</div>
                        </div>
                    </div>
                    {moreServiceSidebar.map((item, index) => (
                        <div key={index} className='w-full px-[11px]'>
                            <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='text-xl'>{item.icon}</div>
                                <span className='text-md pl-7 font-medium'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* settingSidebar */}
                <div className='pt-4 pb-4'>
                    {settingSidebar.map((item, index) => (
                        <div key={index} className='w-full px-[11px]'>
                            <div className='h-[40px] flex items-center px-[12px] hover:bg-gray-100 cursor-pointer rounded-lg'>
                                <div className='text-xl'>{item.icon}</div>
                                <span className='text-md pl-7 font-medium'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
