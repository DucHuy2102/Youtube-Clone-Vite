import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Body, WatchVideo, Content } from './components/exportComponent';

const App = () => {
    return (
        <Router>
            <div className='flex flex-col h-screen'>
                {/* navbar */}
                <Navbar />

                {/* routes */}
                <Routes>
                    <Route path='/' element={<Body />}>
                        <Route index element={<Content />} />
                        <Route path='watch' element={<WatchVideo />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
