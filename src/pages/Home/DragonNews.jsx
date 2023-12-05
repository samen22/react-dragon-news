import PropTypes from 'prop-types';
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye } from "react-icons/io5";
import { Link } from 'react-router-dom';

const DragonNews = ({ news }) => {

    const { title, image_url, author, details, _id } = news;


    return (
        <div className='mb-8'>
            <div className='border space-y-8'>
                <div className='flex items-center justify-between bg-[#F3F3F3] p-5 border'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                        <div>
                            <h2 className='text-[#403F3F] font-semibold'>{author.name}</h2>
                            <p className='text-sm text-[#706F6F]'>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <CiBookmark className='w-6 h-6' />
                        <CiShare2 className='w-6 h-6' />
                    </div>

                </div>
                {/* news section */}
                <div className='p-5 mt-3'>
                    <h1 className='text-[#403F3F] text-xl font-bold mb-5'>{title}</h1>
                    <img src={image_url} alt="" />
                    {
                        details.length > 150 ? 
                        <p className='mt-8 text-[#706F6F] mb-8'>{details.slice(0, 150)} <Link to={`/news/${_id}`} className='text-lg text-orange-400 font-semibold'>Read more...</Link></p>
                        : <p className='mt-8 text-[#706F6F] mb-8'>{details}</p>

                    }
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
    news: PropTypes.object
}

export default DragonNews;