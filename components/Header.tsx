import { useState, useEffect } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import useIsScrolled from "../utils/useScrollPosition";
import HamburgerMenu from "./HamburgerMenu";
import { PinkHalo } from "./CSSElements";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Socials, socialsObj } from "./Socials";

const headerNavLinks = [
  { title: "Blog", href: "/blog" },
  { title: "Work", href: "/work" },
  { title: "Contact", href: "/contact" },
];

const Header = () => {
  const isScrolled = useIsScrolled();
  const [isDarkMode, setDarkMode] = useState(null);

  const { twitter, github, instagram } = socialsObj;

  const defaultChecked =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const toggleDarkMode = (checked: any) => {
    setDarkMode(checked);

    if (window !== undefined) {
      const htmlRoot = document.documentElement;
      if (htmlRoot.classList.contains("dark")) {
        htmlRoot.classList.remove("dark");
        htmlRoot.classList.add("light");
        localStorage.theme = "light";
      } else {
        htmlRoot.classList.remove("light");
        htmlRoot.classList.add("dark");
        localStorage.theme = "dark";
      }
    }
  };

  // FIXME: Animation dies for some reason
  const ThemeSwitcherBtn = ({ className = "" }) => {
    const defaultChecked =
      typeof window !== "undefined" &&
      document.documentElement.classList.contains("dark");
    return (
      <DarkModeSwitch
        className={className}
        // @ts-ignore
        checked={defaultChecked || isDarkMode}
        onChange={toggleDarkMode}
        sunColor="hsl(220, 12%, 40%)"
        moonColor="hsl(220, 12%, 80%)"
      />
    );
  };

  return (
    <header
      className={`fixed top-0 w-full bg-background dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-80 backdrop-filter backdrop-blur backdrop-saturate-200 z-50 h-16 border-b dark:border-gray-800 transition-all duration-500 ease-out
      ${
        isScrolled
          ? "border-opacity-100 dark:border-opacity-100"
          : "border-opacity-0 dark:border-opacity-0"
      }`}
    >
      <MaxWidthWrapper>
        <nav className="z-50 flex items-center justify-between py-4 nav">
          <div className="flex">
            <Link href="/" passHref>
              <a
                data-element="logo"
                className="relative pr-1 text-3xl font-bold tracking-tight text-transparent select-none font-fancy bg-primary dark:bg-gradient-to-r dark:from-special-logo-start dark:to-special-logo-end bg-clip-text group hover:bg-none"
                aria-label="Home Page"
              >
                <span className="transition-colors duration-500 delay-100 select-none group-hover:text-red-50">
                  Suhas Kashyap
                </span>
                <PinkHalo className="top-0 left-1/3 -z-10" />
                <PinkHalo className="top-1/4 left-2/3 -z-10" />
              </a>
            </Link>

            {/* desktop list */}
            <div className="flex-row items-center hidden ml-3 md:flex">
              {headerNavLinks.map((link) => (
                <Link key={link.title} href={link.href} passHref>
                  <a className="px-1.5 py-0.5 text-gray-600 dark:text-gray-50 h-fit-content font-semibold rounded-full hover:nav-button-hover">
                    {link.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* desktop visible, mobile hidden */}
          <div className="items-center hidden md:flex">
            <Socials
              list={[twitter, github, instagram]}
              className="gap-3 text-xl text-gray-600 dark:text-white"
              altIcons
            />
            <span
              className="w-0 h-6 mx-3 border border-gray-100 dark:border-gray-700"
              aria-hidden
            />

            {/* <ThemeSwitcherBtn /> */}
            <DarkModeSwitch
              // @ts-ignore
              checked={defaultChecked || isDarkMode}
              onChange={toggleDarkMode}
              sunColor="hsl(220, 12%, 40%)"
              moonColor="hsl(220, 12%, 80%)"
            />
          </div>

          {/* Mobile list */}
          <HamburgerMenu
            headerNavLinks={headerNavLinks}
            socialButtons={[twitter, github, instagram]}
            ThemeSwitcherBtn={ThemeSwitcherBtn}
          />
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;