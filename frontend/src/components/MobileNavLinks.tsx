import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return(
        <>
            <div className="flex justify-center items-center text-center text-white flex-col">
                <Link
                    to ="/user-profile"
                    className="w-full my-2 bg-black rounded-md py-2 font-bold"
                >
                    User Profile
                </Link>
                <Button
                    onClick={() => logout()}
                    className="w-full bg-black rounded-md py-2 font-bold"
                >
                    Log Out
                </Button>
            </div>
        </>
    )
}

export default MobileNavLinks;