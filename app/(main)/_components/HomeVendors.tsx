"use client";
import Header from "@/components/shared/toolbar/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HeroImage from "../../../public/Hero/hero.png";

const HomeVendors = () => {
  const router = useRouter();
  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <Header title="Vendors" />
        <div>
          <Button
            onClick={() => router.push("/products")}
            className="rounded-2xl px-6 bg-background border border-primary text-primary hover:text-background"
          >
            See All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-10">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="flex flex-col justify-center items-center gap-2">
              <Image
                src={HeroImage}
                alt="hero"
                width={120}
                height={120}
                className="w-25 h-25 rounded-full border p-2 hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
              />
              <h1 className="text-md font-semibold text-center">Vendors name</h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeVendors;
