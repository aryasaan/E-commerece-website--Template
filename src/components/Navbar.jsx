import { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import AuthModals from "./AuthModals";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showAuth, setShowAuth] = useState(null);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/services" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link to="/contact" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Contact us</Link>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="relative w-full max-w-xs sm:max-w-md">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-1 pr-8 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
          </div>
            
          <div className="hidden sm:flex space-x-2">
            <Button
              variant="outline"
              onClick={() => setShowAuth("login")}
            >
              Login
            </Button>
            <Button
              onClick={() => setShowAuth("signup")}
              className="bg-red-500 hover:bg-red-600"
            >
              Sign up
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-6">
                <Link to="/" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/about" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/services" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                <Link to="/contact" className="text-gray-900 hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium">Contact us</Link>
                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setShowAuth("login")}
                    className="w-full mb-2"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => setShowAuth("signup")}
                    className="w-full bg-red-500 hover:bg-red-600"
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <AuthModals show={showAuth} onClose={() => setShowAuth(null)} />
    </nav>
  );
};

export default Navbar;