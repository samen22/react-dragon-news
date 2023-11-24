import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import moment from 'moment';
import { CiCalendar } from "react-icons/ci";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('/data/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const navLinkStyles = ({ isActive }) => {
        return {
            textColor: isActive ? "#403F3F" : "#9F9F9F",
            backgroundColor: isActive ? "#E7E7E7" : "none",
            fontWeight: isActive ? "semibold" : "normal"
        }
    }
    return (
        <div className="space-y-7">
            <h2 className="text-xl text-[#403F3F] font-semibold mb-9 p-4">All Category</h2>
            {
                categories.map(category => <NavLink
                    style={navLinkStyles}
                    to={`/category/${category.id}`}
                    className="block px-12 text-xl text-[#9F9F9F] mb-7  "
                    key={category.id}>{category.name}</NavLink>)
            }
            <div>
                {/* <div className="card card-compact w-auto bg-base-100 shadow-xl">
                    <figure><img src={'/assets/1.png'}alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div> */}
                <img className="mb-5 mt-7" src={'/assets/1.png'} alt="" />
                <h1 className="text-xl font-semibold text-[#403F3F] mb-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex items-center">
                    <p className="text-[#403F3F] mr-5">Sports</p>
                    <p className="text-[#9F9F9F] mr-2 font-medium">
                    <CiCalendar className="w-6 h-6" /></p>
                    <p className="text-[#9F9F9F]">{moment().format('ll')}</p>
                </div>
                <img className="mb-5 mt-7" src={'/assets/2.png'} alt="" />
                <h1 className="text-xl font-semibold text-[#403F3F] mb-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex items-center">
                    <p className="text-[#403F3F] mr-5">Sports</p>
                    <p className="text-[#9F9F9F] mr-2 font-medium">
                    <CiCalendar className="w-6 h-6" /></p>
                    <p className="text-[#9F9F9F]">{moment().format('ll')}</p>
                </div>
                <img className="mb-5 mt-7" src={'/assets/3.png'} alt="" />
                <h1 className="text-xl font-semibold text-[#403F3F] mb-5">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <div className="flex items-center">
                    <p className="text-[#403F3F] mr-5">Sports</p>
                    <p className="text-[#9F9F9F] mr-2 font-medium">
                    <CiCalendar className="w-6 h-6" /></p>
                    <p className="text-[#9F9F9F]">{moment().format('ll')}</p>
                </div>


            </div>
        </div>
    );
};

export default LeftSideNav;