import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import RestaurantForm from "@/forms/manageRestaurantForms/RestaurantForm";

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
    const { restaurant } = useGetMyRestaurant();
    const { updateRestaurant , isLoading: isUpdateLoading } = useUpdateMyRestaurant();

    const isEditing = !!restaurant;
    
    return (
        <RestaurantForm restaurant = {restaurant} onSave={isEditing ? updateRestaurant : createRestaurant} isLoading={isCreateLoading || isUpdateLoading} />
    );
};

export default ManageRestaurantPage;