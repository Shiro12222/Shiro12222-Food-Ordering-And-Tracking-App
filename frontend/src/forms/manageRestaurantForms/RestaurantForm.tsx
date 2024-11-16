import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailSelectionForm from "./DetailsSelectionForm";
import { Separator } from "@/components/ui/separator";
import CuisinesSelectionForm from "./CuisinesSelectionForm";
import ButtonLoading from "@/components/ButtonLoading";
import { Button } from "@/components/ui/button";
import MenuSelectionForm from "./MenuSelectionForm";
import ImageSection from "./ImageSection";

const formSchema = z.object({
    restaurantName: z.string({required_error: "restaurant name is required!"}),
    city: z.string({required_error: "city is required!"}),
    country: z.string({required_error: "country name is required!"}),
    deliveryPrice: z.coerce.number({required_error: "delivery price is required!", invalid_type_error: "must be a valid number"}),
    estimatedDeliveryTime: z.coerce.number({required_error: "estimated delivery time is required!", invalid_type_error: "must be a valid number"}),
    cuisines: z.array(z.string().nonempty({message: "select at least one item"})),
    menuItems: z.array(z.object({
        name: z.string().min(3, "name is required"),
        price: z.coerce.number().min(1, "price is required"),
    })),
    imageFile: z.instanceof(File, { message: "message is required"})
})

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}

const RestaurantForm = ({onSave, isLoading}: Props) => {
    const form = useForm<restaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          cuisines: [],
          menuItems: [{ name: "", price: 0 }],
        },
    });

    const onSubmit = (formDataJson: restaurantFormData) => {
        const formData = new FormData();

        formData.append("restaurantName", formDataJson.restaurantName);
        formData.append("city", formDataJson.city);
        formData.append("country", formDataJson.country);

        formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
        formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());
        formDataJson.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine);
        });
        formDataJson.menuItems.forEach((menuItems, index) => {
            formData.append(`menuItems[${index}][name]`, menuItems.name);
            formData.append(
                `menuItems[${index}][price]`, 
                (menuItems.price * 100).toString()
            );
        });
        formData.append(`imageFile`, formDataJson.imageFile);

        onSave(formData);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
            className="spce-y-4 bg-gray-50 rounded-md md:p-10 mx-4">
                <DetailSelectionForm/>
                <Separator/>
                <br>
                </br>
                <Separator/>
                <br>
                </br>
                <CuisinesSelectionForm/>
                <br>
                </br>
                <Separator/>
                <br>
                </br>
                <MenuSelectionForm/>
                <br>
                </br>
                <Separator/>
                <br>
                </br>
                <ImageSection/>
                {isLoading ? <ButtonLoading /> : <Button type="submit">Submit</Button>}
            </form>
        </Form>
    );
};

export default RestaurantForm;