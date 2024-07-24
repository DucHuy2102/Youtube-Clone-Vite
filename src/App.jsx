import { Navbar, Sidebar } from './components/exportComponent';

const App = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='flex flex-1 mt-[56px]'>
                {/* Sidebar */}
                <Sidebar />

                {/* videos */}
                <div className='flex-1 bg-red-300 overflow-y-auto'>
                    {/* Nội dung của bạn, ví dụ: video youtube */}
                    <p>video youtube here</p>
                </div>
            </div>
        </div>
    );
};

export default App;
