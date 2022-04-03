import { CgChevronDoubleDown } from "react-icons/cg";
import useIsScrolled from "../utils/useIsScrolled";

const ScrollDownIndicatorIcon = ({ className }) => (
  <span
    className={`flex h-20 w-full items-center justify-center absolute bottom-14 ${className}`}
  >
    <CgChevronDoubleDown className="text-4xl text-gray-700 scroll-down-indicator dark:text-gray-400" />
  </span>
);

const ScrollDownIndicator = () => {
  const isScrolled = useIsScrolled();

  if (isScrolled) {
    return (
      <ScrollDownIndicatorIcon className="transition-opacity duration-500 opacity-0" />
    );
  } else return <ScrollDownIndicatorIcon className="opacity-100" />;
};

const HaloElem = ({ className }) => (
  <div
    className={`absolute w-40 h-24 rounded-3xl transform -translate-x-1/2 -translate-y-1/2 -skew-y-12 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${className}`}
  />
);
const PinkHalo = ({ className }) => (
  <HaloElem data-component="pink-halo" className={`pink-halo ${className}`} />
);
const RedHalo = ({ className }) => (
  <HaloElem data-component="red-halo" className={`red-halo ${className}`} />
);
const TealHalo = ({ className }) => (
  <HaloElem data-component="teal-halo" className={`teal-halo ${className}`} />
);

export { ScrollDownIndicator, PinkHalo, TealHalo, RedHalo };
