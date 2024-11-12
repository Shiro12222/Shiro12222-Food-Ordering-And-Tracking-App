import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
        {isAuthenticated? (<UsernameMenu/>) : (
            <div>
            <Button 
                variant= "ghost" 
                className="font-bold hover:text-black hover:bg-white"
                onClick={()=> loginWithRedirect()}
            >
                Log In
            </Button>
            <Button 
                variant= "ghost" 
                className="font-bold hover:text-black hover:bg-white"
                onClick={() => loginWithRedirect({authorizationParams: {
                    screen_hint: "signup"
                }})}
            >
                Sign Up
            </Button>
        </div>
        )}
    </span>
  );
};

export default MainNav;