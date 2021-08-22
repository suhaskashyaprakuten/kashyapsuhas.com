import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Link from "next/link";

const TopWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 130"
    className="hidden md:block absolute -top-1 filter drop-shadow-wave-seperator z-10"
  >
    {/* from https://yqnn.github.io/svg-path-editor/ */}
    <path
      className="fill-current text-background z-30"
      fillOpacity="1"
      d="M0 60C164 97 397-23 568.842 14.249C662 31 899 148 1061 121C1193 97 1263 31 1440 65L1440 0 0 0Z"
    ></path>
  </svg>
);

const BottomWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 163"
    className="hidden md:block absolute -bottom-2 filter -drop-shadow-wave-seperator md:z-10"
  >
    <path
      className="fill-current text-background z-30"
      fillOpacity="1"
      d="M0 151C313 184 493 74 652 107C797 139 827 167 992 134C1144 106 1169 18 1440 32L1440 160 0 160Z"
    ></path>
  </svg>
);

const Kashyap = () => (
  <div className="hidden xl:block absolute top-52 transform scale-125 opacity-10 -rotate-90 text-neutral z-0">
    <svg width="100%" viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-current text-background z-0"
        d="M39.8 74.2 24.6 55.2 19 60.9 19 74.2 0 74.2 0 0 19 0 19 38.9 38.4 20 60.9 20 38.4 43.2 62.8 74.2 39.8 74.2ZM242.8 43.2 242.8 74.2 223.8 74.2 223.8 46.3A20.324 20.324 0 00223.433 42.249Q222.156 36 216.436 35.291A12.494 12.494 0 00214.9 35.2A12.165 12.165 0 00211.369 35.688A9.521 9.521 0 00207.05 38.4Q204.755 40.889 204.246 45.314A23.499 23.499 0 00204.1 48L204.1 74.2 185.1 74.2 185.1 0 204.1 0 204.1 25Q207.2 22.1 211.4 20.6A26.166 26.166 0 01219.209 19.123A30.025 30.025 0 01220.4 19.1A27.626 27.626 0 01227.554 19.979A20.298 20.298 0 01236.65 25.1A18.785 18.785 0 01241.31 32.767Q242.311 35.775 242.64 39.451A42.151 42.151 0 01242.8 43.2ZM292.7 20 310.8 20 287.4 76.4A48.207 48.207 0 01284.662 82.069Q283.059 84.867 281.244 86.963A20.359 20.359 0 01277.4 90.45A22.706 22.706 0 01268.418 94.043A30.826 30.826 0 01263 94.5A28.958 28.958 0 01254.656 93.243A32.388 32.388 0 01254.35 93.15A26.729 26.729 0 01251.088 91.913Q248.903 90.906 247.3 89.6L253.9 76.3A11.176 11.176 0 00256.929 78.308A13.233 13.233 0 00257.75 78.65Q260 79.5 262.3 79.5A10.919 10.919 0 00264.191 79.345Q265.267 79.156 266.143 78.735A6.14 6.14 0 00266.75 78.4Q268.341 77.4 269.477 75.325A12.809 12.809 0 00269.7 74.9L246.5 20 266 20 279.3 53.1 292.7 20ZM126.1 69.5 131.8 56.5A28.273 28.273 0 00136.266 58.732A37.86 37.86 0 00140.6 60.15Q145.7 61.5 150.7 61.5Q154.274 61.5 156.248 60.926A6.314 6.314 0 00157.25 60.55A4.486 4.486 0 00158.193 59.948A2.7 2.7 0 00159.2 57.8Q159.2 56.149 157.222 55.381A6.443 6.443 0 00156.85 55.25Q155.065 54.68 151.692 54.139A102.725 102.725 0 00149.4 53.8A98.991 98.991 0 01144.799 53.13Q141.194 52.513 138.35 51.7Q133.8 50.4 130.5 46.9A11.505 11.505 0 01127.809 41.997Q127.314 40.218 127.221 38.097A22.802 22.802 0 01127.2 37.1Q127.2 31.9 130.3 27.85Q133.315 23.911 139.025 21.58A30.736 30.736 0 01139.35 21.45A31.705 31.705 0 01145.665 19.725Q149.32 19.1 153.6 19.1Q159.5 19.1 165.3 20.3Q170.226 21.319 173.781 23.059A23.588 23.588 0 01175 23.7L169.3 36.6Q162.1 32.6 153.7 32.6A30.753 30.753 0 00151.419 32.679Q148.626 32.887 147.1 33.65Q145.889 34.256 145.376 35.077A2.451 2.451 0 00145 36.4A2.395 2.395 0 00146.063 38.452Q146.563 38.81 147.3 39.05Q149.034 39.615 152.473 40.209A116.546 116.546 0 00154.9 40.6A119.593 119.593 0 01159.51 41.375Q161.595 41.77 163.387 42.203A53.997 53.997 0 01166 42.9Q170.4 44.2 173.65 47.65A11.345 11.345 0 01176.3 52.48Q176.787 54.232 176.879 56.319A22.426 22.426 0 01176.9 57.3Q176.9 62.4 173.8 66.45A17.184 17.184 0 01169.527 70.356Q167.391 71.758 164.65 72.8A32.992 32.992 0 01158.44 74.451Q154.616 75.1 150.1 75.1Q143.3 75.1 136.7 73.55Q130.1 72 126.1 69.5ZM395.6 69.4 395.6 93.6 376.6 93.6 376.6 20 394.7 20 394.7 25.4Q400 19.1 410.7 19.1A27.386 27.386 0 01420.64 20.882A25.866 25.866 0 01424.15 22.55Q430.2 26 433.75 32.35A27.73 27.73 0 01436.953 42.05A35.66 35.66 0 01437.3 47.1A33.643 33.643 0 01436.416 54.973A26.877 26.877 0 01433.75 61.85Q430.2 68.2 424.15 71.65A26.516 26.516 0 01411.391 75.092A31.347 31.347 0 01410.7 75.1A25.59 25.59 0 01404.186 74.315A18.312 18.312 0 01395.6 69.4ZM118.4 44.1 118.4 74.2 100.7 74.2 100.7 67.2A13.722 13.722 0 0191.978 74.161Q89.422 74.917 86.267 75.064A33.556 33.556 0 0184.7 75.1A30.392 30.392 0 0179.513 74.679Q76.436 74.146 73.881 72.939A19.16 19.16 0 0173.8 72.9A18.437 18.437 0 0169.899 70.428A14.695 14.695 0 0166.85 66.95A15.469 15.469 0 0164.537 59.584A18.846 18.846 0 0164.5 58.4A16.024 16.024 0 0165.382 52.96A13.563 13.563 0 0170.4 46.45A18.685 18.685 0 0175.467 43.944Q80.284 42.345 87.31 42.212A68.289 68.289 0 0188.6 42.2L99.4 42.2A9.64 9.64 0 0098.341 38.14Q96.233 34.232 90.017 33.688A24.319 24.319 0 0087.9 33.6A26.005 26.005 0 0080.998 34.557A29.582 29.582 0 0080 34.85A23.855 23.855 0 0076.194 36.392A18.615 18.615 0 0073.2 38.3L66.8 25.4A30.637 30.637 0 0172.132 22.594A42.105 42.105 0 0177.75 20.75Q84.2 19.1 90.7 19.1A47.483 47.483 0 0198.513 19.701Q102.705 20.401 106.047 21.919A21.622 21.622 0 01111.3 25.25A19.276 19.276 0 01117.041 34.241Q118.055 37.451 118.312 41.359A41.707 41.707 0 01118.4 44.1ZM364.6 44.1 364.6 74.2 346.9 74.2 346.9 67.2A13.722 13.722 0 01338.178 74.161Q335.622 74.917 332.467 75.064A33.556 33.556 0 01330.9 75.1A30.392 30.392 0 01325.713 74.679Q322.636 74.146 320.081 72.939A19.16 19.16 0 01320 72.9A18.437 18.437 0 01316.099 70.428A14.695 14.695 0 01313.05 66.95A15.469 15.469 0 01310.737 59.584A18.846 18.846 0 01310.7 58.4A16.024 16.024 0 01311.582 52.96A13.563 13.563 0 01316.6 46.45A18.685 18.685 0 01321.667 43.944Q326.484 42.345 333.51 42.212A68.289 68.289 0 01334.8 42.2L345.6 42.2A9.64 9.64 0 00344.541 38.14Q342.433 34.232 336.217 33.688A24.319 24.319 0 00334.1 33.6A26.005 26.005 0 00327.198 34.557A29.582 29.582 0 00326.2 34.85A23.855 23.855 0 00322.394 36.392A18.615 18.615 0 00319.4 38.3L313 25.4A30.637 30.637 0 01318.332 22.594A42.105 42.105 0 01323.95 20.75Q330.4 19.1 336.9 19.1A47.483 47.483 0 01344.713 19.701Q348.905 20.401 352.247 21.919A21.622 21.622 0 01357.5 25.25A19.276 19.276 0 01363.241 34.241Q364.255 37.451 364.512 41.359A41.707 41.707 0 01364.6 44.1ZM406.7 60A11.813 11.813 0 00410.845 59.298A10.445 10.445 0 00414.9 56.55A11.508 11.508 0 00417.592 51.476Q418.1 49.491 418.1 47.1Q418.1 42.084 415.864 38.851A10.776 10.776 0 00414.9 37.65A10.598 10.598 0 00407.165 34.208A14.136 14.136 0 00406.7 34.2A11.813 11.813 0 00402.555 34.902A10.445 10.445 0 00398.5 37.65A11.508 11.508 0 00395.808 42.724Q395.3 44.709 395.3 47.1Q395.3 52.116 397.536 55.349A10.776 10.776 0 00398.5 56.55A10.598 10.598 0 00406.235 59.992A14.136 14.136 0 00406.7 60ZM99.4 56.8 99.4 52.1 91.2 52.1A18.528 18.528 0 0088.274 52.31Q82.9 53.174 82.9 57.6A5.298 5.298 0 0083.26 59.588A4.841 4.841 0 0084.8 61.6Q86.433 62.889 89.1 63.07A13.281 13.281 0 0090 63.1A11.52 11.52 0 0093.28 62.648A9.808 9.808 0 0095.8 61.5A8.64 8.64 0 0099.012 57.754A11.121 11.121 0 0099.4 56.8ZM345.6 56.8 345.6 52.1 337.4 52.1A18.528 18.528 0 00334.474 52.31Q329.1 53.174 329.1 57.6A5.298 5.298 0 00329.46 59.588A4.841 4.841 0 00331 61.6Q332.633 62.889 335.3 63.07A13.281 13.281 0 00336.2 63.1A11.52 11.52 0 00339.48 62.648A9.808 9.808 0 00342 61.5A8.64 8.64 0 00345.212 57.754A11.121 11.121 0 00345.6 56.8Z"
      ></path>
    </svg>
  </div>
);

