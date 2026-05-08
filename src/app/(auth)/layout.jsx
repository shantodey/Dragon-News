import Navber from "@/Component/shared/Navber";


const AuthLayout = ({children}) => {
    return (
        <>
            <Navber></Navber>
            {children}
        </>
    );
};

export default AuthLayout;