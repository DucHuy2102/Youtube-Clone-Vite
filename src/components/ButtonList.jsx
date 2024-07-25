const buttonDefault = [
    'Tất cả',
    'Âm nhạc',
    'Danh sách kết hợp',
    'Trò chơi',
    'Trực tiếp',
    'Hài kịch',
    'Bóng đá',
    'Đọc rap',
    'Đã xem',
    'Tin tức',
    'Phim',
    'Thể thao',
];

const ButtonList = () => {
    return (
        <div className='bg-white fixed top-14 left-50 z-40 flex justify-start items-start w-full h-[56px] pt-1'>
            <div className='flex gap-2 px-5'>
                {buttonDefault.map((item, index) => (
                    <button
                        key={index}
                        className='rounded-lg text-sm text-black font-medium px-4 py-2 bg-gray-200'
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
