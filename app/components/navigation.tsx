import { useState, useEffect } from "react";
import { NavLink } from "@remix-run/react";

export default function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [currentSection, setCurrentSection] = useState("");

    useEffect(() => {
      const handleScroll = () => {
        setHasScrolled(window.scrollY > 0);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
      const checkScroll = () => {
        setHasScrolled(window.scrollY > 0);
      };

      checkScroll(); // Check scroll position on mount

      window.addEventListener("scroll", checkScroll);
      return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        const sections = ["home", "products", "our-store", "contact"];
        const current = sections.find((section) => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top >= 0 && rect.top <= window.innerHeight / 2;
          }
          return false;
        });
        setCurrentSection(current || "");
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (section: string) => currentSection === section;

    return (
      <>
        <div
          className={`fixed top-0 left-0 z-50 right-0 transition-colors duration-300 ${
            hasScrolled
              ? "border-b border-slate-200 shadow-sm bg-white/80 backdrop-blur-lg"
              : "bg-transparent"
          }`}
        >
          <div
            className={`transition-all flex items-center justify-between container mx-auto ${
              hasScrolled ? "p-6" : "p-6 md:p-12 md:pl-6"
            }`}
          >
            <Logo />
            <button
              className="lg:hidden block"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <nav className="hidden lg:flex md:gap-3 font-medium">
              <NavLink
                to="#home"
                className={
                  isActive("home")
                    ? "bg-pear-light px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider"
                    : `${
                        hasScrolled ? "bg-transparent" : "bg-white"
                      } px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="#products"
                className={
                  isActive("products")
                    ? "bg-pear-light px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider"
                    : `${
                        hasScrolled ? "bg-transparent" : "bg-white"
                      } px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="#our-store"
                className={
                  isActive("our-store")
                    ? "bg-pear-light px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider"
                    : `${
                        hasScrolled ? "bg-transparent" : "bg-white"
                      } px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider`
                }
              >
                Our Store
              </NavLink>
              <NavLink
                to="#contact"
                className={
                  isActive("contact")
                    ? "bg-pear-light px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider"
                    : `${
                        hasScrolled
                          ? "bg-slate-950 text-white"
                          : "bg-slate-950 text-white"
                      } px-4 py-2 rounded-full transition-colors duration-300 text-lg tracking-wider`
                }
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <MobileNavDrawer
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </>
    );
  }
  interface MobileNavDrawerProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (isOpen: boolean) => void;
  }

  function MobileNavDrawer({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  }: MobileNavDrawerProps) {
    return (
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-between p-6">
          <div className="font-medium text-2xl">Kims Market</div>
          <button className="block" onClick={() => setIsMobileMenuOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full gap-6 font-medium p-6">
          <NavLink
            to="#home"
            className="bg-slate-100 w-full text-center py-2 text-lg rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="#products"
            className="bg-slate-100 w-full text-center py-2 text-lg rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="#our-store"
            className="bg-slate-100 w-full text-center py-2 text-lg rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Store
          </NavLink>
          <NavLink
            to="#contact"
            className="bg-slate-950 w-full text-center py-2 text-lg rounded-full text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    );
  }
