import React, { useEffect, useState } from 'react';
import ButtonList from './ButtonList';
import { Video } from './exportComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleSidebar } from '../redux/slides/appSlide';

const Content = () => {
    const isOpenSidebar = useSelector((state) => state.app.open);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const handleWatchVideo = () => {
        dispatch(toggleSidebar());
        navigate('/watch');
    };

    return (
        <div className={`flex-grow flex flex-col ${isOpenSidebar ? 'ml-[15rem]' : 'ml-16'} `}>
            <div>
                <ButtonList />
            </div>

            <div
                className={`pt-[112px] px-5 grid overflow-auto ${
                    isOpenSidebar ? 'grid-cols-3 gap-x-3 gap-y-2' : 'grid-cols-4 gap-x-2 gap-y-3'
                }`}
            >
                {video.map((item) => (
                    <div onClick={handleWatchVideo} key={item.id}>
                        <Video data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
