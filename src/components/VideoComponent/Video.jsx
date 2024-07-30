import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { LuDot } from 'react-icons/lu';
import { useEffect, useState } from 'react';

// views format function
const formatViews = (number) => {
    if (number >= 1_000_000) {
        return (number / 1_000_000).toFixed(1) + 'M lượt xem';
    } else if (number >= 1_000) {
        return (number / 1_000).toFixed(1) + 'K lượt xem';
    } else {
        return number + ' lượt xem';
    }
};

// timeAgo function
const timeAgo = (dateString) => {
    const now = new Date();
    const then = new Date(dateString);
    const seconds = Math.floor((now - then) / 1000);
    const intervals = [
        { label: 'năm', seconds: 31536000 },
        { label: 'tháng', seconds: 2592000 },
        { label: 'tuần', seconds: 604800 },
        { label: 'ngày', seconds: 86400 },
        { label: 'giờ', seconds: 3600 },
        { label: 'phút', seconds: 60 },
        { label: 'giây', seconds: 1 },
    ];

    for (const interval of intervals) {
        const count = Math.floor(seconds / interval.seconds);
        if (count > 0) {
            return `${count} ${interval.label} trước`;
        }
    }

    return 'vừa xong';
};

const Video = ({ data }) => {
    const isOpenSidebar = useSelector((state) => state.app.open);

    // fetch channel data from API
    const [channel, setChannel] = useState([]);
    const fetchChannel = async () => {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
                data?.snippet?.channelId
            }&key=${import.meta.env.VITE_API_KEY}`
        );
        const dataChannel = await response.json();
        setChannel(dataChannel.items[0]);
    };

    useEffect(() => {
        if (data?.snippet?.channelId) {
            fetchChannel();
        }
    }, [data]);

    return (
        <div
            className={`${
                isOpenSidebar ? 'w-[400px] h-[320px]' : 'w-[340px] h-[270px]'
            } flex flex-col items-start cursor-pointer rounded-lg overflow-hidden`}
        >
            <img
                src={data.snippet.thumbnails.high.url}
                alt='Image Video'
                className={`${
                    isOpenSidebar ? 'h-[225px]' : 'h-[190px]'
                } w-full rounded-lg object-cover`}
            />
            <div key={data.id} className='w-full pt-2 flex gap-2'>
                {/* Thumbnail */}
                {channel && channel.snippet && channel.snippet.thumbnails && (
                    <img
                        src={
                            channel.snippet.thumbnails.high.url ??
                            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAY1BMVEX///8AAABJSUnR0dEODg6enp6kpKQRERF0dHRwcHAyMjK8vLzw8PDp6ens7OxZWVnc3NwkJCQdHR2NjY04ODj29vaqqqoXFxe1tbXLy8tQUFDj4+OBgYGVlZVnZ2crKytAQEBodD3rAAAE6UlEQVR4nO2di5aqMAxFrfgolJcgiIro/3/lBee6dBxGRXOSDqv7B3Qv2rQpaZhMoKT1Rt2yqrC/B6OIqpO6ZyH9r94i8vLVDxWl6lD6jw2m8Mqkx6RlMy+k/9wwQpOv+1W6WZOn0v9vAPtS942vK8n8r+h4eZI9VOnY6bln/2jbNj/jV//UOe10GUn/3UdU08fj644sWOdb6f/cT1H9PukfMPPt8ylM8I7KF3Vq0wQqti9Old9ottbopPVnKh2WrD6FeWuy3BNUFjyccD6jcGlDwUE8VEf5ksaltan3wi410XM522hRmyKnU+mQTBCKBa2LUoIJwpbaRSmx/UBMEpO/c5QKaQd6l3b1lHGJEC5KyTwagk1MH7WES4FxUTOJgFaBZJTEOaGPktECMh9kY48J+F3S54cwb5LxpzZm8/xvvSlj2GVKsq3/PcuSXYYqJ/vJ7OBknIyTcTJOxjaZuZNxMk7GyTiZt1jAUgD3ZD5jVE/GyTiZvy3DXy2Ik1k6GSfjZJyMk3EyTsbJcHAY04lmg3JRquF28QBFQBdOzG9oS9iL846A9a0mpJ7pFsZpk/5y04eOhG+kpTu0zM7jkxnTk4lgRUAXfMYSujEFgEmJluGMzeaIdTly1gJ5U6zMlLO8OQZHgIazhLYAVc5eqFmLTudYGd4koBp0iXEoK97yOWwEOPFtZjpi6IYmYS6hh4Yz7lQTGs64rwOUwAiQcZfPIs8AAu7rTSEwnE1jZpkJMJwl3C7AQ0CBm1qjutgwgR1q7PhdcNkm/72GNp6hZESuBIPimcQog92gk+mzBRpnQhfPMTIyLhONcJG42NgBCc4SgbkjRchItWyBRACpxhMFYKVJxPpOACaN1JRpJw15GjCT63IUkxcDNOxJ5hXycSY3yujf1E5Fe2kRbzYlHwz1e+edcJOzkvAogP3w756Q8JxWi/elTT9sB3iFu5ipD0N06rzi7zbRA9HbDV/a48yepDXIRriH3gWSgJZJW/yHZNJYIlPQPBkL2mi2RDRzRryL5hmPpFx7aUd3YEOSos3s+GJASSMjvTH7gqgskL9ovg+ig02po8zvEKU0/K9l+yB6iT6V9jgzJpmQKKE5iadmLSlR4cnagtxs4hHdPgl4K+b6WRAdaWQWfGenIDuibcT3zXtNditwKdvivN2XkXbT3Ijuz8hLAQS3znuyM7MLJ7mRBqjREHs0o3qnuad3UUpqnI2qqIF8+nesZVxihItSMq9oQXWNMuMMMsrapUbCZUw1miHxp2eu5Nw2UQVsCBBUnOfOUQVsOtHRsOmEFfyetlJ+xTLYKg27BXBLpvF7TqPB15qvHDX2/XPqQxuB3BP4uOOn6Mn3WAGsNCYSUH/T7FVy+gwnBN9mfsScNrDFRk6lw9BtpSMD7mXwnKmhmTuxAS/3r9EQPJ3CaNhXc4ax0ebDUMC4Rj7ns1V0y7tGPid4+8PIqbZMpSPQ72wKwpplPzmcbPAXRHF5JAWDctEYedufglX5apyOP/nUNxfBS8tOZODNy2hInm4KQsOQElPhm0dzp13uLQ1h/WQPNgVbm5b71zjq/lU09YE9PnCse1LryMbl/jWC+9SaqsxChu/FHTRllnLcFniiG8nh8a9LqAfvWIrmpiMqul8hnqmTsRQnYytOxlacjK04GVtxMrbiZGxlhDL/APaJc1uK0ZPQAAAAAElFTkSuQmCC'
                        }
                        alt={data.snippet.channelTitle}
                        className='w-10 h-10 object-cover rounded-full mt-1'
                    />
                )}

                {/* Content */}
                <div className='flex-1 flex flex-col justify-between'>
                    {/* Title */}
                    <span
                        className={`text-black ${
                            isOpenSidebar ? 'w-[21vw]' : 'w-[17vw]'
                        } font-semibold text-sm truncate`}
                    >
                        {data.snippet.title}
                    </span>

                    {/* Channel Name and View Count */}
                    <div className='text-gray-600 text-sm'>
                        <span className='block'>{data.snippet.channelTitle}</span>
                        <div className='flex items-center'>
                            <span>{formatViews(data.statistics.viewCount)}</span>
                            <LuDot size={18} />
                            <span>{timeAgo(data.snippet.publishedAt)}</span>
                        </div>
                    </div>
                </div>

                {/* More Options */}
                <div className='flex items-start mt-1'>
                    <BsThreeDotsVertical size={20} className='text-gray-600' />
                </div>
            </div>
        </div>
    );
};

export default Video;
