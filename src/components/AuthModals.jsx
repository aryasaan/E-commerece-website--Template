import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const AuthModals = ({ show, onClose }) => {
  return (
    <Dialog open={show !== null} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {show === "login" ? "Welcome back" : "Create an account"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          {show === "signup" && (
            <div className="grid gap-2">
              <Label htmlFor="confirm">Confirm Password</Label>
              <Input
                id="confirm"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
          )}
          <Button className="w-full bg-red-500 hover:bg-red-600">
            {show === "login" ? "Login" : "Sign Up"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModals;