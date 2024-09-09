import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="cyan" />
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 ">
        <div className="p-4 z-10 relative w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Learn the Musical liberation
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Step into the world of music with our courses and let your musical
            journey soar. Whether you are a beginner or sharpening your skills,
            join us to discover the melody inside you and reach your full
            potential.
          </p>
          <div className="mt-4">
            <Link href={"/cources"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
