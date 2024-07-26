import { useSelector } from 'react-redux';
import { ButtonList, Navbar, Sidebar, Video } from './components/exportComponent';
import { useEffect, useState } from 'react';

const App = () => {
    const isOpenSidebar = useSelector((state) => state.app.open);

    // fetch video data from API
    const [video, setVideo] = useState([]);
    const fetchVideo = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_YOUTUBE_LIST_VIDEO}`);
            const data = await response.json();
            setVideo(data?.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchVideo();
    }, []);

    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-1'>
                {/* Sidebar */}
                <Sidebar className='flex-none w-[240px] min-w-[240px]' />

                {/* content */}
                <div
                    className={`flex-grow flex flex-col ${isOpenSidebar ? 'ml-[15rem]' : 'ml-16'} `}
                >
                    {/* feed */}
                    <div>
                        <ButtonList />
                    </div>

                    {/* videos */}
                    <div
                        className={`pt-[112px] px-5 grid overflow-auto ${
                            isOpenSidebar
                                ? 'grid-cols-3 gap-x-3 gap-y-2'
                                : 'grid-cols-4 gap-x-2 gap-y-3'
                        }`}
                    >
                        {video.map((item) => (
                            <Video key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
