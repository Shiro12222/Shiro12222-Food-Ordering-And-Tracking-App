import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
    const { user, logout }=useAuth0();
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="flex px-3 font-bold hover:text-black-500 gap-2">
            <CircleUserRound className="text-black-500 mx-4 text-end"/>
            {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="hidden md:block absolute right-30 ">
            <DropdownMenuItem>
                <Link
                    to ="/user-profile"
                    className="w-full py-2 text-center bg-black rounded-md text-white font-bold"
                >
                    User Profile
                </Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button 
                    onClick={() => logout()}
                    className="flex flex-1 font-bold bg-black">
                    Log Out
                </Button>
            </DropdownMenuItem>
            {/*
            <Separator />
            <DropdownMenuItem>
                <a href="/user-profile" className="text-white bg-black text-center w-full py-2">
                    User Profile
                </a>
            </DropdownMenuItem> 
            */}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu;