import { Link } from "react-router-dom";

type Props = {
  total: number;
  district: string;
}

const SearchResultInfo = ({total, district}: Props) => {
  return(
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
        <span>
            {total} Restaurants found in {district}
            <Link
                to= "/" 
                className="text-sm font-semibold underline cursor-pointer text-blue-500 mx-2"
            >
              Change Location
            </Link>
        </span>
    </div>
  )
}

export default SearchResultInfo;