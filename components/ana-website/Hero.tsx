import VideoPlayer from "@/components/VideoPlayer";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section className="min-h-screen grid xl:gap-5 grid-cols-1 place-items-center  xl:grid-flow-col-dense py-10 lg:py-20 px-10 lg:px-20 bg-base-300">
      <div className="xl:col-span-2 flex flex-col items-start gap-5 ">
        <h1 className=" text-5xl"> Business Website for ANA Design Studio</h1>
        <h2 className="text-xl">
          Integrated Architecture, Engineering & Construction Consultancy firm
          in Delhi, India
        </h2>
        <h3 className="text-xl">
          Increased <span className="text-accent"> Client Acquisition </span>,
          Improved
          <span className="text-accent"> Brand Awareness</span>, and Established
          as a <span className="text-accent"> Thought Leader </span>
        </h3>
        <a href="https://ana-design.com/" className="btn btn-outline">
          Live Website <ArrowUpRightIcon className="w-5 h-5" />
        </a>
      </div>
      <div className="xl:col-span-8 ">
        <VideoPlayer
          source="/assets/ana-recording-hd.mp4"
          width="300"
          height="600"
        />
      </div>
    </section>
  );
}

export default Hero;
