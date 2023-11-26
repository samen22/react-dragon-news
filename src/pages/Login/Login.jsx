import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
    return (
        <div className="mt-10">
            <Navbar></Navbar>
            <div className="bg-base-200 max-w-3xl mx-auto p-20 mt-14 mb-6">
                <h2 className="text-4xl text-[#403F3F] font-semibold text-center mb-12">Login your account</h2>
                <hr />
                <form className="card-body mt-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Email address</span>
                        </label>
                        <input  type="email" placeholder="Enter your email address" className="input h-16" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Password </span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input h-16" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn h-16 bg-[#403F3F] capitalize text-white font-semibold text-xl">Login</button>
                    </div>
                    <p className="text-[#706F6F] font-semibold text-center mt-7">Don’t Have An Account ? <Link to={'/register'}><span className="text-orange-600">Register</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;