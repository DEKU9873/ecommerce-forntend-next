import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
const ChangePassword = () => {
  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold text-xl">Change Password</h3>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4 ">
        <div className="flex flex-col gap-3">
          <Label htmlFor="oldPassword">Old Password</Label>
          <Input placeholder="Old Password" />
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="newPassword">New Password</Label>
          <Input placeholder="New Password" />
        </div>

        <div className="flex flex-col gap-3">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input placeholder="Confirm Password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-start   gap-4">
        <Button className="text-md">Change Password</Button>
      </CardFooter>
    </Card>
  );
};

export default ChangePassword;
