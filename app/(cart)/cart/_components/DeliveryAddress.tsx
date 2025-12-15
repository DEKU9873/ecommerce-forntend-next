import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const DeliveryAddress = () => {
  return (
    <div className="flex flex-col gap-5 justify-center border rounded-md bg-background p-5">
      <h2 className="text-xl font-bold">Delivery Address</h2>

      <div className="w-full h-[23vh] overflow-y-auto hide-scrollbar">
        <RadioGroup className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="address1" id="address1" />
            <Label htmlFor="address1">
              <div className="flex flex-col gap-1">
                <h4 className="text-md font-bold">بغداد</h4>
                <p className="text-md text-primary/70">شارع حيفا</p>
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="address2" id="address2" />
            <Label htmlFor="address2">
              <div className="flex flex-col gap-1">
                <h4 className="text-md font-bold">بغداد</h4>
                <p className="text-md text-primary/70">السيدية</p>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default DeliveryAddress;
