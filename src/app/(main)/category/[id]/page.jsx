import LeftSideBar from "@/Component/homepage/news/LeftSideBar";
import NewsCard from "@/Component/homepage/news/NewsCard";
import RightSideBar from "@/Component/homepage/news/RigthSideBar";
import { gateCategories, getNewsByCategoriesID } from "@/lib/data";




const NewsCatagory = async ({ params }) => {
    const { id } = await params;
    const categories = await gateCategories();
    const newsByCategories = await getNewsByCategoriesID(id)
    return (
        <div className="container mx-auto pt-20">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-3 sticky top-5 self-start">
                    <h2 className="font-semibold text-xl">All Caterogy</h2>
                    <ul className="flex flex-col gap-2.5">
                        <LeftSideBar categories={categories} activeID={id} />
                    </ul>
                </div>
                <div className="col-span-6">
                    <h2 className="font-semibold text-xl"> Dragon News Home</h2>
                    <div>
                        <NewsCard newsByCategories={newsByCategories}/>
                        
                    </div>
                </div>
                <div className="col-span-3 sticky top-5 self-start">
                    <h2 className="font-semibold text-xl"> Social media </h2>

                    <RightSideBar />
                </div>

            </div>
        </div>
    );
};

export default NewsCatagory;