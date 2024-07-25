import { useSelector } from 'react-redux';
import { ButtonList, Navbar, Sidebar, Video } from './components/exportComponent';

const App = () => {
    const isOpenSidebar = useSelector((state) => state.app.open);

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
                            isOpenSidebar ? 'grid-cols-3 gap-3' : 'grid-cols-4 gap-1'
                        }`}
                    >
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                        <Video />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
