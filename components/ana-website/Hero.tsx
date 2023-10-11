import VideoPlayer from "@/components/VideoPlayer";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section className="min-h-screen grid xl:gap-10 grid-cols-1 place-items-center  xl:grid-flow-col-dense py-10 lg:py-20 px-10 lg:px-20 bg-neutral-focus">
      <div className="xl:col-span-2 flex flex-col items-start gap-5 ">
        <h1 className=" text-5xl mt-10 lg:mt-0">
          {" "}
          Website for ANA Design Studio
        </h1>
        <h2 className="text-xl">
          Integrated Architecture, Engineering & Construction Consultancy in
          Delhi, India
        </h2>
        {/* <h3 className="text-xl">
          Increased <span className="text-accent"> Client Acquisition </span>,
          Improved
          <span className="text-accent"> Brand Awareness</span>, and Established
          as a <span className="text-accent"> Thought Leader </span>
        </h3> */}
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>Purpose</th>
                <td>
                  Increase client acquisition, brand awareness ans establish as
                  thought leader
                </td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>5 weeks (Version 1) + 6 weeks (Version 2)</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>UX/UI Designer & Wordpress Developer</td>
              </tr>
              <tr>
                <th>Tech</th>
                <td>Wordpress, Elementor, Figma, Photoshop, InDesign</td>
              </tr>
              <tr>
                <th>Problem</th>
                <td>
                  How to document and present 26 years of work on a business
                  portfolio website?
                </td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>
                  Market Research, Branding, Content Strategy, Visual Design,
                  Wordpress Development, SEO
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="https://ana-design.com/" className="btn btn-outline">
          Live Website <ArrowUpRightIcon className="w-5 h-5" />
        </a>
      </div>
      <div className="xl:col-span-8 mt-5 lg:mt-0 ">
        <VideoPlayer
          source="/assets/ana-recording-hd.mp4"
          width="900"
          height="600"
          auto={true}
        />
      </div>
    </section>
  );
}

export default Hero;
