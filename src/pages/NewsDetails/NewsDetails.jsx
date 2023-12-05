import { Link, useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";


const NewsDetails = () => {
    const { id } = useParams();
    const [newsDetails, setNewsDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/news.json`);
                const data = await response.json();
                const selectedNews = data.find(news => news._id === id);
                setNewsDetails(selectedNews);

            } catch (error) {
                console.error("Error fetching news details:", error);
            }
        };

        fetchData();
    }, [id]);

    if (!newsDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-[#403F3F] text-xl font-semibold mt-7">Dragon News</h1>
            <div className="grid md:grid-cols-4 mt-8 gap-6">
                <div className="col-span-3 border h-3/4 rounded-md p-7 ">
                    <Link to={`news/${id}`}>
                        <img src={newsDetails.image_url} alt="" />
                        <h1 className="text-2xl text-[#403F3F] font-bold mt-5">{newsDetails.title}</h1>
                        <p className="text-[#706F6F] mt-2">{newsDetails.details}</p>
                    </Link>
                    <Link to={'/'}>
                        <button className="flex items-center gap-2 mt-10 pt-2 pb-2 pr-10 pl-6 bg-[#D72050] text-white text-xl">
                            <span className="text-2xl"><FaArrowLeft /></span>All news in this Category
                        </button>

                    </Link>

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;