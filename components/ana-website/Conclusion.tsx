import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  BugAntIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid";

const conclusionData = [
  {
    title: "Impact on Business",
    content:
      "Increased the brand awareness and credibility. Increased the number of leads and conversions by attracting 15+ long term clients. Attracted over 20+ skilled employees & interns. ",
    icon: <BriefcaseIcon className="h-10 w-10 text-white" />,
  },
  {
    title: "Hurdles & Challenges",
    content:
      "To showcase the 100+ projects & services in a way that was easy to navigate and understand. To create content that wasn't technical but was able to convey the expertise of the company.",
    icon: <BugAntIcon className="h-10 w-10 text-white" />,
  },
  {
    title: "Lessons Learned",
    content:
      "Understood the importance of research and how it helps in defining the project goals and scope; of design principles and how it can help in creating a better brand identity and design system.",
    icon: <SparklesIcon className="h-10 w-10 text-white" />,
  },

  {
    title: "Next Steps",
    content:
      "To create a perpetual content strategy that would help in increasing brand awareness. This project served as the foundation for my career transition into UX Design and Frontend Development.",
    icon: <ArrowTrendingUpIcon className="h-10 w-10 text-white" />,
  },
];

function Conclusion() {
  return (
    <section className="min-h-screen bg-base-300 flex flex-col items-center justify-center py-10 lg:py-20 px-10 lg:px-20">
      <h1 className="text-6xl mb-10">Conclusion</h1>

      <div className="grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-5">
        {conclusionData.map((data, index) => (
          <div className="card w-full h-full bg-neutral " key={index}>
            <div className="card-body">
              {data.icon}
              <h2 className="card-title ">{data.title}</h2>
              <p className="text-lg ">{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Conclusion;
