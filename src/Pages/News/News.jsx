import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftSide/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSide/RightSideNav";

const News = () => {
    const {id} = useParams()
    return (
        
        <div>
           <Header></Header>
           <Navbar></Navbar>
           <div className="grid md:grid-cols-4">
            <div className="col-span-3">
                <h1>News details</h1>
                <p>{id}</p>

            </div>

            <div>
                <RightSideNav></RightSideNav>

            </div>
           </div>

        </div>
    );
};

export default News;