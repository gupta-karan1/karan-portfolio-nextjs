import { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CompetitiveAnalysis from "@/components/away-app/CompetitiveAnalysis";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Away App - Karan - Portfolio",
  description:
    "Karan Gupta - Portfolio Website - UX Designer & Developer - Dublin, Ireland",
};

function page() {
  return (
    <main className="overflow-hidden flex flex-col items-center justify-center gap-10 px-5">
      <section className="pt-20 w-full md:max-w-5xl">
        <Breadcrumb />
        <h1 className="text-center font-light  md:text-3xl mb-5 ">
          Planning Unified Journeys:{" "}
        </h1>
        <h1 className="text-center font-bold text-2xl md:text-6xl md:leading-tight mb-5">
          Transforming Group Travel Planning with Away App
        </h1>
        <p className="md:text-xl text-center">
          Group Travel Planning App for travel enthusiasts where friends can
          explore places, plan trips together, share memories, and make
          collections of their favourite places.
        </p>
      </section>

      <Image
        src="/assets/away-app/away-cover.jpg"
        width="1920"
        height="1080"
        alt="Away App Hero"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-cover.jpg"
        className="mb-10 w-full 2xl:max-w-7xl"
      />

      <section className="max-w-3xl">
        <h3>Overview </h3>
        <h2 className="font-semibold text-3xl mb-5">
          Simplifying & enhancing group travel planning experience with an
          intuitive mobile app
        </h2>
        <p>
          Everyone enjoys travelling whether it is exploring new destinations,
          connecting with loved ones, or taking a break from the everyday work.
          But travel planning can often be frustrating and stressful, especially
          when you're in a group. After intensive user research, UX/UI design,
          and development, we have built a mobile app for group travel planning
          by making it more fun and collaborative, reducing the information
          overload and simplifying the overall process. The project, as a part
          of 1.5 years of MSc in Creative Digital Media and UX from TU Dublin,
          allowed us to enhance our UX skills while continuously improving the
          MVP via user testing.
        </p>
      </section>

      <iframe
        width="900"
        height="506"
        src="https://www.youtube-nocookie.com/embed/1uMOE-ylnrA?si=OFdJ8E_oGtr8MuRT"
        title="YouTube video player"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full h-full md:max-w-3xl md:h-[506px]"
      ></iframe>
      <section className="max-w-3xl">
        <h3>Objective - Simplification</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To simplify the process of planning a trip
        </h2>
        <p>
          The Away App offers an intuitive and user-friendly platform with
          minimum necessary functionalities to plan a group trip. The intention
          is to reduce the number of steps required to create a flexible trip
          itinerary. Since we want the experience to be stress-free and
          intuitive, our interface takes inspiration from their existing mental
          models of commonly used apps. It allows multiple ways to accomplish a
          task, without the need to memorize the steps to perform a task.
        </p>
      </section>

      <Image
        src="/assets/away-app/away-objective-1.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-objective-1.jpg"
      />

      <section className="max-w-3xl">
        <h3>Objective - Collaboration</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To make group travel planning a collaborative experience
        </h2>
        <p>
          When a single person is given the task of planning the entire trip for
          the group, it can be overwhelming for them to make all the decisions,
          incorporate everyone's preferences, and avoid raising a conflict with
          any member. Our app allows multiple group members to modify and
          suggest decisions within a single trip plan in real time, thereby
          sharing the workload of planning the trip. They are able to invite
          their friends to join a trip. They can add places to the group's
          itinerary and wishlist, and chat with each other to discuss their
          travel plans which will help in reducing the number of communication
          channels required to plan a trip.
        </p>
      </section>

      <Image
        src="/assets/away-app/away-objective-2.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 2"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-objective-2.jpg"
      />

      <section className="max-w-3xl">
        <h3>Objective - Digestible</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To reduce information overload and help users find places to visit
        </h2>
        <p>
          A centralised hub of travel related content so that users won't have
          to leave the application and hop on to multiple platforms to look for
          the perfect travel destinations. The authenticity of content will
          allow users to place more trust in them and thus make quicker
          decisions. Taking a step further, the curated selection of editorial
          content will be re-formatted into a custom template that would extract
          the necessary information such as location data and present them to
          our users. This will transfer the effort of extracting data from
          travel articles from the users to the software. It'll help in reducing
          the cognitive effort required to read multiple articles, and help them
          make quicker decisions.
        </p>
      </section>

      <Image
        src="/assets/away-app/away-objective-3.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 3"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-objective-3.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Objective - Personalisation</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To allow users to personalise their profile & make personal
          collections
        </h2>
        <p>
          The Away App allows users to create a profile that will store their
          personal information such as their name, profile picture, and other
          details. It also allows them to create a travel board of places they
          want to visit. They can also create a list of their favourite places.
          This allows them to enhance their travel experiences and help them
          plan their future trips.
        </p>
      </section>

      <Image
        src="/assets/away-app/away-objective-4.jpg"
        width="1280"
        height="720"
        alt="Away App Objective 4"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-objective-4.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Problem Identification</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Based 20+ interviews, communication, coordination, and consensus in a
          group travel were major problems
        </h2>
        <p>
          Through interviews and listening, we identified a number of pain
          points that our users require us to solve in our design. These include
          diverging preferences, information overwhelm, miscommunication and
          time wasted when planning a group trip.
        </p>
        <br />
        <p>Some of the questions we asked people were:</p>
        <ul className="list-inside list-disc">
          <li>Why do you generally travel? Why do you enjoy it?</li>

          <li>What problems have you recently faced when travelling?</li>

          <li>What problems do you face when planning a trip?</li>

          <li>Do you feel group trip planning is stressful? If so, why?</li>

          <li>How do you decide where to travel?</li>
        </ul>
        <br />
        <p>Some of the common responses we received: </p>
        <ul className="list-inside list-disc">
          <li>Different people in a group have different preferences.</li>

          <li>Group decisions are difficult to organise and manage.</li>

          <li>Overwhelming amount of travel information out there.</li>

          <li>Coming to a consensus is difficult.</li>

          <li>Building a travel itinerary is a tedious task.</li>
        </ul>
        <br />

        <p>
          Problem statement: People travelling in groups need a simple and
          efficient application in order to coordinate with group members and
          ensure they are satisfied with the trip itinerary.
        </p>
      </section>

      <iframe
        title="figma-embed"
        width="1280"
        height="720"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F24NQas68NpCUYt4Is51yWF%2FTravel-App---User-Problems%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3Dk2S0DZ9CZQQpzbJo-1"
        allowFullScreen
        className="bg-neutral-content mb-10 w-full h-full md:max-w-5xl md:h-[720px]"
      ></iframe>

      <section className="max-w-3xl ">
        <h3>UX Stage 1: Initial Ideas</h3>
        <h2 className="font-semibold text-3xl mb-5">
          At first, we set out to resolve multiple problems with travel
          planning. We were so wrong.
        </h2>
        <p>
          Using FigJam's digital whiteboard, we employed 'Crazy 8s' to
          categorise user treatments and created sketches across Pre-Trip,
          During Trip, and Post-Trip stages. Ideas ranged from an
          algorithm-based preference page to a detailed explore page featuring
          travel guides and vlogger profiles. During the brainstorming phase, we
          maintained a broad focus, later refining our concepts based on user
          feedback. Realising some ideas required technical expertise beyond our
          scope, we conducted further interviews, identifying group travel
          planning as a primary concern. This led to a valuable lesson: focusing
          on core issues rather than attempting to solve every problem.
        </p>
        <a
          href="https://www.figma.com/proto/64tkAsYoT24KXxOBPvcOEC/1st_Pitch?type=design&node-id=4-2&scaling=contain&page-id=0%3A1"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage1.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 1"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage1.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 2: Building User Personas</h3>
        <h2 className="font-semibold text-3xl">
          Based on UX Research, we identified 3 personas: Trip Organiser,
          Tripmate, and Solo Traveler
        </h2>
      </section>

      <div className="carousel max-w-6xl">
        <Image
          src="/assets/away-app/persona1.png"
          width="1100"
          height="486"
          alt="Away App UX Stage 1"
          className="w-full lg:max-w-2xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/persona1.png"
        />
        <Image
          src="/assets/away-app/persona2.png"
          width="1100"
          height="486"
          alt="Away App UX Stage 1"
          className="w-full lg:max-w-2xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/persona2.png"
        />
        <Image
          src="/assets/away-app/persona3.png"
          width="1100"
          height="486"
          alt="Away App UX Stage 1"
          className="w-full lg:max-w-2xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/persona3.png"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>UX Stage 3: Competitor Analysis</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Studying how similar travel planning apps worked helped us identify
          the gaps in their offerings
        </h2>
        <p>
          TripAdvisor, Wanderlog, Lambus, and Culture Trip were our main
          competitors offering solutions to travel planning. After thorough
          study, testing, and reviews we identified their strengths, interaction
          patterns, visual design, and areas of improvements. While we were
          inspired by some of their features like high quality content and
          itinerary builder, we realised that there was overwhelming content,
          complexities, and inconsistent experience.
        </p>
      </section>

      <CompetitiveAnalysis />

      <section className="max-w-3xl ">
        <h3>UX Stage 4: Low-Fidelity Paper Prototype</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Sketch prototypes allowed us to refine interactions quickly without
          caring about design or content
        </h2>
        <p>
          Using smartphone mockups, we sketched mobile frames, added static UI
          elements with placeholder content, and incorporated interactive layers
          with sticky notes and colour-coded paper. The resulting paper
          prototypes were scanned, imported into Figma, and connected to
          simulate interactions. User testing in the college libraries revealed
          positive feedback on the trip planning features, with some challenges
          identified in the explore section's navigation and wishlist
          integration.
        </p>

        <a
          href="https://www.figma.com/proto/pNfVZuXHQmU5SZsRQcrEXA/Prototype-23%2F02?type=design&node-id=2-3&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A3"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage2.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 2"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage2.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 5: Low-Fidelity Digital Prototype I</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Users liked multiple features for planning but demanded simplicity and
          clarity in navigation
        </h2>
        <p>
          We transitioned from raw prototypes to our first digital prototype in
          Figma, focusing primarily on refining the trip plan creation process.
          The user flow for this stage involved landing on the Explore page,
          moving to the Trips page to add a new trip, filling out the trip
          details form, entering the chat section to discuss and decide on a
          place, exploring recommendations within the trip, adding a poll, and
          finalizing the plan section. <br />
          <br />
          Feedback highlighted the need for clarity in the trip details form,
          questions about adding friends, and a desire for an app-free trip
          planning option. Users appreciated the ability to explore destinations
          without leaving a trip plan but expressed confusion about the
          labelling of "Explore" in navigation.
        </p>

        <a
          href="https://www.figma.com/proto/czd1volA7sxLl5YdWQmoPQ/Pitch-2-Presentation?type=design&node-id=1-5&scaling=contain&page-id=0%3A1"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage3.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 3"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage3.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 6: Paper Prototyping Session</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Moderated user testing made us realise the complexity involved in
          existing prototype sketches
        </h2>
        <p>
          We conducted intensive user testing sessions using highly detailed
          paper prototypes to refine both the Explore and Plan sections of our
          group travel planning application. Moderated user testing sessions
          provided valuable insights. <br />
          <br />
          Key learnings from the user testing sessions included the importance
          of providing context and task lists for users to comprehend detailed
          sketches. Users, unfamiliar with travel planning apps, took time to
          establish a mental model. Silent observation of behaviour patterns and
          encouraging users to think out loud proved helpful in understanding
          their experience. The prototypes were perceived as complex, prompting
          the realisation of the need to balance necessary features and hide
          unnecessary ones until required.
        </p>
      </section>
      <iframe
        width="900"
        height="506"
        src="https://www.youtube-nocookie.com/embed/eqmRAftvTXA?si=gn_IQ9_B3s3UiGWl"
        title="YouTube video player"
        allowFullScreen
        className="w-full h-full md:max-w-3xl md:h-[506px] "
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Image
        src="/assets/away-app/stage4.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 4"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage4.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 7: Low-Fidelity Digital Prototype II</h3>
        <h2 className="font-semibold text-3xl mb-5">
          To tackle complexity, we just had to focus on the user flow of adding
          places to the itinerary
        </h2>
        <p>
          We transformed our detailed paper prototype sketches into a
          low-fidelity digital prototype, focusing specifically on enhancing the
          user flow for finding destinations, exploring them, and seamlessly
          adding them to the itinerary. Feedback on this highly focused user
          flow was positive, highlighting its usability, navigation, and
          intuitiveness. Users appreciated the concept of the 'Saved List' for
          decision-making and suggested adding indications of which user added
          each location to consider everyone's preferences. The approach of
          focusing on a simple micro user flow to understand how users complete
          a single task proved effective.
        </p>

        <a
          href="https://www.figma.com/file/sXgrWqoeuuCulnJZS6UCpx/Away-App-Pitch-3?type=design&node-id=0%3A1&t=GV7LTOd5jojztHTL-1"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage5.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 5"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage5.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 8: Low-Fidelity Digital Prototype III</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Once the primary user flow was resolved, we designed features for
          exploring travel content and personalisation
        </h2>
        <p>
          We expanded our low-fidelity digital prototype by detailing the
          Explore, Trips, and Profile sections. Employing Google's Material
          Design Guidelines, UX psychological laws, and fundamental design
          principles, our focus was on creating a minimalist, usable, and
          aesthetically pleasing experience aligned with our refined user
          persona. <br />
          <br />
          The user flow for this stage included actions such as exploring the
          Explore section, creating travel boards in the Profile section, and
          initiating a new trip in the Trips section. Detailed steps involved
          searching for destinations, saving places, and navigating through
          different sections to plan a trip. <br />
          <br />
          User testing conducted in cafeteria settings received positive
          feedback, with users expressing satisfaction with the prototype's
          ability to alleviate the stress of planning a group trip. Feedback
          suggested enhancements, such as category tags for places and articles,
          improved navigation options, and clarifications on certain features.
        </p>

        <a
          href="https://www.figma.com/file/iTfekJIfVUvUQwcpzd73O9/1st-Wireframe_28.02.2023?type=design&node-id=0%3A1&t=JlBO14UQpRejxQe1-1"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage6.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 6"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage6.png"
      />

      <section className="max-w-3xl ">
        <h3>UX Stage 9: High-Fidelity Digital Prototype</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Creating a design system & figma UI prototypes helped us reduce
          development time by over 60%
        </h2>
        <p>
          The process began with establishing a brand identity that reflects
          adventure and exploration for travel enthusiasts. A mood board was
          created, encompassing typography, colours, photographs, and
          iconography. A design system was established within Figma, drawing
          inspiration from Google's Material Design system. High-fidelity
          wireframes were created using the design system and component library.
          A minimalist layout with ample white space, clear spacing, and
          distinguishable interactive elements was focused on. <br />
          <br />
          Feedback included preferences for top title navigation, saving
          articles in the Explore section, displaying full addresses in the
          Android version, adding multiple locations in the trip details form,
          editing trip details after submission, and options to save and share
          trip plans.
        </p>

        <a
          href="https://www.figma.com/proto/3Hh08NUno9m160H45a8DYJ/Hi-Fi-Prototype?type=design&node-id=56-10718&scaling=scale-down&page-id=0%3A1&starting-point-node-id=56%3A10718&show-proto-sidebar=1"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Figma Link <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage7.png"
        width="1280"
        height="720"
        alt="Away App UX Stage 7"
        className="w-full lg:max-w-4xl xl:max-w-5xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage7.png"
      />

      <section className="max-w-3xl ">
        <h3>Building a Data Model</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Mapping out the data flow helped us resolve data complexities before
          developing UI components
        </h2>
        <p>
          Since our app had a complex relationship between different datasets,
          we had to map out the data model. This helped us understand the
          relationships between different datasets and how they would interact
          with each other. We also had to consider the limitations of the
          database we were using and how we could optimise the data model to
          work with the database. Collaborative features were possible with
          sharing datasets between users.
        </p>
      </section>
      <Image
        src="/assets/away-app/away-data-model.png"
        width="1280"
        height="720"
        alt="Away App Data Model"
        className="w-full lg:max-w-4xl  mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-data-model.png"
      />

      <section className="max-w-3xl ">
        <h3>Mobile App Development</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Focusing on developing key features without styling helped us iterate
          & validate UI quickly
        </h2>
        <p>
          After the UX/UI was completed to a certain stage, we started
          developing it. After technical research & evaluating capabilities, we
          decided to go for React Native, Expo, and JavaScript for Frontend and
          Firebase for Backend. We developed the most important features to test
          the main use cases without applying any styling. After usability
          testing and validation, we applied the final styling and refined the
          overall UX.
        </p>

        <a
          href="https://github.com/gupta-karan1/AwayApp"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          GitHub Repository{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/away-before.png"
        width="1024"
        height="768"
        quality={100}
        alt="Away App Before"
        className="w-full lg:max-w-4xl  mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-before.png"
      />

      <section className="max-w-3xl ">
        <h3>Feedback & Iteration</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Simplifying nested navigation & creating multiple ways to add places
          improved task completion
        </h2>
        <p>
          After conducting usability testing with 20+ users, we discovered that
          people had difficulty in creating an itinerary and wishlist because of
          complex navigation, unclear prompts, and lack of multiple pathways.
          So, we redesigned the user flow by simplifying the navigation, using
          clear words, and creating a modal to allow them to quickly add places
          to either itinerary or wishlist or both, resulting in an intuitive
          interaction.
        </p>

        <a
          href="https://docs.google.com/document/d/1u1THDx9E_ZneU6OW0oKZ05nDtSly_qtvmDVQoXnPWoU/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          User Testing Logs{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <div className="carousel ">
        <Image
          src="/assets/away-app/before.jpg"
          width="1280"
          height="720"
          alt="Away App UX Stage 1"
          className="w-full lg:max-w-3xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/before.jpg"
        />
        <Image
          src="/assets/away-app/after.jpg"
          width="1280"
          height="720"
          alt="Away App UX Stage 1"
          className="w-full lg:max-w-3xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/after.jpg"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Use Case </h3>
        <h2 className="font-semibold text-3xl">
          Users can create a group trip by inviting their trip-mates and
          entering trip details
        </h2>
      </section>
      <Image
        src="/assets/away-app/flow1.png"
        width="1280"
        height="720"
        alt="Away App UX Case 1"
        className="w-full lg:max-w-4xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/flow1.png"
      />

      <section className="max-w-3xl ">
        <h3>Use Case </h3>
        <h2 className="font-semibold text-3xl">
          User adds one place to their wishlist and to a day in the itinerary
          within a trip
        </h2>
      </section>
      <Image
        src="/assets/away-app/flow2.png"
        width="1280"
        height="720"
        alt="Away App UX Case 2"
        className="w-full lg:max-w-5xl xl:max-w-7xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/flow2.png"
      />

      <section className="max-w-3xl ">
        <h3>Primary Use Cases </h3>
        <h2 className="font-semibold text-3xl">
          Users build their group trips with itinerary planner, wishlist, and a
          group chat
        </h2>
      </section>

      <div className="carousel w-full ">
        <Image
          src="/assets/away-app/flow4.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow4.png"
        />
        <Image
          src="/assets/away-app/flow5.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow5.png"
        />
        <Image
          src="/assets/away-app/flow6.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow6.png"
        />
        <Image
          src="/assets/away-app/flow7.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow7.png"
        />
        <Image
          src="/assets/away-app/flow8.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow8.png"
        />
        <Image
          src="/assets/away-app/flow9.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow9.png"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Secondary Use Cases </h3>
        <h2 className="font-semibold text-3xl">
          Users explore destinations, customises their profile and save their
          favourite places to their travel boards
        </h2>
      </section>

      <div className="carousel w-full ">
        <Image
          src="/assets/away-app/flow10.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow10.png"
        />
        <Image
          src="/assets/away-app/flow11.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow11.png"
        />
        <Image
          src="/assets/away-app/flow12.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow12.png"
        />
        <Image
          src="/assets/away-app/flow13.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow13.png"
        />
        <Image
          src="/assets/away-app/flow14.png"
          width="1280"
          height="720"
          alt="Away App Use Case"
          className=" lg:max-w-4xl mb-10 carousel-item"
          placeholder="blur"
          blurDataURL="/assets/away-app/flow14.png"
        />
      </div>

      <section className="max-w-3xl ">
        <h3>Quantitative User Testing</h3>
        <h2 className="font-semibold text-3xl mb-5">
          53.8% of participants felt they completed the task of creating an
          itinerary very quickly
        </h2>
        <p>
          Towards the final stages of the development process, we introduced a
          questionnaire to gather quantitative feedback. This method facilitated
          remote testing with users which enabled us to gather a larger number
          of responses in a short amount of time. We designed the questionnaire
          using Google Forms, including five questions based on the System
          Usability Scale (SUS).
          <br /> <br />
          61.5% of users rated the application as useful while 38.5% of users
          rated it as very useful, signifying a positive response to the
          applications usability. 53.8%, felt they completed the task very
          quickly, while an additional 30.8% reported achieving the task
          quickly. Among all features, the map garnered the highest number of
          respondents voting it as a very useful feature, with 18 votes.
          However, it's noteworthy that all 26 respondents voted either very
          useful or useful for the itinerary, underscoring its pivotal role in
          the application. 53.8% of users rated the app as very satisfying,
          while 30.8% rated it as useful, indicating a high overall satisfaction
          level among the respondents.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfunjmtPz6_D7pR5WDL0Us5QWnldBtpdSB83jlDRGEKEJ3CXA/viewform?usp=sf_link"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Survey Form <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/interview.jpg"
        width="1280"
        height="720"
        alt="Away App Usability Testing"
        className="w-full lg:max-w-4xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/interview.jpg"
      />

      <section className="max-w-3xl ">
        <h3>Design Stage - Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Design challenges emphasised research, consistency, and user-centric
          feature prioritisation
        </h2>
        <p>
          <span className="font-semibold text-lg">
            User-Centered Design <br />
          </span>
          Ensuring that the app's design aligns with the diverse needs and
          preferences of users was a continuous challenge. The lesson learned
          was the importance of conducting thorough user research to understand
          user behaviors and preferences. <br />
          <br />
          <span className="font-semibold text-lg">
            Information Architecture <br />
          </span>
          Organizing and presenting a vast amount of travel & trip plan
          information in an intuitive and user-friendly manner presented
          challenges. The lesson here was to prioritize clear and concise
          information presentation.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Visual Consistency <br />
          </span>
          Maintaining a consistent visual identity throughout the app, including
          fonts, colors, and imagery, was challenging. The lesson was to create
          a detailed style guide to enforce consistency.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Navigation Design <br />
          </span>
          Creating an intuitive navigation structure that accommodates multiple
          features and content areas was challenging. The lesson was to
          continually iterate on navigation based on user feedback.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Balancing Functionality and Simplicity <br />
          </span>
          Striking the right balance between offering advanced features and
          keeping the user interface simple and easy to use was a challenge. The
          lesson was to prioritize features that truly enhanced the user
          experience.
        </p>

        <a
          href="https://trello.com/b/sS5guq2q/away-travel-planning-app-project-schedule"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Trello Board <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/stage7.png"
        width="1280"
        height="720"
        alt="Away App Usability Testing"
        className="w-full lg:max-w-4xl xl:max-w-6xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/stage7.png"
      />
      <section className="max-w-3xl ">
        <h3>Development Stage - Challenges & Lessons</h3>
        <h2 className="font-semibold text-3xl mb-5">
          Development challenges emphasised prioritisation, integration, and
          optimization
        </h2>
        <p>
          <span className="font-semibold text-lg">
            Feature Prioritization
            <br />
          </span>
          Determining which features to develop first and which ones to postpone
          or omit was a constant challenge. The lesson was to align feature
          development with the core user needs and project goals.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Third-Party Integrations <br />
          </span>
          Integrating external services and APIs required careful planning and
          often involved unexpected challenges. The lesson was to thoroughly
          research and test third-party integrations.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Complex Data Model
            <br />
          </span>
          Creating a robust and scalable data model to support the app's
          features was a challenge. The lesson was to plan and design the data
          structure before starting development.
          <br />
          <br />
          <span className="font-semibold text-lg">
            Performance Optimization <br />
          </span>
          Balancing performance with rich functionality was an ongoing
          challenge. The lesson was to employ efficient coding practices and
          continuous performance testing.
          <br />
          <br />
          <span className="font-semibold text-lg">
            User Feedback Integration
            <br />
          </span>
          Effectively incorporating user feedback into development without
          causing delays or scope changes was a challenge. The lesson was to
          implement structured feedback channels and prioritise user-driven
          improvements.
        </p>

        <a
          href="https://docs.google.com/document/d/1snJ9M9BQyhq1RXCPZSbzRi4x2nLTPO9gqlxLU8I00Q8/edit?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-accent mt-5"
        >
          Project Documentation{" "}
          <ArrowUpRightIcon className="h-4 w-4 inline-block" />
        </a>
      </section>

      <Image
        src="/assets/away-app/away-last.jpg"
        width="1280"
        height="720"
        alt="Away App Conclusion"
        className="w-full lg:max-w-4xl xl:max-w-6xl mb-10"
        placeholder="blur"
        blurDataURL="/assets/away-app/away-last.jpg"
      />
    </main>
  );
}

export default page;
