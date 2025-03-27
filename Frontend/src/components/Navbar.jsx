import React, { useContext, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const {user} = useContext(AppContext);

  return (
    <nav className="flex justify-between items-center py-4">
      <div className="text-3xl font-bold">Imagify</div>
      
      <div className="flex items-center gap-8">
        {user ? (
          <div className="flex items-center gap-8">
            <span className="bg-blue-400 px-3 py-2 rounded-3xl text-white">Credits Left: 5</span>
            <UserCircle className="w-8 h-8 cursor-pointer" />
          </div>
        ) : (
          <div className="flex items-center gap-8">
            <span className="text-lg">Pricing</span>
            <Button variant="outline" className="text-lg border-white">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
