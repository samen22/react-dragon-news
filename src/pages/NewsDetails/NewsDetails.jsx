import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";


const NewsDetails = () => {
    return (
        <div className="mx-auto">
            <Header></Header>
            <Navbar></Navbar>
            <h1 className="text-[#403F3F] text-xl font-semibold mt-7">Dragon News</h1>
            <div className="grid md:grid-cols-4 mt-8">
                <div className="col-span-3 border">

                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;