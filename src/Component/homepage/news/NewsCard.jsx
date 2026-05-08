import Image from "next/image";
import Link from "next/link";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, } from "react-icons/fa";

const NewsCard = ({ newsByCategories }) => {
    return (
        <>
            {newsByCategories.length > 0 ? newsByCategories.map(n => {
                return (
                    <div key={n._id} className="bg-white border border-gray-200 rounded-md overflow-hidden mb-6">
                        <div className="flex items-center justify-between bg-gray-100 px-4 py-3">

                            <div className="flex items-center gap-3">
                                <Image src={n.author.img} alt={n.author.name|| "Author avatar"} width={40} height={40} className="rounded-full object-cover" />
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
                            <Image src={n.image_url} alt={n.title|| "Author avatar"} width={800} height={500} className="w-full rounded-md object-cover" />
                        </div>

                        <div className="p-5">
                            <p className="text-sm leading-7 text-gray-500"> {n.details.slice(0, 250)}... </p>
                            <Link href={`/news/${n._id}`}>
                                <button className="btn text-orange-500 font-semibold mt-2">
                                    Read More
                                </button>
                            </Link>
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
            }) : <h2>no news found</h2>}
        </>
    );
};

export default NewsCard;