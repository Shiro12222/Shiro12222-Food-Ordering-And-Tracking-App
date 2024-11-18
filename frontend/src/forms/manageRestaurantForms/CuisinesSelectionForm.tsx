import { FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { cuisineList } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckbox from "./CuisineCheckBox";

const CuisinesSelectionForm = () => {
    const { control } = useFormContext();
    return(
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Cuisines selection</h2>
                <FormDescription>
                    Click your cuisines below
                </FormDescription>
            </div>

            <br className="my-2">
            </br>

            <FormField
                control={control}
                name = "cuisines"
                render={({ field }) => (
                    <FormItem className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {cuisineList.map((cuisineItem) => (
                            <CuisineCheckbox cuisine = {cuisineItem} field = {field}/>
                        ))}
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </div>
    );
};

export default CuisinesSelectionForm;