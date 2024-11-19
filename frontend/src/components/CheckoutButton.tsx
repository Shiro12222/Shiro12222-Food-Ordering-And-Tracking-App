import { useAuth0 } from "@auth0/auth0-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./ButtonLoading";
import { toast } from "sonner";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to check out
      </Button>
    );
  }

  const handleCheckoutClick = () => {
    toast.success("Checkout Successfully!!!"); 
  };

  if(isAuthenticated){
    return (
        <Link to="/" onClick={handleCheckoutClick} className="flex-1 bg-teal-950 rounded-md py-2 font-bold text-white text-center">
            Checkout Right Now
        </Link>
    )
  }

  if (isAuthLoading) {
    return <LoadingButton />;
  }

};

export default CheckoutButton;