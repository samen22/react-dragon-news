import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <h2 className="text-3xl font-poppins font-bold">This is Home.</h2>
        </div>
    );
};

export default Home;