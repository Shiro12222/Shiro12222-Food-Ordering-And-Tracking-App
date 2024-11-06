import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <div>
        <Button variant= "ghost" className="font-bold hover:text-black hover:bg-white">
            Log In
        </Button>
        <Button variant= "ghost" className="font-bold hover:text-black hover:bg-white">
            Sign Up
        </Button>
    </div>
  );
};

export default MainNav;