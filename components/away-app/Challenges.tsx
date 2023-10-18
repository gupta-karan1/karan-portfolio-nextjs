const designChallenges = [
  {
    title: "User-Centered Design",
    content:
      "Ensuring that the app's design aligns with the diverse needs and preferences of users was a continuous challenge. The lesson learned was the importance of conducting thorough user research to understand user behaviors and preferences.",
  },
  {
    title: "Information Architecture",
    content:
      "Organizing and presenting a vast amount of travel & trip plan information in an intuitive and user-friendly manner presented challenges. The lesson here was to prioritize clear and concise information presentation.",
  },
  {
    title: "Visual Consistency",
    content:
      "Maintaining a consistent visual identity throughout the app, including fonts, colors, and imagery, was challenging. The lesson was to create a detailed style guide to enforce consistency.",
  },
  {
    title: "Navigation Design",
    content:
      " Creating an intuitive navigation structure that accommodates multiple features and content areas was challenging. The lesson was to continually iterate on navigation based on user feedback.",
  },
  {
    title: "Balancing Functionality and Simplicity",
    content:
      "Striking the right balance between offering advanced features and keeping the user interface simple and easy to use was a challenge. The lesson was to prioritize features that truly enhanced the user experience.",
  },
];

const developmentChallenges = [
  {
    title: "Feature Prioritization",
    content:
      "Determining which features to develop first and which ones to postpone or omit was a constant challenge. The lesson was to align feature development with the core user needs and project goals. ",
  },
  {
    title: "Third-Party Integrations",
    content:
      "Integrating external services and APIs required careful planning and often involved unexpected challenges. The lesson was to thoroughly research and test third-party integrations.",
  },
  {
    title: "Complex Data Structures",
    content:
      "Creating a robust and scalable data structure to support the app's features was a challenge. The lesson was to plan and design the data structure before starting development.",
  },
  {
    title: "Performance Optimization",
    content:
      "Balancing performance with rich functionality was an ongoing challenge. The lesson was to employ efficient coding practices and continuous performance testing.",
  },
  {
    title: "User Feedback Integration",
    content:
      "Effectively incorporating user feedback into development without causing delays or scope changes was a challenge. The lesson was to implement structured feedback channels and prioritize user-driven improvements.",
  },
];
function Challenges() {
  return (
    <>
      <h2 className="text-3xl">Challenges & Lessons</h2>
      <div className="flex flex-col lg:flex-row w-full">
        <div className=" xl:h-[750px] h-full w-full lg:w-1/2 card bg-neutral p-10 rounded-box  shadow-xl flex-grow place-items-center grid ">
          <h2 className="text-3xl mb-5 text-center">Design Stage</h2>
          <ul>
            {designChallenges.map((challenge, index) => (
              <li className="mb-5" key={index}>
                <h3 className="text-xl ">{challenge.title}</h3>
                <p className="text-md font-light">{challenge.content}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="divider divider-horizontal text-center self-center">
          VS
        </div>
        <div className=" xl:h-[750px] h-full w-full lg:w-1/2 card bg-neutral p-10 rounded-box shadow-xl flex-grow place-items-center grid ">
          <h2 className="text-3xl mb-5 text-center">Development Stage</h2>
          <ul>
            {developmentChallenges.map((challenge, index) => (
              <li className="mb-5" key={index}>
                <h3 className="text-xl ">{challenge.title}</h3>
                <p className="text-md font-light">{challenge.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Challenges;
