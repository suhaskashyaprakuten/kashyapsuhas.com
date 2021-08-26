import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ScrollDownIndicator } from "../components/CSSElements";
import Socials from "../components/Socials";
import { getFrontMatters } from "../utils/getFrontMatters";
import useIsScrolled from "../utils/useScrollPosition";

export async function getStaticProps() {
  const frontMatters = await getFrontMatters();

  return {
    props: {
      frontMatterData: frontMatters,
    },
  };
}

const Home = ({ className, ...props }) => {
  const isScrolled = useIsScrolled();
  const fm = props.frontMatterData;
  console.log(fm);

  return (
    <main className={`w-full ${className}`}>
      <div
        data-element="section"
        className="flex flex-col mb-auto min-h-minusHeader justify-center items-center relative"
      >
        <MaxWidthWrapper className="flex justify-center">
          <div className="flex" data-element="home-card">
            <div className="flex flex-col justify-center gap-6 mb-48 font-bold text-3xl text-gray-900">
              <span className="text-5xl md:text-6xl">
                Hello there, I&apos;m Suhas <span className="wiggle">👋</span>
              </span>
              <span className="text-3xl md:text-4xl text-gray-800">
                Welcome to my slice of the Interwebs.
              </span>
            </div>
          </div>
        </MaxWidthWrapper>

        {isScrolled ? (
          <ScrollDownIndicator className="opacity-0 transition-opacity duration-500" />
        ) : (
          <ScrollDownIndicator className="opacity-100" />
        )}
      </div>

      <div data-element="section" className="flex min-h-screen">
        <MaxWidthWrapper className="flex flex-col items-start w-full">
          <div data-element="preview-section" className="py-4 my-10">
            <h2>Recent Blog Posts</h2>
            <ul className="flex flex-col  w-full">
              {fm.slice(0, 3).map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={`/blog/post/${item.filename
                        .split(".")
                        .slice(0, -1)
                        .join(".")}`}
                    >
                      <a>
                        {item.title} --{" "}
                        {new Date(item.creation_date).toLocaleDateString(
                          "en-IN",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div data-element="preview-section" className="py-4 my-10">
            <h2>Recent Photos</h2>
          </div>
          <div data-element="preview-section" className="py-4 my-10">
            <h2>What I&apos;m listening to on spotify rn</h2>
          </div>
          <div data-element="preview-section" className="py-4 my-10">
            <h2>Socials</h2>
            <Socials />
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
};

export default Home;
