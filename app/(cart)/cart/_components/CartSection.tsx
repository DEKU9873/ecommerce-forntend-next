import { Button } from "@/components/ui/button";
import CartProductCard from "./CartProductCard";

const CartSection = () => {
  return (
    <div className="flex flex-col gap-4  border rounded-md bg-background ">
      <div className="h-[65vh] overflow-y-auto hide-scrollbar ">
        <div>
          <div className="p-4">
            <CartProductCard />
          </div>
          <hr />
        </div>
        <div>
          <div className="p-4">
            <CartProductCard />
          </div>
          <hr />
        </div>
        <div>
          <div className="p-4">
            <CartProductCard />
          </div>
          <hr />
        </div>
        <div>
          <div className="p-4">
            <CartProductCard />
          </div>
          <hr />
        </div>
      </div>

      <div className="p-4">
        <Button className="bg-destructive">Reset Cart</Button>
      </div>
    </div>
  );
};

export default CartSection;
