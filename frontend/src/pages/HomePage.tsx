import GooglePlay from "../assets/images/GooglePlay.png";
import ApplePlay from "../assets/images/AppStore.png";
import EatAppTem from "../assets/images/EatAppTem.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const naviagate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        naviagate({
            pathname: `/search/${searchFormValues.searchQuery}`
        })
    }
  return(
    <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-xl shadow-md py-8 flex p-8 flex-col gap-5 text-center -mt-16 mx-4">
            <h1 className="text-5xl font-bold tracking-tight text-black">
                Craving something tasty?
            </h1>
            <span className="text-xl">Your next meal is just a click away</span>
            <SearchBar placeHolder="Search by District" onSubmit={handleSearchSubmit}/>
        </div>
        <div className="grid md:grid-cols-2 gap-5 flex-row ">
            <div className="flex flex-col items-center justify-center gap-4 text-center mx-4">
                <img src={EatAppTem} alt="EatApp Template" className="rounded-xl shadow-md"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center mx-4">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeaway even faster!
                </span>
                <span>
                    Download the EATeat App for faster ordering and personalised
                    recommendations
                </span>
                <br>
                </br>
                <div className="flex flex-row items-center justify-center gap-4 text-center mx-4">
                    <img src={GooglePlay} alt="Google Play" className="w-40 mb-2" />
                    <img src={ApplePlay} alt="Apple Store" className="w-40" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;