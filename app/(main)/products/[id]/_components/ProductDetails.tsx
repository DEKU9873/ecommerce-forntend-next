"use client"

import StarRating from '@/components/shared/StartRating'

import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import { CircleQuestionMark, GitCompare, Heart, Share2, ShoppingBag, Truck, Undo2 } from 'lucide-react'
import { useState } from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



const ProductDetails = () => {

    const [isAddToWishlist, setIsAddToWishlist] = useState(false);
    const [isAddToCart, setIsAddToCart] = useState(false);



    const handleAddToWishlist = () => {
        setIsAddToWishlist(true);
    };


    return (
        <div className='flex flex-col gap-2 '>
            <h2 className='text-2xl font-semibold'>product name</h2>
            <p className='text-xs sm:text-sm text-primary/70 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, iste.</p>
            <div className='flex items-center gap-1'>
                <StarRating rating={5} size={14} />
                <span className='text-sm  text-primary/70 font-bold'>(120)</span>
            </div>
            <hr />
            <div className="flex flex-row justify-start items-center gap-1 py-4">
                <span className="text-xl font-semibold">$555</span>
                <span className="text-primary/40 line-through text-md ">$666</span>
            </div>
            <Badge className='bg-green-700 px-3 py-1 text-sm rounded-md mb-2'>In Stock</Badge>
            <hr />

            <div className='flex items-center gap-2 w-full py-4 '>

                {
                    !isAddToCart ? (
                        <Button
                            onClick={() => setIsAddToCart(true)}

                            className='flex-1 text-md' >
                            <ShoppingBag className="mr-2" />
                            Add to Cart
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2 flex-1">
                            <Button
                                className="px-3 py-2 text-sm"
                                variant="outline"
                            >
                                -
                            </Button>

                            <span className="font-semibold text-sm w-6 text-center">
                                3
                            </span>

                            <Button
                                className="px-3 py-2 text-sm"
                                variant="outline"
                            >
                                +
                            </Button>
                        </div>

                    )
                }

                {
                    !isAddToWishlist ? (
                        <div className='border rounded-md p-2 flex justify-center items-center h-9 w-9 cursor-pointer hover:bg-accent transition'>
                            <Heart
                                size={20}
                                className={"text-primary/50 transition-colors duration-200"}

                                onClick={handleAddToWishlist}
                            />
                        </div>

                    ) : (
                        <div className='border rounded-md p-2 flex justify-center items-center h-9 w-9 cursor-pointer hover:bg-accent transition'>
                            <Heart
                                size={20}
                                className={"fill-red-500 text-red-500 transition-colors duration-200"}


                                onClick={() => setIsAddToWishlist(false)}
                            />
                        </div>
                    )
                }

                {/* <div onClick={handleLike}
                    className='border rounded-md p-2 flex justify-center items-center h-9 w-9 cursor-pointer hover:bg-accent transition'>
                    <Heart
                        size={20}
                        className={`${liked ? "fill-red-500 text-red-500" : "text-primary/50"
                            } transition-colors duration-200`}
                    />
                </div> */}
            </div>



            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='font-bold text-md'>product name: Characteristics</AccordionTrigger>
                    <AccordionContent>
                        <div className='flex flex-col gap-2 justify-center'>
                            <div className='flex justify-between items-center'>
                                <h3>Brand:</h3>
                                <h3 className='font-bold'>
                                    brand</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h3>Collection:</h3>
                                <h3 className='font-bold'>
                                    2025</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h3>Type:</h3>
                                <h3 className='font-bold'>
                                    refrigerators</h3>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h3>Stock:</h3>
                                <h3 className='font-bold'>
                                    Available</h3>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <hr />

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 px-2 py-3'>
                <div className='flex justify-start items-center gap-2 hover:text-red-500'>
                    <GitCompare size={20} />

                    <h3 className=''>Compare color</h3>

                </div>
                <div className='flex justify-start items-center gap-2 hover:text-red-500'>
                    <CircleQuestionMark size={20} />

                    <h3 className=''>Ask a question</h3>

                </div>
                <div className='flex justify-start items-center gap-2 hover:text-red-500'>
                    <Truck size={20} />

                    <h3 className=''>Delivery & Return</h3>
                </div>
                <div className='flex justify-start items-center gap-2 hover:text-red-500'>
                    <Share2 size={20} />

                    <h3 className=''>Share</h3>
                </div>
            </div>
            <hr />
            <div className='border mt-4 ' >
                <div className="flex  justify-start items-center  p-4 gap-4">
                    <div className="flex justify-center items-center" >
                        <Truck size={35} className='text-orange-400' />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-1 ">
                        <h2 className="font-bold text-lg text-center md:text-start">Free Delivery</h2>
                        <p className='text-xs sm:text-sm text-primary/70'>Enter your Postal code for Delivey Availability.</p>
                    </div>
                </div>
                <hr />
                <div className="flex  justify-start items-center   p-4  gap-4">
                    <div className="flex justify-center items-center" >
                        <Undo2 size={35} className='text-orange-400' />
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-start gap-1 ">
                        <h2 className="font-bold text-lg text-center md:text-start">Free Delivery</h2>
                        <p className='text-xs lg:text-sm text-primary/70'>Enter your Postal code for Delivey Availability.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
