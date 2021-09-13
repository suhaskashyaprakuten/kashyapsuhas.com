import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = ({ className }) => {
  return (
    <footer
      className={`relative bg-gray-100 dark:bg-gray-800 z-40 ${className}`}
    >
      <MaxWidthWrapper className="flex flex-row justify-between items-center py-5">
        <span className="font-semibold">Thanks for visiting!</span>
        <span>
          View
          <Link href="https://github.com/kashyap07/kashyapsuhas.com">
            <a className="text-secondary font-bold"> source.</a>
          </Link>
        </span>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
