import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailSelectionForm = () => {
    const { control } = useFormContext();
    return(
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Details of food selection</h2>
                <FormDescription>
                    Fill in your SPECIFIC detail of your restaurant here
                </FormDescription>
            </div>

            <br className="my-2">
            </br>

            <FormField
                control={control}
                name = "restaurantName"
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>
                            Restaurant Name
                        </FormLabel>
                        <FormControl>
                            <Input placeholder = "Input your restaurant name here" {...field} className="bg-white"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name = "city"
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>
                            City
                        </FormLabel>
                        <FormControl>
                            <Input placeholder = "Input your city here" {...field} className="bg-white"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={control}
                name = "country"
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel>
                            Country
                        </FormLabel>
                        <FormControl>
                            <Input placeholder = "Input your country here" {...field} className="bg-white"/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <div className="flex flex-col md:flex-row gap-4 my-2">
                <FormField
                    control={control}
                    name = "deliveryPrice"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>
                                Delivery Price ($)
                            </FormLabel>
                            <FormControl>
                                <Input placeholder = "20" {...field} className="bg-white"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={control}
                    name = "estimatedDeliveryTime"
                    render={({ field }) => (
                        <FormItem className="flex-1">
                            <FormLabel>
                                Estimated Delivery Time (mins)
                            </FormLabel>
                            <FormControl>
                                <Input placeholder = "15" {...field} className="bg-white"/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

export default DetailSelectionForm;