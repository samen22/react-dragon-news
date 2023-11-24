import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import qZone1 from "/assets/qZone1.png"
import qZone2 from "/assets/qZone2.png"
import qZone3 from "/assets/qZone3.png"


const RightSideNav = () => {
    const backgroundImageUrl =  '/assets/bg1.png';

    return (
        <div>
            {/* Login With  */}
            <div className="p-4 space-y-4 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <div className="text-center mt-4">
                    <button className="btn btn-outline w-full mb-2 text-blue-400">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </button>
                    <button className="btn btn-outline border w-full">
                        <FaGithub></FaGithub>
                        Login with Github
                    </button>
                </div>
            </div>
            {/* Find Us On */}
            <div className="p-4 mb-6">
                <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
                <a className="p-4 text-lg text-[#706F6F] flex items-center border rounded-t-lg" href="">
                    <FaFacebook className="mr-2 text-blue-700"></FaFacebook>
                    Facebook
                </a>
                <a className="p-4 text-lg text-[#706F6F] flex items-center border border-x border-y" href="">
                    <FaTwitter className="mr-2 text-blue-400"></FaTwitter>
                    Twitter
                </a>
                <a className="p-4 text-lg text-[#706F6F] flex items-center border rounded-b-lg" href="">
                    <FaInstagram className="mr-2 text-orange-600"></FaInstagram>
                    Instagram
                </a>
            </div>
            {/* Q zone */}
            <div className="p-4 space-y-5 mb-6 bg-[#F3F3F3]">
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            {/* hero section with BG */}
            <div className="hero h-screen mb-4" style={{ backgroundImage: `url(${backgroundImageUrl}` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl text-white font-bold">Create an Amazing Newspaper</h1>
                        <p className="mb-5 text-[#FFF]">Discover thousands of options, 
                        easy to customize layouts, one-click to import demo and much more.</p>
                        <button className="bg-[#D72050] text-white px-5 py-3 text-xl font-semibold capitalize">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;