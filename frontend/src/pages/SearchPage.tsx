import { useSearchRestaurants } from "@/api/RestaurantApi";
import CuisinesFilter from "@/components/CuisinesFilter";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultInfo from "@/components/SearchResultInfo";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  selectCuisines: string[];
}

const SearchPage = () => {
  const { district } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectCuisines: [],
  });

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { results, isLoading } = useSearchRestaurants(searchState, district);

  const setSelectedCuisines = (selectCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectCuisines,
      page: 1,
    }))
  }
  
  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
      selectCuisines: [],
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };



  if (isLoading){
    <span>Loading...</span>
  }

  if(!results?.data || !district){
    return <span>No results found</span>
  }
  
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
        <div id="cuisines-list">
          <CuisinesFilter 
            selectedCuisines={searchState.selectCuisines} 
            onChange={setSelectedCuisines}
            isExpanded={isExpanded}
            onExpandedClick={() => 
              setIsExpanded((prevIsExpanded) => !prevIsExpanded)
            }
          />
        </div>
        <div id="main-content" className="flex flex-col gap-5">
          <SearchBar 
            searchQuery={searchState.searchQuery}
            onSubmit={setSearchQuery} 
            placeHolder="Search by Cuisine or Restaurant Name"
            onReset={resetSearch}
          />
          <SearchResultInfo total={results.pagination.total} district={district}/>
          {results.data.map((restaurant)=>(
            <SearchResultCard restaurant={restaurant}/>
          ))}
          <PaginationSelector page={results.pagination.page} pages={results.pagination.pages} onPageChange={setPage}/>
        </div>
      </div>
    </div>
  );
};
export default SearchPage;