import { Button } from "@/components/ui/button";

const OrderSummary = () => {
  return (
    <div className="flex flex-col gap-5 justify-center  border rounded-md bg-background p-5">
      <h2 className="text-xl font-bold">Order Summary</h2>
      <div className="w-full flex flex-col gap-3 justify-center  ">
        <div className="flex justify-between items-center">
          <h3>SubTotal</h3>
          <h3 className="font-bold">$4444</h3>
        </div>
        <div className="flex justify-between items-center">
          <h3>Discount</h3>
          <h3 className="font-bold">$0</h3>
        </div>
      </div>
      <hr />
      <div className="w-full flex justify-between items-center">
        <h3 className="text-lg font-bold">Total</h3>
        <h3 className="text-lg font-bold">$4444</h3>
      </div>
      <div className="mt-2">
        <Button className="w-full text-md">Proceed to Checkout</Button>
      </div>
    </div>
  );
};

export default OrderSummary;
