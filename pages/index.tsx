import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pony Finance</title>
        <meta
          name="description"
          content="The best stablecoin yield across all of DeFi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-start items-center w-screen min-h-screen">
        <Header />
        <div className="flex flex-col justify-center items-center w-full pt-32 md:pt-48 lg:pt-40 md:pb-16 mx-0 px-0 bg-landing-hero bg-cover header-clip">
          <div className="flex flex-row justify-center md:justify-start lg:justify-center md:items-center w-full md:max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start max-w-xl">
              <h1 className="w-[348px] md:w-auto text-3xl md:text-5xl md:leading-[64px] text-white text-center md:text-left font-bold mb-5">
                The best stablecoin yields across{" "}
                <span className="underline">all</span> of DeFi{" "}
              </h1>
              <div className="text-xl text-white text-center md:text-left mb-8 md:mb-[60px] w-[348px] md:w-[548px]">
                Earn more with PONY, the Passive Omnichain Net Yield Index
              </div>
              <a
                href="https://share.hsforms.com/1MLLXd0LWQSejb-OcrN5AFgd1av5"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center w-fit h-10 md:h-16 px-8 md:px-16 mb-14 lg:mb-0 bg-white rounded-full text-lg text-[#5000FF]"
              >
                Join the Waitlist
              </a>
            </div>
            <div className="relative hidden lg:block w-[448px] h-[522px]">
              <Image layout="fill" src="/hero-cowboy.png" alt="pony rider" />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 md:gap-12 lg:gap-0 w-full md:max-w-2xl lg:max-w-5xl my-16 md:my-20 lg:my-40">
          <div className="relative w-48 md:w-72 h-48 md:h-72">
            <Image layout="fill" src="/pony-token.png" alt="$PONY" />
          </div>
          <div className="flex flex-col justify-start md:justify-start items-start w-[348px] md:w-full lg:w-[548px]">
            <div className="text-2xl md:text-4xl text-[#2A0086] text-center md:text-left font-bold mb-6 md:mb-[30px]">
              One interest-bearing token, infinite stablecoin yield
            </div>
            <div className="text-base md:text-md text-[#2f2f2f] text-center md:text-left">
              PONY, the Passive Omnichain Net Yield index, is a single,
              interest-bearing token optimized to boost yields and generate
              passive income. Free from impermanent loss and managed by legacy
              index methodologists, PONY delivers diversified exposure to
              high-quality stablecoin yields across multiple chains.
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
