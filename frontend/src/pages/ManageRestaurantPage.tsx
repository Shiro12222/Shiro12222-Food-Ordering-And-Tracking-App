import { useCreateMyRestaurant, useGetMyRestaurant } from "@/api/MyRestaurantApi";
import RestaurantForm from "@/forms/manageRestaurantForms/RestaurantForm";

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();

    return (
        <RestaurantForm restaurant = {restaurant} onSave={createRestaurant} isLoading={isLoading} />
    );
};

export default ManageRestaurantPage;