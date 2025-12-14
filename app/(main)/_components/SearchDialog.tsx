"use client"
import { Search, SearchIcon, ShoppingBag } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import hpLogo from "../../../public/Home/hpLogo.png"




const SearchDialog = () => {
  const router = useRouter();

    const [open, setOpen] = useState(false);

    const [searchWord, setSearchWord] = useState("");

    const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchWord(e.target.value);
    };

    const handleSelectedSearchWord = (word: string) => {
        setSearchWord(word);

    };

    const handleProductClick = () => {
        router.push(`/products/id`);
        setSearchWord("");
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setOpen(true)}>
                <Search size={22} className="text-muted-foreground hover:text-primary" />
            </DialogTrigger>

            <DialogContent className=":min-w-[300px] md:min-w-[700px] lg:min-w-[1050px] h-[70vh] lg:min-h-[90vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>
                        <div className="font-semibold py-1">Product Searchbar</div>
                        <InputGroup className="[&:has([data-slot=input-group-control]:focus-visible)]:ring-0 my-2">
                            <InputGroupInput
                                value={searchWord}
                                onChange={handleSearchWordChange}
                                placeholder="Search your product here..."
                            />
                            <InputGroupAddon

                                align="inline-end"
                                className="hover:text-primary cursor-pointer"
                            >
                                <SearchIcon />
                            </InputGroupAddon>
                        </InputGroup>
                    </DialogTitle>
                </DialogHeader>

                {searchWord ? (
                    <div className="border border-primary/30 rounded-md overflow-y-auto">
                        <div
                            className="hover:cursor-pointer"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-center h-full p-2">
                                <div className="flex flex-col justify-center items-center md:items-start md:flex-row gap-4" onClick={handleProductClick}>
                                    <div className="border border-primary/30 rounded-md">
                                        <Image
                                            src={hpLogo}

                                            alt="hero image"
                                            className="w-20 h-20"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center items-center md:items-start gap-2">
                                        <h2 className="font-bold text-lg text-center md:text-start">
                                            product 1
                                        </h2>
                                        <Button className="px-10 py-5">
                                            <div className="flex gap-2 justify-center items-center font-bold text-md">
                                                <ShoppingBag />
                                                <span>Add to cart</span>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-lg">
                                    <span className="text-lg font-semibold">
                                        $5000
                                    </span>
                                    <span className="text-primary/40 line-through">
                                        $6000
                                    </span>
                                </div>
                            </div>
                            <hr className="border-primary/30" />
                        </div>

                    </div>
                ) : (
                    <div className="border border-primary/30 rounded-md overflow-y-auto">
                        <div className="bg-secondary text-primary font-bold text-md flex items-center gap-2 p-4 rounded-tl-md">
                            <SearchIcon size={23} />
                            <h3>Search and explore your products from Ecommerce</h3>
                        </div>


                        <div
                            onClick={() => handleSelectedSearchWord("product 1")}

                            className="text-primary text-md flex items-center gap-2 py-1 px-4 hover:bg-primary/10 cursor-pointer my-2"
                        >
                            <SearchIcon size={20} />
                            <p>product 1</p>
                        </div>

                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SearchDialog;
