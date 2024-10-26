import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const AuthModals = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isLogin ? "Login" : "Sign Up"}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Please enter your credentials to login."
              : "Create an account to get started."}
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              required
            />
          </div>
          <div className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create an account" : "Already have an account?"}
            </Button>
            <Button type="submit" className="bg-red-500 hover:bg-red-600">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModals;
