import VideoPlayer from "@/components/VideoPlayer";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <section className=" min-h-screen grid gap-5 xl:gap-10 grid-cols-1 place-items-center xl:grid-flow-col py-10 lg:py-20 px-5 lg:px-10 bg-neutral-focus">
      <div className="xl:col-span-2 flex flex-col items-start gap-5 ">
        <h1 className=" text-5xl mt-10 lg:mt-0"> Away Mobile App </h1>
        <h2 className="text-xl">
          Group Travel Planning App for travel enthusiasts where friends can
          explore places, plan trips together, share memories, and make
          collections of their favorite places.
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <th>Purpose</th>
                <td>MSc Creative Digital Media & UX 2023 at TU Dublin</td>
              </tr>
              <tr>
                <th>Duration</th>
                <td>2 months (Design) + 4 months (Development)</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>UX/UI Designer & Frontend Developer</td>
              </tr>
              <tr>
                <th>Tech</th>
                <td>Figma, React Native, Expo, Firebase, JavaScript, APIs</td>
              </tr>
              <tr>
                <th>Problem</th>
                <td>
                  How might we help travelers to plan trips together in a fun,
                  intuitive and exciting way?
                </td>
              </tr>
              <tr>
                <th>Skills</th>
                <td>
                  User Research, User Flows, Wireframes, Prototyping, Usability
                  Testing, Visual Design, Frontend Development
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <a
            href="https://github.com/gupta-karan1/AwayApp"
            className="btn btn-outline"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub <ArrowUpRightIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.figma.com/proto/WhF3FKZwHVH8EwzQgBz9E7/Hi-Fi-Prototype_Karan?type=design&node-id=56-10718&t=OKo4LZrGsalseANA-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A10718&show-proto-sidebar=1&mode=design"
            className="btn btn-outline "
            target="_blank"
            rel="noreferrer noopener"
          >
            Interact <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="xl:col-span-2 mt-5 lg:mt-0 ">
        <VideoPlayer
          source="/assets/away-app/away-record-1.mp4"
          width="380"
          height="600"
          auto={true}
        />
      </div>
      <div className="xl:col-span-2">
        <VideoPlayer
          source="/assets/away-app/away-record-2.mp4"
          width="380"
          height="600"
          auto={true}
        />
      </div>
    </section>
  );
}

export default Hero;
