import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getNewsDetelsByID } from "@/lib/data";
export const generateMetadata = async ({params}) => {
  const {id}=await params;
  const news=await getNewsDetelsByID(id);
  return {
    title: news.title,
    description: news.description,
  }
}
const NewsDetels = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetelsByID(id);
    
    console.log(news);
    

    return (
        <div className="container mx-auto mt-8">

        <div className="bg-white border border-gray-200  rounded-md p-5">
            <Image src={news.image_url} alt={news.title}  width={1000} height={600} className="w-full rounded-md object-cover" />
            <div className="mt-6">
                <h1 className="text-3xl font-bold leading-snug text-gray-800"> {news.title}</h1>
                <p className="text-gray-500 text-sm leading-7 mt-5">{news.details}</p>
                <Link href={`/category/${news.category_id}`}>
                    <button className="btn mt-8 bg-pink-600 hover:bg-pink-700 text-white border-none rounded-sm">
                        <FaArrowLeft />All news in this category</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default NewsDetels;