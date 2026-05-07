import LeftSideBar from "@/Component/homepage/news/LeftSideBar";
import RightSideBar from "@/Component/homepage/news/RigthSideBar";
import Image from "next/image";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, } from "react-icons/fa";

async function gateCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
}
async function getNewsByCategoriesID(categoriesID) {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoriesID}`);
    const data = await res.json();
    return data.data;
}
const NewsCatagory = async ({ params }) => {
    const { id } = await params;
    const categories = await gateCategories();
    const newsByCategories = await getNewsByCategoriesID(id)
    return (
        <div className="container mx-auto pt-20">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3">
                    <h2 className="font-semibold text-xl">All Caterogy</h2>
                    <ul className="flex flex-col gap-2.5">
                        <LeftSideBar categories={categories} activeID={id} />
                    </ul>
                </div>
                <div className="col-span-6">
                    <h2 className="font-semibold text-xl"> Dragon News Home</h2>
                    <div>
                        {newsByCategories.length> 0? newsByCategories.map(n => {

                            return (
                                <div key={n._id} className="bg-white border border-gray-200 rounded-md overflow-hidden mb-6">
                                    <div className="flex items-center justify-between bg-gray-100 px-4 py-3">

                                        <div className="flex items-center gap-3">

                                            <Image src={n.author.img} alt={n.author.name} width={40} height={40} className="rounded-full object-cover"/>

                                            <div>
                                                <h2 className="font-semibold text-sm text-gray-800">{n.author.name}</h2>
                                                <p className="text-xs text-gray-500">{n.author.published_date}</p>
                                            </div>

                                        </div>

                                        <div className="flex items-center gap-4 text-gray-500 text-lg">
                                            <FaRegBookmark className="cursor-pointer" />
                                            <FaShareAlt className="cursor-pointer" />
                                        </div>
                                    </div>

                                    <div className="p-5 pb-3">
                                        <h2 className="text-2xl font-bold leading-snug text-gray-900">{n.title} </h2>
                                    </div>

                                    <div className="px-5">
                                        <Image src={n.image_url} alt={n.title}  width={800} height={500} className="w-full rounded-md object-cover"/>
                                    </div>

                                    <div className="p-5">
                                        <p className="text-sm leading-7 text-gray-500"> {n.details.slice(0, 250)}... </p>
                                        <button className="text-orange-500 font-semibold mt-2">
                                            Read More
                                        </button>
                                    </div>


                                    <div className="px-5 py-4 border-t flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 text-orange-400">
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar className="text-gray-300" />
                                            </div>
                                            <span className="font-medium text-gray-700">
                                                {n.rating.number}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-500">
                                            <FaEye /><span>{n.total_view}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) :<h2>no news found</h2>}
                    </div>
                </div>
                <div className="col-span-3">
                    <h2 className="font-semibold text-xl"> Social media </h2>

                    <RightSideBar />
                </div>

            </div>
        </div>
    );
};

export default NewsCatagory;