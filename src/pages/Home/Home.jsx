import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2">
                    <h2 className="text-3xl">News coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;