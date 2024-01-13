import { useLoaderData } from "react-router-dom";

import BrekingNews from "../Shared/Header/BrekingNews";
import Header from "../Shared/Header/Header";
import LeftsideNav from "../Shared/LeftSide/LeftsideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSide/RightSideNav";
import NewsCard from "./NewsCard";


const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BrekingNews></BrekingNews>
            <Navbar></Navbar>
            
            <div className="grid gap-6 grid-cols-1 md:grid-cols-4 ">
                <div className="border">
                <LeftsideNav></LeftsideNav>
                </div>

                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>

                <div className="border">
                  
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;