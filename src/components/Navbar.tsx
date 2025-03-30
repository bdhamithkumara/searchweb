import { useState } from "react";
import { X, AlignJustify } from "lucide-react";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 p-5 lg:mx-10 bg-white rounded-b-[20px] lg:rounded-none border-1 md:border-none border-b border-gray-200">
      <div className="flex justify-between items-center ">
        {/* Logo */}
        <div className="flex  items-center">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/arcade/64/virtual-machine2.png"
            alt="logo"
            className="mr-5"
          />Logo
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 font-semibold text-lg">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-[20px] h-[20px] text-black" /> : <AlignJustify className="w-[20px] h-[20px] text-black" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t mt-2 p-4 ">
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex justify-between py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#features" className="flex justify-between py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#pricing" className="flex justify-between py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Pricing
            </a>
            <a href="#contact" className="flex justify-between py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
