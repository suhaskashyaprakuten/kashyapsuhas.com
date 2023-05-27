import getProcessedIGImages from '@utils/getProcessedIGImages';
import Image from 'next/image';
import MaxWidthWrapper from '@components/MaxWidthWrapper';
import PreviewRecentIG from '@components/PreviewRecentIG';
import PreviewRecentPosts from '@components/PreviewRecentPosts';
import { getFrontMatters } from '@utils/getFrontMatters';
import { ScrollDownIndicator } from '@components/CSSElements';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

export async function getStaticProps() {
  const frontMatters = await getFrontMatters();
  // const posts = await getProcessedIGImages(5);

  return {
    props: {
      frontMatterData: frontMatters,
      // igPosts: posts,
    },
    revalidate: 1800, // check once every 30 seconds
  };
}

const Home = ({ ...props }) => {
  const fm = props.frontMatterData;
  // const igPosts = props.igPosts;
  const router = useRouter();

  return (
    <>
      <NextSeo
        title="Suhas Kashyap"
        description="Welcome to Suhas Kashyap's slice of the interwebs"
        openGraph={{
          title: 'Suhas Kashyap',
          description: "Welcome to Suhas Kashyap's slice of the interwebs",
          images: [
            {
              url: 'https://www.kashyapsuhas.com/_next/image?url=%2Fprofile_640.jpg&w=640&q=75',
              width: 320,
              height: 320,
              alt: 'Suhas Kashyap',
              type: 'image/jpg',
            },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: 'kashyapS07',
          site: 'https://www.kashyapsuhas.com',
          cardType: 'summary_large_image',
        }}
      />
      <main className="w-full">
        <div
          data-element="main-section"
          className="relative mb-auto flex min-h-screen w-full flex-col items-center justify-center"
        >
          <MaxWidthWrapper className="relative flex w-full items-center justify-center">
            <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row md:gap-0">
              <div className="flex w-full flex-col justify-center gap-6 md:w-2/3">
                <div className="flex w-full flex-col justify-center gap-2">
                  <span className="text-3xl !font-bold text-black md:text-4xl">
                    <span className="wiggle">👋</span> Hello there, I&apos;m
                  </span>
                  <span className="text-5xl !font-bold text-black md:text-6xl">SUHAS KASHYAP</span>
                </div>

                <span className="text-3xl md:text-4xl ">Welcome to my slice of the Interwebs.</span>
              </div>

              {/* This was for gradient ring around pp */}
              {/* <div className="absolute-center relative flex h-[310px] w-[310px] items-center justify-center rounded-full bg-white">
                <div className="relative flex h-[295px] w-[295px] items-center justify-center rounded-full"> */}

              {/* <div className="relative flex h-56 w-56 md:h-80 md:w-80"> */}
              {/* TODO: have some fun here */}
              <Image
                src={'/profile_640.jpg'}
                alt="suhas image"
                layout="fixed"
                height={320}
                width={320}
                priority={true}
                className="select-none rounded-full"
              />
              {/* </div> */}
            </div>
          </MaxWidthWrapper>

          <ScrollDownIndicator />
        </div>

        <div data-element="main-section" className="flex">
          <MaxWidthWrapper className="mb-8 flex w-full flex-col items-start gap-8">
            {/* @ts-ignore */}
            <PreviewRecentPosts fm={fm} />
            {/* @ts-ignore */}
            {/* <PreviewRecentIG router={router} igPosts={igPosts} /> */}
          </MaxWidthWrapper>
        </div>
      </main>
    </>
  );
};

export default Home;
