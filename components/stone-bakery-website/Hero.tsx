import VideoPlayer from "@/components/VideoPlayer";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section className="min-h-screen grid gap-5 xl:gap-10 grid-cols-1 place-items-center  xl:grid-flow-col-dense py-10 lg:py-20 px-5 lg:px-10 bg-neutral-focus">
      <div className="xl:col-span-2 flex flex-col items-start gap-5 ">
        <h1 className=" text-5xl mt-10 lg:mt-0">Stone Bakery Website</h1>
        <h2 className="text-xl">
          E-commerce Website for a Bakery in Dublin, Ireland
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>Purpose</th>
                <td>
                  Master's Project for MSc in Creative Digital Media & UX at TU
                  Dublin.
                </td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>1.5 weeks (Design) + 2 weeks (Development)</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>UX/UI Designer & Web Developer</td>
              </tr>
              <tr>
                <th>Tech</th>
                <td>HTML 5, CSS 3, Vanilla JavaScript</td>
              </tr>
              <tr>
                <th>Problem</th>
                <td>
                  How to enter the home baking market by selling products and
                  services online to elder people?
                </td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>
                  Branding, UI Design, UX Design, Web Development, Information
                  Architecture, Wireframing, Web Accessibility
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <a
            href="https://the-stone-bakery.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline "
          >
            Live <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/gupta-karan1/the-stone-bakery"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline "
          >
            GitHub <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            href="https://drive.google.com/file/d/12Okdy2bkvOhKQI2G19k2y7xTRQHxUtVa/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-outline "
          >
            Docs <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="xl:col-span-8 mt-5 lg:mt-0 ">
        <VideoPlayer
          source="/assets/stone-bakery/stone-bakery-record.mp4"
          width="900"
          height="600"
          auto={true}
        />
      </div>
    </section>
  );
}

export default Hero;
