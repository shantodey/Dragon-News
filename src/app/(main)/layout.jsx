import BrakingNews from "@/Component/shared/BrakingNews";
import Header from "@/Component/shared/Header";
import Navber from "@/Component/shared/Navber";


const Mainlayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navber></Navber>
            {children}
        </>
    );
};

export default Mainlayout;