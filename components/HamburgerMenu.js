import { FaHamburger } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";

const HamburgerMenu = ({ headerNavLinks }) => {
  const hamburger = useRef(null);

  const onLinkPress = () => {
    console.log(hamburger);
    hamburger.current.click();
  };
  return (
    <>
      {/* Hamburger icon */}
      <input
        type="checkbox"
        ref={hamburger}
        className="hidden peer"
        id="nav-check"
      />
      <div className="md:hidden right-1">
        <label className="text-gray-900 hover:text-primary" htmlFor="nav-check">
          <FaHamburger
            style={{
              transform: "scale(1.3) translateX(-5px) translateY(-2px)",
            }}
          />
        </label>
      </div>

      {/* Hamburger menu */}
      <div className="flex flex-col md:hidden absolute top-16 left-0 bg-background h-hamburger-menu w-full border-r-2 -translate-x-full peer-checked:translate-x-0 transition-all duration-500 ease-in-out z-50">
        <div className="flex flex-col first:border-t-4">
          {headerNavLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <a
                className="px-6 py-4 w-full font-medium border-b hover:bg-gray-50"
                onClick={onLinkPress}
              >
                {link.title}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;