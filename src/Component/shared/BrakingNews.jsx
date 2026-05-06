import { id } from "date-fns/locale";
import Marquee from "react-fast-marquee";
const newsTitles = [
    { id: 1, title: "Global climate summit reaches historic carbon reduction deal" },
    { id: 2, title: "AI regulation framework agreed by G7 nations" },
    { id: 3, title: "Breakthrough malaria vaccine approved for worldwide use" },
    { id: 4, title: "International space station marks 30 years of continuous human habitation" },
    { id: 5, title: "Major earthquake triggers tsunami warning across Pacific islands" },
    { id: 6, title: "World population projected to peak before 2080, UN report says" },
    { id: 7, title: "Record heatwaves prompt emergency measures across three continents" },
    { id: 8, title: "Cyclone causes widespread flooding in Southeast Asia, relief efforts underway" }
];
const BrakingNews = () => {
    return (
        <div className="container mx-auto bg-[#f3f3f3]  ">
            <div className="flex justify-between gap-4 items-center py-4 px-2">
                <button className="btn bg-[#d72050] text-white capitalize">latest</button>
                <Marquee pauseOnHover={true}>
                    {newsTitles.map(n => {
                        return <span key={n.id}>{n.title}</span>
                    })}
                </Marquee>
            </div>
        </div>
    );
};

export default BrakingNews;