import { Metadata } from "next";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Architect AR App - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Augmented Reality for Architecture:
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Simplifying Architecture Visualization for Architects and Clients with
          the ARchitect AR App
        </h1>
        <p className="md:text-xl text-center">
          Exploring the potential of Augmented Reality with a mobile app built
          with Unity, Sketchup & Vuforia to help architects explain their
          designs with immersive 3D visualisation
        </p>
      </section>

      <Image
        src="/assets/architect-ar-app/architect-hero.jpg"
        width="1920"
        height="1080"
        alt="Architect AR App Hero"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-hero.jpg"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Creating a real-time, accessible and flexible AR solution for
          architecture visualisation
        </h2>
        <p>
          ARchitect AR App revolutionises architecture visualisation, solving
          issues in technical drawing interpretation and design communication.
          Using Augmented Reality, it offers real-time, accessible, and flexible
          solutions, reducing the need for costly models and intricate drawings.
          Enhancing spatial understanding, it facilitates interactive changes,
          transforming 2D drawings into immersive AR experiences and
          revolutionising communication in the architecture industry.
        </p>

        <a
          href="https://docs.google.com/presentation/d/1XU1wDPdi_vJ4qg5ltYMHq3HimvBLijrbPSM4k6Hf5zg/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          View Presentation{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <iframe
        width="900"
        height="506"
        src="https://www.youtube.com/embed/tHLQ3ksZJ1E?si=dCWONRh5L_YXioxJ"
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full md:max-w-3xl md:h-[506px]"
      ></iframe>

      <section className="max-w-3xl">
        <h3>Client's Problems</h3>
        <h2 className="font-semibold text-3xl mb-5">
          8 out of 10 clients said they had difficulty reading technical
          drawings & visualising designs
        </h2>
        <p>
          Addressing a prevalent client-side challenge, where 8 out of 10
          individuals expressed difficulty interpreting technical drawings and
          visualising designs, ARchitect AR App steps in as a transformative
          solution. By leveraging Augmented Reality, our app ensures a seamless
          and intuitive experience, eliminating the hurdles associated with
          traditional modes of comprehension. Clients can now effortlessly
          engage with architectural designs in a more accessible and visually
          compelling manner, marking a significant departure from the
          complexities of interpreting technical drawings.
        </p>
      </section>

      <Image
        src="/assets/architect-ar-app/architect-client.png"
        width="960"
        height="540"
        alt="Architect AR App Client"
        className="w-full lg:max-w-3xl  mb-10"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-client.png"
      />

      <section className="max-w-3xl">
        <h3>Architect's Problems</h3>
        <h2 className="font-semibold text-3xl mb-5">
          7 out of 10 architects said they often had difficulty explaining their
          design solutions to clients
        </h2>
        <p>
          Confronting a common hurdle for architects, with 7 out of 10
          professionals struggling to articulate design solutions to clients,
          ARchitect AR App emerges as a strategic remedy. Augmented Reality
          becomes the communicative bridge, enabling architects to present their
          design solutions in an immersive and interactive format. By seamlessly
          translating complex concepts into visual experiences, the app empowers
          architects to overcome the challenges of conveying intricate designs
          to clients. This innovative approach not only streamlines
          communication but also enhances the architects' ability to effectively
          convey the essence and vision behind their creations.
        </p>
      </section>

      <Image
        src="/assets/architect-ar-app/architect-architect.png"
        width="960"
        height="540"
        alt="Architect AR App Architect"
        className="w-full lg:max-w-3xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-architect.png"
      />

      <section className="max-w-3xl ">
        <h3>Cost Effective</h3>
        <h2 className="font-semibold text-3xl mb-5">
          AR Experience removes the need for expensive 3D physical models and
          complex 2D Drawings
        </h2>
        <p>
          Revolutionising cost dynamics, the ARchitect AR App introduces a
          cost-effective paradigm by eliminating the necessity for expensive 3D
          physical models and intricate 2D drawings. This augmented reality
          experience provides a streamlined alternative, significantly reducing
          the financial burden associated with traditional architectural
          visualisation methods. Architects can now achieve unparalleled
          efficiency in conveying designs while saving on resources, making the
          ARchitect AR App a financially astute solution for the architecture
          industry.
        </p>
      </section>
      <video loop muted width={300} height={600} controls className="mb-10">
        <source
          src="/assets/architect-ar-app/architect-video-ground.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="max-w-3xl">
        <h3>Communication</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Enhanced spatial understanding resolves miscommunication and
          ineffective re-work
        </h2>
        <p>
          With a focus on resolving communication challenges, the ARchitect AR
          App enhances spatial understanding, mitigating miscommunication and
          the need for ineffective rework. By immersing clients and architects
          in a shared visual experience, the app fosters a more precise and
          accurate comprehension of design concepts. This not only streamlines
          communication but also reduces the likelihood of misunderstandings,
          ensuring a smoother and more efficient collaboration between clients
          and architects throughout the project lifecycle.
        </p>
      </section>

      <video loop muted width={300} height={600} controls className="mb-10">
        <source
          src="/assets/architect-ar-app/architect-video-section.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="max-w-3xl ">
        <h3>Interactive</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Immersive AR allows clients to interact & make real time changes
          reducing multiple iterations
        </h2>
        <p>
          The ARchitect AR App introduces an interactive dimension, enabling
          clients to actively engage and make real-time changes within an
          immersive Augmented Reality environment. This transformative feature
          significantly diminishes the need for multiple design iterations, as
          clients can dynamically participate in the evolution of their
          projects. By fostering a collaborative and responsive experience, the
          app ensures that adjustments are made seamlessly, resulting in a more
          efficient and client-centric design process.
        </p>
      </section>

      <video loop muted width={300} height={600} controls className="mb-10">
        <source
          src="/assets/architect-ar-app/architect-video-movable.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="max-w-3xl ">
        <h3>Accessible Anywhere</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Architects can quickly turn their existing 2D drawings to immersive AR
          experiences
        </h2>
        <p>
          Streamlining integration, the ARchitect AR App enables architects to
          swiftly transform their existing 2D drawings into immersive AR
          experiences using trigger images. This innovative feature enhances the
          adaptability of the app, allowing architects to seamlessly integrate
          augmented reality into their current design workflows. By leveraging
          trigger images, the transition to AR becomes a seamless and efficient
          process, providing architects with a powerful tool to enhance their
          presentations and communication with clients.
        </p>
      </section>

      <video loop muted width={300} height={600} controls>
        <source
          src="/assets/architect-ar-app/architect-video-plan.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="max-w-3xl ">
        <h3>Immersive Scale</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Clients can tap and zoom to walk around within their new home with
          true dimensions
        </h2>
        <p>
          Unveiling an immersive scale, the ARchitect AR App grants clients the
          ability to tap and zoom, virtually walking around within their new
          home with true dimensions. This transformative feature not only
          provides a realistic sense of scale but also offers clients an
          unprecedented level of engagement with their architectural projects.
          By allowing clients to explore and interact with the design in detail,
          the app enhances the user experience, fostering a deeper connection
          and understanding of the proposed architectural spaces.
        </p>
      </section>

      <video loop muted width={300} height={600} controls className="mb-10">
        <source
          src="/assets/architect-ar-app/architect-video-space.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <section className="max-w-3xl ">
        <h3>Business Rationale</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Created a lean canvas model for the PoC to develop a strong business
          rationale
        </h2>
        <p>
          In crafting a robust business rationale, we strategically developed a
          lean canvas model for the Proof of Concept (PoC). This approach
          ensured a focused and efficient exploration of the app's viability,
          addressing key elements such as value proposition, customer segments,
          and revenue streams. By leveraging the lean canvas model, we
          established a clear and concise framework, guiding the development of
          a strong business rationale for the ARchitect AR App. This methodology
          facilitated a streamlined and purposeful decision-making process,
          aligning the project with strategic business goals from its inception.
        </p>
      </section>

      <Image
        src="/assets/architect-ar-app/architect-lean.png"
        width="960"
        height="540"
        alt="Architect AR App lean"
        className="w-full lg:max-w-3xl  mb-10"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-lean.png"
      />
      <section className="max-w-3xl ">
        <h3>AR Development</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Unity 3D with Vuforia and Sketchup models of the project enabled quick
          development
        </h2>
        <p>
          The technical workflow of the ARchitect AR App leveraged Unity 3D in
          conjunction with Vuforia and Sketchup models, enabling rapid and
          efficient development. This synergistic combination of technologies
          facilitated a seamless integration of augmented reality features,
          ensuring a dynamic and visually immersive experience for users. By
          utilising Unity 3D for development, Vuforia for augmented reality
          capabilities, and Sketchup models for project visualisation, the
          technical workflow streamlined the app creation process, emphasising
          speed and effectiveness in bringing the ARchitect AR App to fruition.
        </p>

        <a
          href="https://github.com/gupta-karan1/architect-AR-app"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          GitHub Repository{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/architect-ar-app/architect-workflow.png"
        width="960"
        height="540"
        alt="Architect AR App workflow"
        className="w-full lg:max-w-3xl  mb-10"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-workflow.png"
      />
      <section className="max-w-3xl ">
        <h3>Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Augmented Reality is a game changer in the architecture industry to
          resolve communication issues & enhance user experience
        </h2>
        <p>
          The challenges encountered in the ARchitect AR App project underscored
          the transformative impact of Augmented Reality in the architecture
          industry. Augmented Reality emerged as a game changer, specifically
          addressing communication hurdles and significantly enhancing the
          overall user experience. This realisation served as a valuable lesson,
          highlighting the profound potential of innovative technologies to
          revolutionise traditional practices and elevate the effectiveness of
          communication within the architecture domain. The project not only
          addressed challenges but also laid the foundation for a new era of
          immersive and user-centric experiences in architectural visualisation.
        </p>

        <a
          href="https://drive.google.com/file/d/1WiHjZ7I-09p7W3WjlRzMs_mm3UH1Xj-P/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Download APK <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <video loop muted width={300} height={600} controls className="mb-10">
        <source
          src="/assets/architect-ar-app/architect-video-slice.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <Image
        src="/assets/architect-ar-app/architect-hero.jpg"
        width="1280"
        height="720"
        alt="OneBill Website Hero"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/architect-ar-app/architect-hero.jpg"
      />
    </main>
  );
}

export default page;
