import AboutHero from "@/components/about/AboutHero";
import ContactMe from "@/components/home/ContactMe";
import HowIWork from "@/components/home/HowIWork";
import {
  AdjustmentsHorizontalIcon,
  ChatBubbleLeftRightIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  PencilSquareIcon,
  SparklesIcon,
  UserCircleIcon,
  UsersIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const education = [
  {
    degree:
      "MSc Creative Digital Media & UX (Specialization in Mobile & Web Apps)",
    university: "Technological University Dublin, Ireland",
    duration: "September 2022 - December 2023 (1.5 Yrs.)",
    description:
      "Revamped e-commerce site, implemented responsive design using HTML5, CSS3, and JavaScript. Conceptualized and programmed an Augmented Reality app in Unity and Vuforia. Developed and tested games with Agile methodologies in Photoshop, Illustrator, and Unity. Conducted UX testing for a travel app using sketching and Figma. Programmed Grange-Mobile Mobile App with jQuery, Bootstrap, Angular 15, Ionic 7, Firebase, TypeScript, Auth, PostgreSQL, MySQL. Crafted a 9-month group travel planning app using Figma, React Native, JavaScript, and Firebase. Practiced modern technologies like NextJS, TailwindCSS, MongoDB, SASS, and performed unit testing with Jest, DaisyUI, Material UI, NodeJS, and ExpressJS.",
  },
  {
    degree: "Bachelors of Architecture (B.Arch)",
    university: "School of Planning & Architecture, Bhopal, India",
    duration: "June 2014 - June 2019 (5 Yrs.)",
    description:
      "Researched & planned a wide range of large-scale projects, both individually and in teams. Nurtured creativity, attention to detail, and ability to think critically. Gained deep appreciation for design principles, human-centric spaces, and the importance of seamless user experiences. Achieved Best Architecture Design Thesis Award for ‘Handloom Weavers’ Village’ project showcasing user & context research, design iterations, & handling complex projects.",
  },
];

const professional = [
  {
    title: "UX/UI Designer & Developer",
    company: "OneBill Utilities Ltd.",
    duration: "August 2023 - September 2023",
    description:
      "Designed & developed business website with 5+ responsive pages & onboarding form for introducing MVP to the market by understanding client requirements (short deadline & mobile responsive) with HTML, JS & Bootstrap. Implemented SEO best practices with keywords and meta description.",
  },
  // {
  //   title: "Retail Assistant",
  //   company: "Londis Parkgate Street",
  //   duration: "July 2023 - Present",
  //   description:
  //     "Offering efficient and friendly customer service at the till, handling over 1,000+ transactions & 5000-euro sales/daily, enhancing customer satisfaction and repeat business. Managing stock levels by monitoring 200+ inventory items, restocking items, and organizing displays to enhance the shopping environment. ",
  // },
  {
    title: "UX/UI Designer & Project Architect",
    company: "ANA Design Studio Pvt Ltd, Delhi, India ",
    duration: "February 2020 - July 2022",
    description:
      " Redesigned and revamped company website twice with WordPress, resulting in 2,000+ avg monthly views and improved SEO for client, employee, and stakeholder attraction. Conducted extensive market research and user interviews to inform brand strategy, collaterals, and website development. Enhanced brand visibility on LinkedIn from 2,000 to 7,500 followers through a comprehensive strategy involving PR, social media, and email newsletters. Influenced user-centric design for 20+ architectural projects, coordinating with diverse professional teams in Agile project planning for 50,000sqm+ projects. Pioneered a modern graphical language for the company's project portfolio, refurbishing 100+ projects with clear and informative content. Illustrated 300+ architectural drawings into visually compelling diagrams for various platforms. Composed 35+ award submissions, contributing to winning 15+ national awards and securing speaker opportunities. Improved video content with 15+ interactive walkthroughs for immersive project pitches. Prepared detailed 100+ page project reports, presenting design decisions to both internal and external stakeholders.",
  },
  {
    title: "Visual Designer & Architecture Journalist/PR",
    company: "Creative Group LLP, Delhi, India",
    duration: "June 2019 - February 2020",
    description:
      "Managed content creation for the company's website, producing 30+ project case studies and 100+ project graphics to ensure consistent branding. Successfully increased average monthly views from 100 to 1500. Led editorial design and curation for Architecture-Plus magazine, creating 60+ layouts and showcasing 25+ projects, resulting in a 30% increase in sales. Prepared content for 25+ award proposals, highlighting the company's achievements in architecture, engineering, and construction. Collaborated with 5+ fabricators and 4+ artists to coordinate the layout, composition, and installation of 65+ artworks, demonstrating project management, attention to detail, storytelling, and visual design skills.",
  },
  {
    title: "Design Intern",
    company: "Atelier Arcau, Vannes, France",
    duration: "January 2018 - July 2018",
    description:
      " Co-authored with 3 architecture design teams in the curation of 30+ design presentations, 100+ concept diagrams, 3+ physical models, 20+ digital models, and 100+ renderings of urban projects. Corresponded with the communications manager in designing 15+ brand collaterals with brand guidelines, including 3+ interior space branding concepts and 12+ architectural graphics for publications. Designed 50+ wireframes & mockups for design solutions with Photoshop & Illustrator, and received feedback from team members, showcasing the ability to ideate, & iterate for continuous improvement.",
  },
];

const skills = [
  {
    title: "Technical Skills",
    list: [
      "Figma",
      "Adobe PhotoShop",
      "Adobe InDesign",
      "Adobe Illustrator",
      "Adobe XD",
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Angular",
      "Ionic",
      "React",
      "React Native",
      "NextJS",
      "TailwindCSS",
      "MongoDB",
      "Firebase",
      "TypeScript",
      "DaisyUI",
      "Material UI",
      "Agile",
      "Scrum",
      "Git",
      "GitHub",
      "Trello",
    ],
  },
  {
    title: "Non-Technical Skills",
    list: [
      "User Research",
      "User Centred Design",
      "User Testing",
      "Wireframing",
      "Prototyping",
      "Information Architecture",
      "Interaction Design",
      "Visual Design",
      "Journey Mapping",
      "Content Writing",
      "Critical Thinking",
      "Problem Solving",
      "Communication",
      "Empathy",
      "Attention to Detail",
    ],
  },
];

const reasons = [
  {
    title: "Because both are about user centered design",
    description:
      "Architecture is about designing spaces for people to live, work, and play. UX/UI Design is about designing digital products for people to use, enjoy, and share.",
    icon: <UserCircleIcon className="h-10 w-10 text-accent" />,
  },
  {
    title: "Because both are about problem solving",
    description:
      "Architecture is about solving problems of space, movement, and function. UX/UI Design is about solving problems of usability, accessibility, and desirability.",
    icon: <PencilSquareIcon className="h-10 w-10 text-accent" />,
  },

  {
    title: "Because both need attention to detail",
    description:
      "Architecture is about designing spaces with building components, construction detailing, and precision. UX/UI Design is about designing digital experiences with design systems, components, and detailing.",
    icon: <CubeTransparentIcon className="h-10 w-10 text-accent" />,
  },

  {
    title: "Because both need critical thinking",
    description:
      "Architecture is about thinking critically about the impact of design decisions on the environment and society. UX/UI Design is about thinking critically about the impact of design decisions on the user and business.",
    icon: <LightBulbIcon className="h-10 w-10 text-accent" />,
  },
  {
    title: "Because both follow design thinking process",
    description:
      "Architecture is about following a design process of research, ideation, iteration, and implementation. UX/UI Design is about following a design process of research, ideation, iteration, and implementation. ",
    icon: <AdjustmentsHorizontalIcon className="h-10 w-10 text-accent" />,
  },
  {
    title: "Because both involve collaboration",
    description:
      "Architecture is about collaborating with clients, engineers, and contractors. UX/UI Design is about collaborating with clients, developers, and stakeholders. ",
    icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-accent" />,
  },
];

function About() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main>
      <AboutHero />
      <HowIWork />
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Academic Background
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-5 lg:gap-10 px-5">
            {education.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 lg:w-9/12 rounded-none"
              >
                <input type="checkbox" title="collapse" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="lg:text-2xl">{item.degree}</h2>
                  <h3 className="lg:text-xl font-light">{item.university}</h3>
                  <p className="lg:text-lg font-extralight">{item.duration}</p>
                </div>
                <div className="collapse-content ">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5 ">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Professional Background
          </h2>

          <div className="grid grid-cols-1 place-items-center gap-5 px-5">
            {professional.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-base-200 lg:w-9/12 rounded-none"
              >
                <input type="checkbox" title="collapse" />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="lg:text-2xl">{item.title}</h2>
                  <h3 className="lg:text-xl font-light">{item.company}</h3>
                  <p className="lg:text-lg font-extralight">{item.duration}</p>
                </div>
                <div className="collapse-content ">
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5 ">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            My Professional Skills
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 lg:px-20 px-5 ">
            {skills.map((item, index) => (
              <div className="bg-base-200  p-10 lg:h-80" key={index}>
                <h2 className="lg:text-2xl mb-5">{item.title}</h2>

                <div className="flex  gap-2 flex-wrap">
                  {item.list.map((item, index) => (
                    <span className="badge badge-lg badge-accent " key={index}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5 ">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Architecture to UX/UI Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  gap-5 lg:gap-10 lg:px-20 px-5 ">
            {reasons.map((item, index) => (
              <div className="card bg-base-200 lg:h-80" key={index}>
                <div className="card-body  ">
                  {item.icon}
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5 ">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Sketching & Rendering
          </h2>

          <div className="carousel rounded-none carousel-center max-w-7xl p-4 space-x-4 bg-base-200 ">
            {array.map((item, index) => (
              <div className="carousel-item rounded-none" key={index}>
                <Image
                  src={`/assets/about/sketches/sketch-${item}.png`}
                  width={500}
                  height={500}
                  alt="sketching"
                  className="rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-10 py-10 px-5">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Architectural Photography
          </h2>

          <div className="carousel carousel-center max-w-7xl p-4 space-x-4 bg-base-200 rounded-none">
            {array.map((item, index) => (
              <div className="carousel-item" key={index}>
                <Image
                  src={`/assets/about/photos/photo-${item}.png`}
                  width={500}
                  height={500}
                  alt="Photography"
                  className="rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-5 py-10 px-5 ">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Self Published Books
          </h2>

          <p className="text-lg font-light lg:w-6/12  text-center">
            I have written and self published 9+ books on branding, visual
            design, architecture life, self-help, angular development,
            creativity, and ux design.
          </p>
          <div className="carousel carousel-center max-w-7xl p-4 space-x-4 bg-base-200 rounded-none">
            {array.map((item, index) => (
              <div className="carousel-item" key={index}>
                <Image
                  src={`/assets/about/books/book-${item}.png`}
                  width={500}
                  height={500}
                  alt="books"
                  className="rounded-none"
                />
              </div>
            ))}
          </div>

          <a
            href="https://www.amazon.co.uk/Karan-Gupta/e/B08VF66J7J?ref=sr_ntt_srch_lnk_1&qid=1698246554&sr=8-1"
            className="btn btn-primary text-white"
            rel="noreferrer noopener"
            target="_blank"
          >
            View on Amazon <ArrowUpRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-5 py-10 px-5">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Travel & Adventure
          </h2>
          <p className="text-lg font-light lg:w-6/12  text-center">
            I love traveling and exploring new places. I have been to 10+
            countries and 50+ cities. I believe traveling is the best way to
            learn about different cultures and people.
          </p>
          <div className="carousel carousel-center max-w-7xl p-4 space-x-4 bg-base-200 rounded-none">
            {array.map((item, index) => (
              <div className="carousel-item" key={index}>
                <Image
                  src={`/assets/about/travel/travel-${item}.png`}
                  width={500}
                  height={500}
                  alt="books"
                  className="rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className=" min-h-screen flex flex-col justify-center items-center gap-5 py-10 px-5">
          <h2 className=" text-4xl lg:text-5xl font-semibold text-center ">
            Book Recommendations
          </h2>
          <p className="text-lg font-light lg:w-6/12  text-center">
            As an avid reader, I have read 100+ books on various topics. I
            believe reading is the best way to learn from the experiences of
            others. Here are some of my favorite books.
          </p>

          <div className="carousel carousel-center max-w-7xl p-4 space-x-4 bg-base-200 rounded-none">
            {array.map((item, index) => (
              <div className="carousel-item" key={index}>
                <Image
                  src={`/assets/about/recommendations/recommend-${item}.png`}
                  width={500}
                  height={500}
                  alt="books"
                  className="rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactMe />
    </main>
  );
}

export default About;
