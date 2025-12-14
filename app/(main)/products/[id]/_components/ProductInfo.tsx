import StarRating from "@/components/shared/StartRating"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const ProductInfo = () => {
    const reviews = new Array(6).fill(0);

    return (
        <div className="py-4">
            <Tabs defaultValue="description" className="w-[300px] md:w-[600px] lg:w-[800px] ">
                <TabsList className="w-full">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="additional information">Additional Information</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description"><p className="text-xs sm:text-sm text-primary/70 p-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fugiat eos ipsum minus nostrum qui deserunt non, voluptatum officia eaque accusantium voluptas tempore neque cupiditate?</p></TabsContent>
                <TabsContent value="additional information">
                    <div className='flex flex-col gap-2 justify-center p-4'>
                        <div className='flex justify-between items-center'>
                            <h3>Weight</h3>
                            <h3 className='text-primary/70'>
                                190 Kg</h3>
                        </div>
                        <hr />
                        <div className='flex justify-between items-center'>
                            <h3>Dimensions</h3>
                            <h3 className='text-primary/70'>
                                3 × 72 × 109 cm</h3>
                        </div>

                    </div>
                </TabsContent>
                <TabsContent value="reviews">
               <div className="h-[40vh] overflow-y-auto hide-scrollbar ">
                     {
                        reviews.map((_, index) => (
                            <div key={index} className="flex flex-col gap-3 p-4">
                                <div className="flex items-center gap-2">
                                    <StarRating rating={5} size={12} />
                                    <h3>Dun pham - <span className="text-xs sm:text-sm text-primary/70">July 21,2021</span></h3>
                                </div>
                                <p className="text-xs sm:text-sm text-primary/70 text-justify">
                                    I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.
                                </p>
                            </div>
                        ))
                    }
               </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default ProductInfo
