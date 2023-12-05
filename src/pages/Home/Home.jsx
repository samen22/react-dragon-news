import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import DragonNews from "./DragonNews";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const dragonNews = useLoaderData();
    // console.log(dragonNews);

    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                <div className="">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 p-4">
                    <h2 className="text-xl font-semibold text-[#403F3F] mb-5">Dragon News Home</h2>
                    { 
                      Array.isArray(dragonNews)?  
                      dragonNews.map(news => <DragonNews key={news._id} news={news}></DragonNews>) : <p>Dragon News is not available.</p>
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;