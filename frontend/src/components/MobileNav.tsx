import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const {loginWithRedirect, isAuthenticated, user} = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-black"/>
            </SheetTrigger>
            <SheetContent className="space-y-5">
                <SheetTitle className="text-left">
                    {isAuthenticated? ( 
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-black-500 mx-4 text-end"/>
                            {user?.email}
                        </span> 
                    ) : (
                        <span>Welcome to EATeat.com</span>
                    )}
                </SheetTitle>
                <Separator/>
                <SheetDescription>
                    {isAuthenticated? ( 
                        <MobileNavLinks />
                    ) : (
                        <div className="flex flex-col space-y-2">
                            <Button 
                                onClick={()=> loginWithRedirect()}
                                className="flex-1 font-bold"
                            >
                                Login
                            </Button>
                            <Button 
                                onClick={() => loginWithRedirect({authorizationParams: {
                                    screen_hint: "signup"
                                }})}
                                className="flex-1 text-grey text-center text-xs bg-transparent hover:bg-transparent border-none"
                            >
                                Sign up
                            </Button>
                        </div>
                    )}
                </SheetDescription>
                <Separator/>
                <SheetDescription className="flex text-xs flex-col space-y-2">
                    <span>* Sign up or login to <b>continue</b>.</span>
                    <span>It only takes a minute.</span>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;