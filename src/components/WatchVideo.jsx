import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toggleSidebarWatchVideo } from '../redux/slides/appSlide';
import { useDispatch } from 'react-redux';
import { BiLike, BiDislike } from 'react-icons/bi';
import { PiShareFatThin } from 'react-icons/pi';
import { LiaDownloadSolid } from 'react-icons/lia';
import { HiDotsHorizontal } from 'react-icons/hi';

// views format function
const formatViews = (number) => {
    if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1) + 'M người đăng ký';
    } else if (number >= 1_000) {
        return (number / 1_000).toFixed(1) + 'K người đăng ký';
    } else {
        return number + ' người đăng ký';
    }
};

const WatchVideo = () => {
    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const idVideo = searchParam.get('v');
    const [singleVideo, setSingleVideo] = useState(null);
    const [showMore, setShowMore] = useState(false);
    const description = singleVideo?.snippet.description || '';
    console.log('singleVideo', singleVideo);

    useEffect(() => {
        dispatch(toggleSidebarWatchVideo(true));
        const getSingleVideo = async () => {
            try {
                const response = await axios.get(
                    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${idVideo}&regionCode=VN&key=${
                        import.meta.env.VITE_API_KEY
                    }`
                );
                setSingleVideo(response.data.items[0]);
            } catch (error) {
                console.log(error);
            }
        };
        getSingleVideo();

        return () => {
            dispatch(toggleSidebarWatchVideo(false));
        };
    }, [idVideo]);

    return (
        <div className='mx-10 mt-[60px] w-full flex justify-between'>
            {/* left content */}
            <div className='w-[70%]'>
                {/* video container */}
                <div className='relative pb-[56.25%]'>
                    <iframe
                        className='absolute top-0 left-0 w-full h-full rounded-lg shadow-lg'
                        src={`https://www.youtube.com/embed/${idVideo}?si=b7QptZCfzwLOm9tI`}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        referrerPolicy='strict-origin-when-cross-origin'
                        allowFullScreen
                    ></iframe>
                </div>

                {/* video info */}
                <div className='mt-4'>
                    <h1 className='text-xl font-bold'>{singleVideo?.snippet.title}</h1>
                    <div className='mt-3 flex justify-between items-center text-sm'>
                        {/* channel info */}
                        <div className='flex items-center space-x-3'>
                            <img
                                src={singleVideo?.snippet.thumbnails.default.url}
                                alt='channel'
                                className='h-10 w-10 rounded-full'
                            />
                            <div>
                                <p className='font-semibold'>{singleVideo?.snippet.channelTitle}</p>
                                <p className='text-gray-500'>
                                    {formatViews(singleVideo?.statistics.viewCount)}
                                </p>
                            </div>

                            <button className='w-[90px] h-[36px] bg-gray-100 text-black rounded-3xl font-medium hover:bg-gray-200'>
                                Tham gia
                            </button>
                            <button className='w-[90px] h-[36px] bg-black text-white rounded-3xl font-medium hover:bg-gray-900'>
                                Đăng ký
                            </button>
                        </div>

                        {/* button */}
                        <div className='flex items-center space-x-1'>
                            <div className='flex justify-between items-center space-x-3 px-4 h-[36px] rounded-3xl bg-gray-100 font-medium cursor-pointer'>
                                {/* like */}
                                <div className='flex items-center space-x-2'>
                                    <BiLike size={20} />
                                    <p>23N</p>
                                </div>
                                <hr className='bg-gray-300 w-[2px] h-6' />
                                {/* dislike */}
                                <div className=''>
                                    <BiDislike size={20} />
                                </div>
                            </div>
                            <button className='flex justify-center items-center space-x-2 px-4 h-[36px] rounded-3xl bg-gray-100 font-medium'>
                                <PiShareFatThin size={20} />
                                <p>Chia sẻ</p>
                            </button>
                            <button className='flex justify-center items-center space-x-2 px-4 h-[36px] rounded-3xl bg-gray-100 font-medium'>
                                <LiaDownloadSolid size={20} />
                                <p>Tải xuống</p>
                            </button>
                            <button className='flex justify-center items-center space-x-2 px-4 h-[36px] rounded-3xl bg-gray-100 font-medium'>
                                <HiDotsHorizontal size={20} />
                            </button>
                        </div>
                    </div>

                    {/* description */}
                    <div className='mt-4 relative'>
                        <p className={`text-gray-800 ${showMore ? '' : 'line-clamp-3'}`}>
                            {description}
                        </p>
                        {description.length > 200 && (
                            <button
                                className={`text-blue-500 absolute bottom-0 right-0 bg-white px-2 py-1 mt-2`}
                                onClick={() => setShowMore(!showMore)}
                            >
                                {showMore ? 'Ẩn bớt' : '...thêm'}
                            </button>
                        )}
                    </div>
                </div>

                {/* comments  */}
                <div className='mt-6'>
                    <h2 className='text-xl font-semibold'>Comments</h2>
                    <div className='mt-4'>
                        <input
                            type='text'
                            placeholder='Write a comment'
                            className='w-full px-4 py-2 border border-gray-300 rounded-lg'
                        />
                    </div>

                    <button className='mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg'>
                        Comment
                    </button>

                    <div className='mt-6'>
                        <div className='flex items-start space-x-4'>
                            <img
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VoWkILuo5EmliVcvUjrmP7cvRLgUHRVN9w&s'
                                alt='avatar'
                                className='w-10 h-10 rounded-full'
                            />
                            <div>
                                <p className='font-semibold'>Nguyen Van A</p>
                                <p>Good video</p>
                                <div className='mt-2'>
                                    <button className='text-blue-500'>Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Nested Comments */}
                        <div className='ml-12 mt-4'>
                            <div className='flex items-start space-x-4'>
                                <img
                                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VoWkILuo5EmliVcvUjrmP7cvRLgUHRVN9w&s'
                                    alt='avatar'
                                    className='w-10 h-10 rounded-full'
                                />
                                <div>
                                    <p className='font-semibold'>Nguyen Van B</p>
                                    <p>Good video</p>
                                    <div className='mt-2'>
                                        <button className='text-blue-500'>Reply</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* right content */}
            <div className='w-[30%]'>
                <h2 className='text-xl font-semibold'>Up next</h2>
                <div className='mt-4'>
                    <div className='flex items-start space-x-4'>
                        <img
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2VoWkILuo5EmliVcvUjrmP7cvRLgUHRVN9w&s'
                            alt='video'
                            className='w-20 h-20 rounded-lg'
                        />
                        <div>
                            <p className='font-semibold'>
                                {singleVideo?.snippet.title.slice(0, 20)}...
                            </p>
                            <p className='text-gray-500'>{singleVideo?.snippet.channelTitle}</p>
                            <p className='text-gray-500'>
                                {singleVideo?.statistics.viewCount} views •{' '}
                                {new Date(singleVideo?.snippet.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchVideo;