const Home = ({ className }) => {
  return (
    <main className={`md:mt-10 md:mb-96 ${className}`}>
      <div
        data-element="section"
        className="relative h-full md:h-112 mb-auto py-6 md:py-24 bg-gradient-to-tr from-indigo-700 to-special-teal md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 w-full"
      >
        <TopWave />
        <Kashyap />
        <BottomWave />

        <MaxWidthWrapper className="flex justify-center z-20">
          <div
            className="flex min-w-min justify-center bg-gray-100 bg-opacity-50 rounded p-2 md:py-10 md:px-10 w-fit-content backdrop-blur-2xl md:absolute md:left-1/2 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-home-card z-20"
            data-element="home-card"
          >
            <div className="flex flex-col justify-center gap-6 font-bold text-2xl text-gray-900 p-2 py-5 md:p-10 bg-white bg-opacity-50 backdrop-blur-2xl">
              <span className="text-3xl">
                Hello there <span className="wiggle">👋</span>
              </span>
              <p>
                I&apos;m Suhas.
                <br />
                Welcome to my slice of the Interwebs.
              </p>
              <p>
                I&apos;m a dev at Quotient Technology Inc. at the moment.
                <br />
                Find more about work and my resume{" "}
                <Link href="/work">
                  <a className="text-secondary">here.</a>
                </Link>
              </p>
              <p>
                I&apos;m super passionate about cooking🍕, solo-travel, and
                AOE2.
                <br />
                Feel free to check the{" "}
                <Link href="/blog">
                  <a className="text-secondary">blog</a>
                </Link>{" "}
                for my musings on tech/food/travel.
                <br />
              </p>
              <p>
                Source for this site is{" "}
                <Link href="https://github.com/kashyap07/kashyapsuhas.com">
                  <a className="text-secondary">here.</a>
                </Link>
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </main>
  );
};

export default Home;
