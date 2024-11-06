import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className="text-black"/>
        </SheetTrigger>
        <SheetContent className="space-y-5">
            <SheetTitle className="text-left">
                <span>Welcome to EATeat.com</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription>
                <div className="flex flex-col space-y-2">
                    <Button className="flex-1 font-bold">
                        Login
                    </Button>
                    <Link to = "user-profile" className="flex-1 text-grey text-center text-xs">
                        Sign up
                    </Link>
                </div>
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