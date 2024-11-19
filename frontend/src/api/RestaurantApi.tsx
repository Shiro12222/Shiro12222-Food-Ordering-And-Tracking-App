import { SearchState } from "@/pages/SearchPage";
import { Restaurant, RestaurantSearchResponse } from "@/types";
import { useQuery } from "react-query";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useSearchRestaurants = (searchState: SearchState, district?: string) => {
    const createSearchRequest = async(): Promise<RestaurantSearchResponse> => {
        const params = new URLSearchParams();
        params.set("searchQuery", searchState.searchQuery);
        params.set("page", searchState.page.toString());

        const response = await fetch(
            `${API_BASE_URL}/api/restaurant/search/${district}?${params.toString()}`
        );

        if(!response.ok){
            throw new Error("Failed to get restaurant!");
        }

        return response.json();
    };

    const { data: results, isLoading } = useQuery(
        ["searchRestaurants"],
        createSearchRequest,
        { enabled: !! district }
    );

    return { 
        results, 
        isLoading,
    };
};

export const useGetRestaurant = (restaurantId?: string) => {
    const getRestaurantByIdRequest = async (): Promise<Restaurant> => {
      const response = await fetch(
        `${API_BASE_URL}/api/restaurant/${restaurantId}`
      );
  
      if (!response.ok) {
        throw new Error("Failed to get restaurant");
      }
  
      return response.json();
    };
  
    const { data: restaurant, isLoading } = useQuery(
      "fetchRestaurant",
      getRestaurantByIdRequest,
      {
        enabled: !!restaurantId,
      }
    );
  
    return { restaurant, isLoading };
  };
  