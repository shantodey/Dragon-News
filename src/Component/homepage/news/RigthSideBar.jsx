
import Image from "next/image";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";
import swimmingImg from "@/assets/swimming.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";

const RightSideBar = () => {
    return (
        <div className="space-y-8">
            <div>

                <h2 className="text-xl font-semibold mb-4">Login With</h2>

                <div className="flex flex-col gap-3">
                    <button className="btn bg-white border border-blue-300 text-blue-400 hover:bg-blue-50 shadow-none">
                        <FaGoogle /> Login with Google
                    </button>
                    <button className="btn bg-white border border-gray-300 text-black hover:bg-gray-100 shadow-none">
                        <FaGithub />Login with Github
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
                <div className="border rounded-md overflow-hidden">
                    <div className="flex items-center gap-4 px-4 py-4 border-b">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-blue-600"><FaFacebookF /></div>
                        <p className="text-gray-600 font-medium">  Facebook</p>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-4 border-b">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sky-500"><FaTwitter /></div>
                        <p className="text-gray-600 font-medium">Twitter</p>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-4">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-pink-500"><FiInstagram /></div>
                        <p className="text-gray-600 font-medium">Instagram</p>
                    </div>

                </div>
            </div>


            <div className="bg-[#f3f3f3] p-4 rounded-md">

                <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>
                <div className="space-y-5">
                    <div className="p-3 rounded-md">
                        <Image src={swimmingImg} alt="Swimming" mclassName="w-full rounded-md" />

                    </div>

                    <div className="p-3 rounded-md">
                        <Image src={classImg} alt="Class" className="w-full rounded-md" />
                    </div>

                    <div className="p-3 rounded-md">
                        <Image src={playgroundImg} alt="Play Ground" className="w-full rounded-md" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export default RightSideBar;