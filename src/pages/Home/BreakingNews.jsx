import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex h-20 p-4 bg-[#F3F3F3] mt-7">
            <button className="bg-[#D72050] text-white px-6 py-2 text-xl capitalize">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12 text-[#403F3F] font-semibold text-lg" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12 text-[#403F3F] font-semibold text-lg" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12 text-[#403F3F] font-semibold text-lg" to={'/'}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;