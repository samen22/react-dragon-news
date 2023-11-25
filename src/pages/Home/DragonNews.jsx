import PropTypes from 'prop-types';
import { useState } from 'react';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye } from "react-icons/io5";

const DragonNews = ({ news }) => {

    const [showDetails, setShowDetails] = useState(false);

    const handleReadMore = () => {
        setShowDetails(!showDetails);
    }

    return (
        <div className='mb-8'>
            <div className='border space-y-8'>
                <div className='flex items-center justify-between bg-[#F3F3F3] p-5 border'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10 h-10 rounded-full' src={news.author.img} alt="" />
                        <div>
                            <h2 className='text-[#403F3F] font-semibold'>{news.author.name}</h2>
                            <p className='text-sm text-[#706F6F]'>{news.author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <CiBookmark className='w-6 h-6' />
                        <CiShare2 className='w-6 h-6' />
                    </div>

                </div>
                {/* news section */}
                <div className='p-5 mt-3'>
                    <h1 className='text-[#403F3F] text-xl font-bold mb-5'>{news.title}</h1>
                    <img src={news.image_url} alt="" />
                    <p className='mt-8 text-[#706F6F]'>
                        {
                            showDetails ? news.details : `${news.details.slice(0, 150)}....`
                        }
                    </p>
                    <button className='text-lg text-orange-400 font-semibold mb-5' onClick={handleReadMore}>
                        {
                            showDetails ? "Read Less" : "Read More"
                        }
                    </button>
                    <hr />
                    <div className='flex justify-between mt-5'>
                        <div className="rating rating-md space-x-1">
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            <p className='font-medium text-[#706F6F] text-lg mr-2'>4.9</p>
                        </div>
                        <div className='flex gap-2'>
                            <IoEye className='w-6 h-6 text-[#706F6F]' />
                            <p className='text-[#706F6F] font-medium'>499</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

DragonNews.propTypes = {
    news: PropTypes.func
}

export default DragonNews;