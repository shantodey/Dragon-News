import Header from "@/Component/shared/Header";
import Navber from "@/Component/shared/Navber";


const Mainlayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <Navber></Navber>
            {children}
        </>
    );
};

export default Mainlayout;