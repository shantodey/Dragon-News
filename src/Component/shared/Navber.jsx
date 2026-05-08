'use client'
import Image from "next/image";
import Link from "next/link";
import userAvater from "@/assets/user.png"
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navber = () => {
    const { data: session,isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user);

    return (
        <div className="container mx-auto flex justify-between gap-4 mt-6 items-center">
            <div></div>
            <div>
                <ul className="flex gap-2">
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/about-us'}>About</NavLink></li>
                    <li><NavLink href={'/career'}>Career</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2 justify-center items-center">
                { isPending ?(
                    <span className="loading loading-dots loading-md"></span>
                ):
                user ?
                    (<>
                        <h2>Hello {user?.name || 'Guest'}</h2>
                        <Image
                            src={user?.image || userAvater}
                            alt="user avater"
                            width={40}
                            height={40}></Image>
                        
                        <button onClick={async()=>await authClient.signOut()} className="btn btn-primary bg-[#403f3f] text-white px-10">
                            logout
                        </button>
                    </>

                    )
                    :
                    (
                        <button className="btn btn-primary bg-[#403f3f] text-white px-10">
                            <Link href={'/login'}>Login</Link>
                        </button>
                    )}
            </div>
        </div>
    );
};

export default Navber;