import { useCreateMyRestaurant } from "@/api/MyRestaurantApi";
import RestaurantForm from "@/forms/manageRestaurantForms/RestaurantForm";

const ManageRestaurantPage = () => {
    const { createRestaurant, isLoading } = useCreateMyRestaurant();

    return (
        <RestaurantForm onSave={createRestaurant} isLoading={isLoading} />
    );
};

export default ManageRestaurantPage;