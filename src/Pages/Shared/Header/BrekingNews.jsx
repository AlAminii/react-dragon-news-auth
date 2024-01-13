
import Marquee from "react-fast-marquee";
const BrekingNews = () => {
    return (
        <div className="flex">
       <button className="btn btn-secondary">Latest</button>
       <Marquee className="mr-10" pauseOnHover speed={100}>
  I can be a React component, multiple React components, or just some text.....
</Marquee>
       <Marquee className="mr-10" pauseOnHover speed={100}>
  I can be a React component, multiple React components, or just some text.....
</Marquee>
       <Marquee pauseOnHover speed={100}>
  I can be a React component, multiple React components, or just some text.....
</Marquee>
       <Marquee gradient pauseOnHover speed={100}>
  I can be a React component, multiple React components, or just some text.....
</Marquee>
        </div>
    );
};

export default BrekingNews;