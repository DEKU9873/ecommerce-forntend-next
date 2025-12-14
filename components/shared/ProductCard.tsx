"use client"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import hpLogo from "../../public/Home/hpLogo.png"
import { useState } from "react";
import StarRating from "./StartRating";


const ProductCard = () => {

    const [isAddToWishlist, setIsAddToWishlist] = useState(false);
    const [isAddToCart, setIsAddToCart] = useState(false);


    const handleAddToWishlist = () => {
        setIsAddToWishlist(true);
    };

    return (
        <Card className="pt-0 w-full max-w-[330px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[370px] mx-auto rounded-sm ">
            <CardHeader className="relative bg-primary/5 rounded-t-sm overflow-hidden">
                <Link href={`/products/id`}>
                    <Image
                        src={hpLogo}
                        alt="hero image"
                        className="w-full h-40 sm:h-48 object-contain hover:scale-105 transition-transform duration-300"
                    />
                </Link>

                {
                    !isAddToWishlist ? (
                        <Heart
                            size={20}
                            className="absolute top-3 right-3 cursor-pointer "
                            onClick={handleAddToWishlist}
                        />
                    ) : (
                        <Heart
                            size={20}
                            className="absolute top-3 right-3 cursor-pointer fill-red-500 text-red-500"
                            onClick={() => setIsAddToWishlist(false)}
                        />
                    )
                }
            </CardHeader>

            <CardContent className="space-y-1.5 px-3 py-2 text-center sm:text-left">
                <p className="text-xs text-primary/40 truncate">
                    asfd
                </p>
                <h3 className="font-semibold text-sm sm:text-base leading-snug">
                    afsdafds
                </h3>

                <div className="flex justify-center sm:justify-start">
                    <StarRating rating={5} />
                </div>

                <div className="text-xs sm:text-sm text-primary/70">
                    In Stock: 222
                </div>

                <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-1">
                    <span className="text-base font-semibold">$222</span>
                    <span className="text-primary/40 line-through text-xs sm:text-sm">
                        $333
                    </span>
                </div>
            </CardContent>

            <CardFooter className="flex justify-center sm:justify-start px-3">

                {
                    !isAddToCart ? (
                        <Button
                        onClick={() => setIsAddToCart(true)}
                            className="px-3 py-3 w-full sm:w-auto text-xs sm:text-sm"

                        >
                            <div className="flex gap-1.5 justify-center items-center font-semibold">
                                <ShoppingBag size={16} />
                                <span>Add to cart</span>
                            </div>
                        </Button>
                    ) : (
                        <div className="flex items-center gap-2 w-full">
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
            </CardFooter>
        </Card>
    );
};

export default ProductCard;


