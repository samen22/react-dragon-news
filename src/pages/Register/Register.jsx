import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        
        const name = form.get('name');
        const photoUrl = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoUrl, email, password);

        // create user
        createUser(email, password)
        .then(result=>{
            console.log("You've registered successfully", result.user);
            e.target.reset();
            
            // navigate to login after register
            navigate('/login');

        })
        .then(error =>{
            console.log(error);
        })
    };

    return (
        <div className="mt-10">
            <Navbar></Navbar>
            <div className="bg-base-200 max-w-3xl mx-auto p-20 mt-14 mb-6">
                <h2 className="text-4xl text-[#403F3F] font-semibold text-center mb-12">Register your account</h2>
                <hr />
                <form onSubmit={handleRegister} className="card-body mt-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Your name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input h-16" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="link" name="photo" placeholder="Enter your URL" className="input h-16" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#403F3F] text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input h-16" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl text-[#403F3F] font-semibold">Password </span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input h-16" required />
                        <div className="flex gap-2 mt-5">
                            <input className="w-6 h-6" type="checkbox" name="checked" id="" />
                            <p className="text-[#706F6F]">Accept <span className="font-semibold">Term & Conditions</span></p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn h-16 bg-[#403F3F] capitalize text-white font-semibold text-xl">Register</button>
                    </div>
                    <p className="text-[#706F6F] font-semibold text-center mt-7">Already Have An Account ? <Link to={'/login'}><span className="text-orange-600">Please Login</span></Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;