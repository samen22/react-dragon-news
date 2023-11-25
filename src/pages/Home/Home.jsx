import { useEffect, useState } from "react";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import DragonNews from "./DragonNews";

const Home = () => {
    const [dragonNews, setDragonNews] = useState([]);

    useEffect( ()=>{
        fetch('/data/news.json')
        .then(res=> res.json())
        .then(data => setDragonNews(data));
    }, []);

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
                        dragonNews.map(news => <DragonNews key={news.id} news={news}></DragonNews>)
                    }
                </div>
                <div className="">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;