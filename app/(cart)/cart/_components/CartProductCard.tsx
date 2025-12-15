"use client";
import { Button } from "@/components/ui/button";
import { Heart, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import hpLogo from "../../../../public/Home/hpLogo.png";


const CartProductCard = () => {

const [cartItems, setCartItems] = useState(0);

    const handleIncrease = () => {
        setCartItems(cartItems + 1);
    };

    const handleDecrease = () => {
        if (cartItems > 0) {
            setCartItems(cartItems - 1);
        }
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex justify-center sm:justify-start border border-primary/30 rounded-md">
                        <Image src={hpLogo} alt="cart" className="w-36 h-36 sm:w-40 sm:h-40 object-cover hover:scale-105 transition-transform duration-300 rounded-md" />
                    </div>

                    <div className="flex flex-col justify-between gap-3 text-center sm:text-left">
                        <div>
                            <h2 className="font-bold text-lg sm:text-xl">
                                Product name
                            </h2>
                            <div className="mt-1 space-y-1 text-sm sm:text-base">
                                <h3>
                                    Variant: <span className="font-bold">Appliances</span>
                                </h3>
                                <h3>
                                    Status: <span className="font-bold">new</span>
                                </h3>
                            </div>
                        </div>

                        <div className="flex justify-center sm:justify-start gap-3 pt-2">
                            <Button
                                variant="outline"
                                className="w-9 h-9 rounded-md border-muted-foreground/30"
                            >
                                <Heart />
                            </Button>

                            <Button
                               
                                variant="outline"
                                className="w-9 h-9 rounded-md border-muted-foreground/30"
                            >
                                <Trash />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row sm:flex-col justify-between sm:justify-between items-center sm:items-end gap-3 sm:gap-6">
                    <span className="text-lg sm:text-xl font-semibold">$5555</span>

                    <div className="flex items-center justify-center gap-3">
                        <Button
                            className="px-3 py-2 text-sm"
                            variant="outline"
                            onClick={handleDecrease}
                        >
                            -
                        </Button>

                        <span className="font-semibold text-sm w-6 text-center">
                            {cartItems}
                        </span>

                        <Button
                            className="px-3 py-2 text-sm"
                            variant="outline"
                            onClick={handleIncrease}
                        >
                            +
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartProductCard;
