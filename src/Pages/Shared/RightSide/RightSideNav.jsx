
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
const RightSideNav = () => {
    return (
        <div>
           
           <div className="p-4 space-y-3 mb-6">
            <h1 className="text-3xl">Login With</h1>
            <button className=" btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                
                Google</button>
            <button className=" btn btn-outline w-full">
               <FaGithub></FaGithub>
                
                Github</button>
           </div>
           <div className="p-4  mb-6">
            <h1 className="text-3xl">Find Us On</h1>
           <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
            <FaFacebook></FaFacebook>
            Facebook
           </a>
           <a className="p-4 flex text-lg items-center border-x " href="">
            <FaInstagram></FaInstagram>
            Instagram
           </a>
           <a className="p-4 flex text-lg items-center border rounded-b-lg" href="">
            <FaTwitter></FaTwitter>
            Twiter
           </a>
           </div>

           <div className="p-4 space-y-3 mb-6">
            <h1 className="text-3xl">Q-Zone</h1>
           <img src={qZone1} alt="" />
           
           <img src={qZone2} alt="" />
           
           <img src={qZone3} alt="" />
           
           </div>

        </div>
    );
};

export default RightSideNav;