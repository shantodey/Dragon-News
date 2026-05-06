import Image from "next/image";
import img from "@/assets/logo.png"
import { format } from "date-fns";
const Header = () => {
    return (
        <div className="container mx-auto py-8 space-y-3 text-center">
            <Image src={img} width={300} height={200} alt="Logo" className="mx-auto"></Image>
            <p>Journalism Without Fear or Favour</p>
            <p>{format(new Date(),"EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;